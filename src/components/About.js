import React from 'react'
const About = () => {
  return (
    <section className='about-section text-center' id='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8 mx-auto'>
            <h2 className='text-white mb-4'>IV Encuentro Provincial de Cicloturismo MTB</h2>
            <p className='text-white-50'>Esta iniciativa surge con el próposito de promover el encuentro y participación de los
              ciclistas, también como un medio de conocer los diferentes rincones nuestra provincia. Disfrutando de la naturaleza y a
              su vez de lo que nos une, una pasioń por pedalear.
            </p>
          </div>
        </div>
        {/* <!--img(src='public/imgs/portada1.jpg' alt='')--> */}
      </div>
      <div id='img-about' />
    </section>
  )
}

export default About
