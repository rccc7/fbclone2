import Image from 'next/image'
import { ChatIcon, ShareIcon, ThumbUpIcon } from '@heroicons/react/outline'

function Post({ name, message, email, postImage, image, timestamp }) {
    return (
        <div className='flex flex-col'>
            <div className='p-5 bg-white mt-5 rounded-t-2xl shadow-sm'>
                <div className='flex items-center space-x-2'>
                    <img
                        className='rounded-full'
                        src={image}
                        width={40}
                        height={40}
                        alt=""
                    />
                    <div>
                        <p className='font-medium'>{name}</p>
                        {
                            // Since the timestamp is initially null (because it is defined as null 
                            //in the posts initially received from the server. (see index.js))
                            //we ask first if the timestamp is undefined, in that case render 
                            //loading, otherwise render the timestamp so that we won't get
                            //an 'invalid date' text instead of the timestamp
                            // when we initial load the page (or refresh it)
                            timestamp ? (
                                <p className='text-xs text-gray-400' >
                                    {new Date(timestamp?.toDate()).toLocaleString()}
                                </p>
                            ) : (
                                <p className='text-xs text-gray-400'>Loading</p>
                            )
                        }

                    </div>
                </div>

                <p className='pt-4'>{message}</p>
            </div>

            {/* Render the post image only if there is a post image. 
            Lazy loading is applied whereve we have the Image tag */}
            {postImage && (
                <div className='relative h-56 md:h-96 bg-white '>
                    <Image
                        src={postImage}
                        objectFit='cover'
                        layout='fill' //we use this property when we don't specify the width and heigth
                    />
                </div>
            )}

            {/* Footer section of the post */}
            <div className='flex justify-between items-center rounded-b-2xl 
                bg-white shadow-md text-gray-400 border-t'>
                <div className='inputIcon rounded-none rounded-bl-2xl'>
                    <ThumbUpIcon className='h-4' />
                    <p className='text-xs sm:text-base'>Like</p>
                </div>

                <div className='inputIcon rounded-none '>
                    <ChatIcon className='h-4' />
                    <p className='text-xs sm:text-base'>Comment</p>
                </div>

                <div className='inputIcon rounded-none rounded-br-2xl'>
                    <ShareIcon className='h-4' />
                    <p className='text-xs sm:text-base'>Share</p>
                </div>
            </div>

        </div>
    )
}

export default Post
