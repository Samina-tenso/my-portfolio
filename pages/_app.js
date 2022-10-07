import '../styles/globals.css'
import Home from './Home'
import Nav from './Nav'
import Projects from './Projects'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Home />
      <Projects />
      <Component {...pageProps} />
    </>
  )


}

export default MyApp