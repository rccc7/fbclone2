import { useCollection } from 'react-firebase-hooks/firestore'
import { db } from '../firebase'
import Post from './Post';

function Posts({ posts }) {
    //The original function call should be as follows: 
    //const [realtimePosts, loading, error] = useCollection(....
    //However, by the moment we don't need the loading and error.
    const [realtimePosts] = useCollection(
        db.collection('fbNextJsPosts').orderBy('timestamp', 'desc')
    );
    return (
        <div>

            {
                // Only show the realtimePosts if we have them, otherwise show
                //the server rendered posts
                realtimePosts ?
                    /* Here, we add the optional chaining "?" because at loading time
                    there would be circunstances that we won't retrieve anything yet, so that
                    in order to not receive any error, then just do de map when the
                    realtimePost has data*/
                    realtimePosts?.docs.map(post => (
                        <Post
                            key={post.id}
                            name={post.data().name}
                            message={post.data().message}
                            email={post.data().email}
                            timestamp={post.data().timestamp}
                            image={post.data().image}
                            postImage={post.data().postImage}
                        />
                    )) : (
                        posts.map(post => (
                            <Post
                                key={post.id}
                                name={post.name}
                                message={post.message}
                                email={post.email}
                                timestamp={post.timestamp}
                                image={post.image}
                                postImage={post.postImage}
                            />
                        ))
                    )
            }


        </div>
    )
}

export default Posts
