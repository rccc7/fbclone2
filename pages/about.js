import React from "react"
import Header from '../components/Header'
import { useSession } from "next-auth/client"

function About() {
    const [session] = useSession();
    return (
        <div>
            {session ?
                <Header /> : <h1></h1>

            }
            <div className='flex flex-col items-center'>
                <h1>Developed by RCCC 😎.</h1>
                <p>This is just a clone for testing and practice purposes only.</p>
                <p>Images and attribution:</p>
                <p>Facebook Logo obtained from <a className='text-blue-700' href='https://commons.wikimedia.org/wiki/File:Facebook_f_Logo_(with_gradient).svg' target='_blank' rel="noreferrer" >Wikimedia Commons</a></p>
                <p>Jeff Bezos: <a className='text-blue-700' href='https://commons.wikimedia.org/wiki/File:Secretary_of_Defense_Ash_Carter_meets_with_Jeff_Bezos,_May_5,_2016_(1)_(cropped).jpg' target='_blank' rel="noreferrer" >Wikimedia Commons</a></p>
                <p>Elon Musk: <a className='text-blue-700' href='https://commons.wikimedia.org/wiki/File:Elon_Musk_Royal_Society.jpg' target='_blank' rel="noreferrer" >Wikimedia Commons</a></p>
                <p>Mark Zukerberg: <a className='text-blue-700' href='https://commons.wikimedia.org/wiki/File:Mark_Zuckerberg_em_setembro_de_2014.jpg' target='_blank' rel="noreferrer" >Wikimedia Commons</a></p>
                <p>Bill Gates: <a className='text-blue-700' href='https://commons.wikimedia.org/wiki/File:Bill_Gates_at_2019_ARPA-E.jpg' target='_blank' rel="noreferrer" >Wikimedia Commons</a></p>
                <p>IJustine: <a className='text-blue-700' href='https://commons.wikimedia.org/wiki/File:IJustine_2015.jpg' target='_blank' rel="noreferrer" >Wikimedia Commons</a></p>
                <p>Luisito Comunica: <a className='text-blue-700' href='https://commons.wikimedia.org/wiki/File:Luisito_Comunica.jpg' target='_blank' rel="noreferrer" >Wikimedia Commons</a></p>
                <p>Neo - Matrix: <a className='text-blue-700' href='https://www.flickr.com/photos/nunoluciano/5396200604/sizes/o/' target='_blank' rel="noreferrer" >Flickr</a></p>
            </div>
        </div>
    )
}

export default About
