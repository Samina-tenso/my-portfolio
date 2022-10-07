import '../styles/globals.css'
import Home from './Home'
import Nav from './Nav'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Home />

      <Component {...pageProps} />
    </>
  )


}

export default MyApp