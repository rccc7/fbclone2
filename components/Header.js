import Image from 'next/image'
import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon
} from '@heroIcons/react/solid'
import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon,
} from '@heroicons/react/outline'

import HeaderIcon from './HeaderIcon'
import { session, signOut, useSession } from 'next-auth/client'


function Header() {
    // Get the session information from anywhere:
    const [session] = useSession();
    return (
        // z-50 means that the component will be allways over other elements
        //lg:px-5 means that for large screens (equal or greater than 1024 px) add an
        //extra padding of 5 in the x axis
        //shadow-md: Gives a beautiful looking shadow bellow the component
        <div className='sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md'>
            {/* Header left */}
            <div className='flex items-center'>
                {/* The next image component will not be shown unti we scroll to it,
                that is, it uses lazy loading */}
                <Image
                    src='https://upload.wikimedia.org/wikipedia/commons/a/a7/Facebook_f_Logo_%28with_gradient%29.svg'
                    width={40}
                    height={40}
                    layout='fixed'
                />
                {/* We don't want this item to touch the image, so we assign it a margin 
                rounded-full means: border-radius: 9999px;
                Note: The flex-shrink property specifies how the item will shrink relative 
                to the rest of the flexible items inside the same container.
                hidden --> It means (display: none). -->This means that the input by default is hidden, since the
                page is mobile first when the screen width is small then the input will be hidden
                flex-shrink:0 means that the item won't shrink so it'll retain the width it needs
                md:inline-flex --> When we break the medium display size (768px) then the input is shown
                and the display property turns to inline-flex  (dispplay:inline-flex)*/}
                <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2'>
                    <SearchIcon className='h-6 w-6 text-gray-600' />
                    <input className='hidden md:inline-flex ml-2 items-center bg-transparent 
                    outline-none placeholder-gray-500 flex-shrink-0'
                        type='text'
                        placeholder='Search Facebook' />
                </div>
            </div>

            {/* Header center */}
            {/* flex-grow means flex-grow:1 which defines that the item will grow 
            relative to the rest of the flexible items inside the same container. 
            If all the relative items have the same value, then all the items will have
            the same size*/}
            <div className='flex justify-center flex-grow'>
                {/* space-x-6 defines the space between the elements 
                In the small screen by default the space will be 6, then
                md:space-x-2 means that when the screen has a min width of 768px then
                the space will be 2*/}
                <div className='flex space-x-6 md:space-x-2'>
                    <HeaderIcon Icon={HomeIcon} active />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />
                </div>
            </div>

            {/* Header right */}
            {/* sm:space-x-2: After breaking the small size the space of 2  */}
            <div className='flex items-center sm:space-x-2 justify-end'>
                {/* Profile pic */}
                <Image
                    onClick={() => signOut()}
                    className='rounded-full cursor-pointer'
                    src={session.user.image}
                    width={40}
                    height={40}
                    layout='fixed'
                />

                <p className='whitespace-nowrap font-semibold pr-3'>RC CC</p>
                <ViewGridIcon className='icon' />
                <ChatIcon className='icon' />
                <BellIcon className='icon' />
                <ChevronDownIcon className='icon' />
            </div>
        </div>
    )
}

export default Header
