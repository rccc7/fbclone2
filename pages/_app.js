import '../styles/globals.css'
import { Provider } from 'next-auth/client'

function MyApp({ Component, pageProps }) {
  return (

    // Wrap the application content inside the provider
    <Provider session={pageProps.session}>


      <Component {...pageProps} />
    </Provider>

  )
}

export default MyApp
