import InputBox from "./InputBox";
import Posts from "./Posts";
import Stories from "./Stories";

export default function Feed({ posts }) {
    // console.log('teh posts>>>>', posts)
    return (
        // flex-grow means flex-grow: 1 which means: Use as much space as it can.
        //In order to use the scrollbar-hide, we must install the tailwind-scrollbar-hide plugin
        <div className='flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 
        overflow-y-auto scrollbar-hide'>
            <div className='mx-auto max-w-md md:max-w-lg lg:max-w-2xl'>
                {/* Stories */}
                <Stories />
                {/* Input Box */}
                <InputBox />
                {/* Posts
                Here, we pass the server rendered posts to the Posts component */}
                <Posts posts={posts} />
            </div>
        </div>
    )
}
