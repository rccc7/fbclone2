import Image from "next/image"
import { signIn } from "next-auth/client"

function Login() {
    return (
        <div className='grid place-items-center'>
            <Image
                src='https://upload.wikimedia.org/wikipedia/commons/a/a7/Facebook_f_Logo_%28with_gradient%29.svg'
                height={400}
                width={400}
                objectFit='contain'
            />
            <h1 onClick={signIn} className='mt-5 p-5 bg-blue-500 rounded-full cursor-pointer 
            text-white hover:bg-gray-400 hover:text-black'>
                Login with Google
            </h1>
        </div>
    )
}

export default Login
