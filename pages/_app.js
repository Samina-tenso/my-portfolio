import '../styles/globals.css'
import Home from './Home'
import Nav from './Nav'
import Projects from './Projects'
import Contact from './Contact'
import About from './About'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Home />
      <Projects />
      <About />
      <Contact />
    </>
  )
}

export default MyApp