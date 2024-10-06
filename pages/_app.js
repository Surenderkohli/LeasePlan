import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
 
  return(<><Head>
        <meta property="og:title" content="LeasePlan"/>
   <meta property="og:image" content="/images/slide2.jpg" />
   </Head>
  <Component {...pageProps} />
  </>) 
}

export default MyApp
