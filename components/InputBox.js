import Image from 'next/image'
import { useSession } from 'next-auth/client'
import { CameraIcon, EmojiHappyIcon, VideoCameraIcon } from '@heroicons/react/solid';
import { useRef, useState } from 'react';
import { db, storage } from '../firebase'
import firebase from 'firebase'

function InputBox() {
    const [session] = useSession();
    // Initialy, the reference is null
    const inputRef = useRef(null)
    const filePickerRef = useRef(null);
    const [imageToPost, setImageToPost] = useState(null);

    const sendPost = (e) => {
        e.preventDefault();

        // alert('Heyyy')
        //If the value of the input (inputRef) is empty, then do nothing
        if (!inputRef.current.value) return;


        db.collection('fbNextJsPosts').add({
            message: inputRef.current.value,
            name: session.user.name,
            email: session.user.email,
            image: session.user.image,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        }).then(doc => {
            //if there is an image to upload, then upload it
            if (imageToPost) {
                //funky upload stuff:
                // storage.ref() -> Returns a reference to the firebase storage with 
                // which we can upload files. If the folder post does not exist, then
                //it'll be automatically created.
                //we use the putString method to upload the image as a string since the 
                //image is base 64 encoded, that is the image is uploaded as a string of data
                //we sen the format as 'data_url' because we read the image as a dataUrl
                //as seen in the function addImageToPost: reader.readAsDataURL(....)
                const uploadTask = storage.ref(`posts/${doc.id}`).
                    putString(imageToPost, 'data_url');

                removeImage();

                // The third argument is a function which will be called 
                //If there is an error, which basicalle logs the error to the console
                // The fourth argument is the function that will be called in case
                //the upload completes successfully.
                uploadTask.on('state_change', null,
                    error => console.log(error), () => {
                        //when the upload completes get the download URL and 
                        //update the document adding the url of the just uploaded image

                        storage.ref('posts').child(doc.id)//This is the same as: storage.ref(`posts/$doc.id`)
                            .getDownloadURL()
                            .then(url => {
                                db.collection('fbNextJsPosts').doc(doc.id).set({
                                    postImage: url
                                }, { merge: true })//-->IMPORTANT: If we don't specify this, then the whole document will be replaced.
                            })
                    })
            }
        })

        inputRef.current.value = "";
    }

    const addImageToPost = (e) => {
        const reader = new FileReader();
        // If the user selected a file...
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }
        //When the reader loads we'll attach a function to it
        reader.onload = (readerEvent) => {
            setImageToPost(readerEvent.target.result);
        }
    }

    const removeImage = () => {
        setImageToPost(null);
    }

    return (
        <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6'>
            <div className='flex space-x-4 p-4 items-center'>
                <Image
                    className='rounded-full'
                    src={session.user.image}
                    width={40}
                    height={40}
                    layout='fixed'
                />
                <form className='flex flex-1'>
                    <input
                        className='rounded-full h-12 bg-gray-100 flex-grow focus:outline-none'
                        type='text'
                        placeholder={`What's on your mind, ${session.user.name}?`}
                        // Here, we define the reference to this input
                        ref={inputRef}
                    />
                    <button hidden type='submit' onClick={sendPost}>Submit</button>
                </form>
                {/* if there is an image to post then show the preview beside the input*/}
                {imageToPost && (
                    <div onClick={removeImage} className='flex flex-col
                    filter hover:brightness-110 transition duration-150
                    transform hover:scale-105 cursor-pointer'>
                        <Image
                            className='h-10 object-contain '
                            src={imageToPost} alt=""
                        />
                        <p className='text-xs text-red-500 text-center'>Remove</p>
                    </div>
                )}

            </div>

            <div className='flex justify-evenly border-t'>
                {/* Here the class inputIcon is a personalized class defined in styles/globals.css */}
                <div className='inputIcon'>
                    <VideoCameraIcon className='h-7 text-red-500' />
                    <p className='text-xs sm:text-sm xl:text-base'>Live Video</p>
                </div>

                <div
                    // Since the filePickerRef's input is a type of file, the method click
                    //causes to automatically call the file explorer to select the image
                    onClick={() => filePickerRef.current.click()}
                    className='inputIcon' >
                    <CameraIcon className='h-7 text-green-400' />
                    <p className='text-xs sm:text-sm xl:text-base'>Photo/Video</p>
                    {/* onChange occurs when we select the file */}
                    <input ref={filePickerRef} onChange={addImageToPost} type='file' hidden />
                </div>

                <div className='inputIcon'>
                    <EmojiHappyIcon className='h-7 text-yellow-500' />
                    <p className='text-xs sm:text-sm xl:text-base'>Feeling/Activity</p>
                </div>
            </div>
        </div>
    )
}

export default InputBox
