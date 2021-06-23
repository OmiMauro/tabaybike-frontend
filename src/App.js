import './App.css'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import About from './components/About'
import Projects from './components/Projects'
import Signup from './components/Signup'
import Footer from './components/Footer'
import Header from './components/Header'
import { SnackbarProvider } from 'snackfy'

const App = () => {
  return (
    <>
      <SnackbarProvider>
        <main id='page-top'>
          <Navbar />
          <Header />
          <About />
          <Projects />
          <Signup />
          <Contact />
          <Footer />
        </main>
      </SnackbarProvider>
    </>
  )
}

export default App
