import "@fortawesome/fontawesome-svg-core/styles.css";
import Head from 'next/head';
import Script from 'next/script';
import '/public/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <>
    <Head>
    <title>Oasis Charity</title>
      
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <meta name="title" content="Oasis Charity"></meta>
      <meta name="description" content="Build your dream"></meta>
      

      {/* Link  */}
    </Head>
    
    <Script
      id="bootstrap-cdn"
src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" />
    <Component {...pageProps} />
  </>
}
