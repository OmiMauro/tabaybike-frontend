import './App.css'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import About from './components/About'
import Projects from './components/Projects'
/* import Signup from './components/Signup'
 */
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
          <div>
            <section className='signup-section' id='signup'>
              <div className='container'>
                <div className='row'>
                  <div className='col-md-10 col-lg-8 mx-auto text-center'>
                    <h2 className='text-white mb-1'>Las inscripciones para el encuentro del 24 y 25 de Julio se encuentran cerradas. </h2>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <Contact />
          <Footer />
        </main>
      </SnackbarProvider>
    </>
  )
}

export default App
