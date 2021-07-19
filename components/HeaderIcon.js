function HeaderIcon({ Icon, active }) {
    return (
        // md:px-10 means that for screens with a minimun width of 
        //768px apply the horizontal padding of 10
        //sm:h-14: For small screens (min width 640px) give a height of 14
        //md:hover:bg-gray-100 -> Apply the hover effect just when we are in a medium screen
        //active:border-b-2 -> When clicked apply a bottom border of 2px
        //active:border-blue-500 --> When clicked the border color is blue. 
        <div className='flex items-center cursor-pointer md:px-10 sm:h-14 
            md:hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500
            group'>
            {/* h-5 -->By default (mobile first the height of the icons will be 5)
            group-hover:text-blue-500 --> When we hover in any part of the group,
             the text will be blue. Anyways, we can also define this class directly in the 
             inmediate superior div without defining the group
             sm:h-7 --> Once we break the small size limit (640px) then the height
             of the icons will be 7
             ${active && 'text-blue-500'} --> If the active property is set then the
             text color will be blue*/}
            <Icon className={`h-5 ${active ? 'text-blue-500' : 'text-gray-500'} text-center sm:h-7 mx-auto
             group-hover:text-blue-500`} />
        </div>
    )
}

export default HeaderIcon
