import StoryCard from "./StoryCard";

// Here, we'll define a data structure with the predefined stories
const stories = [
    {
        name: 'RCCC',
        src: 'https://live.staticflickr.com/4135/5396200604_4984178503_o.jpg',
        profile: 'https://live.staticflickr.com/4135/5396200604_4984178503_o.jpg',
        attribution: 'https://www.flickr.com/photos/nunoluciano/5396200604/sizes/o/',
    },
    {
        name: 'Elon Musk',
        src: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg',
        profile: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg',
        attribution: 'https://commons.wikimedia.org/wiki/File:Elon_Musk_Royal_Society.jpg',
    },
    {
        name: 'Jeff Bezoz',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Secretary_of_Defense_Ash_Carter_meets_with_Jeff_Bezos%2C_May_5%2C_2016_%281%29_%28cropped%29.jpg/936px-Secretary_of_Defense_Ash_Carter_meets_with_Jeff_Bezos%2C_May_5%2C_2016_%281%29_%28cropped%29.jpg',
        profile: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Secretary_of_Defense_Ash_Carter_meets_with_Jeff_Bezos%2C_May_5%2C_2016_%281%29_%28cropped%29.jpg/936px-Secretary_of_Defense_Ash_Carter_meets_with_Jeff_Bezos%2C_May_5%2C_2016_%281%29_%28cropped%29.jpg',
        attribution: 'https://commons.wikimedia.org/wiki/File:Secretary_of_Defense_Ash_Carter_meets_with_Jeff_Bezos,_May_5,_2016_(1)_(cropped).jpg',
    },
    {
        name: 'Mark Zukerberg',
        src: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Mark_Zuckerberg_em_setembro_de_2014.jpg',
        profile: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Mark_Zuckerberg_em_setembro_de_2014.jpg',
        attribution: 'https://commons.wikimedia.org/wiki/File:Mark_Zuckerberg_em_setembro_de_2014.jpg',
    },
    {
        name: 'Bill Gates',
        src: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Bill_Gates_at_2019_ARPA-E.jpg',
        profile: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Bill_Gates_at_2019_ARPA-E.jpg',
        attribution: 'https://commons.wikimedia.org/wiki/File:Bill_Gates_at_2019_ARPA-E.jpg',
    },
];

function Stories() {
    return (
        <div className='flex justify-center space-x-3 mx-auto'>
            {
                stories.map(story => (
                    <StoryCard
                        key={story.src}
                        name={story.name}
                        src={story.src}
                        profile={story.profile}
                    />
                ))
            }
        </div>
    )
}

// Here

export default Stories
