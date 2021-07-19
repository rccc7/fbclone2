import Image from 'next/image'
function SidebarRow({ src, Icon, title }) {
    return (
        <div className='flex items-center space-x-2 p-4
        hover:bg-gray-200 rounded-xl cursor-pointer'>
            {/* If we have the src parameter, then render it */}
            {src && (
                <Image
                    className='rounded-full'
                    src={src}
                    width={30}
                    height={30}
                    layout='fixed'
                />
            )}
            {Icon && (
                <Icon className='h-8 w-8 text-blue-500 ' />
            )}
            {/* Mobile first: hidden by default and render it only when the 
            screen size breaks the sm limit (640px) */}
            <p className='hidden sm:inline-flex font-medium'>{title}</p>
        </div>
    )
}

export default SidebarRow
