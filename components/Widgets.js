import { SearchIcon } from '@heroicons/react/outline'
import { DotsHorizontalIcon, VideoCameraIcon } from '@heroicons/react/solid'
import Contact from './Contact'

const contacts = [
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Secretary_of_Defense_Ash_Carter_meets_with_Jeff_Bezos%2C_May_5%2C_2016_%281%29_%28cropped%29.jpg/936px-Secretary_of_Defense_Ash_Carter_meets_with_Jeff_Bezos%2C_May_5%2C_2016_%281%29_%28cropped%29.jpg', name: 'Jeff Bezos', attribution: 'https://commons.wikimedia.org/wiki/File:Secretary_of_Defense_Ash_Carter_meets_with_Jeff_Bezos,_May_5,_2016_(1)_(cropped).jpg' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg', name: 'Elon Musk', attribution: 'https://commons.wikimedia.org/wiki/File:Elon_Musk_Royal_Society.jpg' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Mark_Zuckerberg_em_setembro_de_2014.jpg', name: 'Mark Zukerberg', attribution: 'https://commons.wikimedia.org/wiki/File:Mark_Zuckerberg_em_setembro_de_2014.jpg' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Bill_Gates_at_2019_ARPA-E.jpg', name: 'Bill Gates', attribution: 'https://commons.wikimedia.org/wiki/File:Bill_Gates_at_2019_ARPA-E.jpg' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/IJustine_2015.jpg', name: 'iJustine', attribution: 'https://commons.wikimedia.org/wiki/File:IJustine_2015.jpg' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Luisito_Comunica.jpg', name: 'Luisito Comunica', attribution: 'https://commons.wikimedia.org/wiki/File:Luisito_Comunica.jpg' },
    { src: 'https://live.staticflickr.com/4135/5396200604_4984178503_o.jpg', name: 'RCCC', attribution: 'https://www.flickr.com/photos/nunoluciano/5396200604/sizes/o/' },
]
function Widgets() {
    return (
        // The widgets component will be hidden by default
        <div className='hidden lg:flex flex-col w-60 p-2 mt-5'>
            <div className='flex justify-between items-center text-gray-500 mb-5'>
                <h2 className='text-xl'> Contacts</h2>
                <div className='flex space-x-2'>
                    <VideoCameraIcon className='h-6' />
                    <SearchIcon className='h-6' />
                    <DotsHorizontalIcon className='h-6' />
                </div>
            </div>

            {contacts.map(contact => (
                <Contact
                    key={contact.src}
                    src={contact.src}
                    name={contact.name}
                />
            ))}
        </div>
    )
}


export default Widgets
