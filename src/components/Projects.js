import React from 'react'
const Projects = () => {
  return (
    <section className='projects-section bg-light' id='projects'>
      <div className='container'>
        <div className='row align-items-center no-gutters mb-4 mb-lg-5'>
          <div className='col-xl-8 col-lg-7'><img className='img-fluid mb-3 mb-lg-0' src='imgs/invitacion.jpg' alt='Telefonos de contacto' /></div>
          <div className='col-xl-4 col-lg-5'>
            <div className='featured-text text-center text-lg-left'>
              <h4>Encuentro provincial de cicloturismo autoasistido</h4>
              <p className='text-black-50 mb-0'>Cronograma</p>
              <ul>
                <li className='list-unstyled'>24 de Julio: 14hs paseo</li>
                <li className='list-unstyled'>25 de Julio: 7hs salida desde el Salto Tabay 60km</li>
                <li className='list-unstyled'>25 de Julio: 7:30hs 35km</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='row justify-content-center no-gutters mb-5 mb-lg-0'>
          <div className='col-lg-6' id='recorridos'>
            <img className='img-fluid' src='imgs/salidasNocturnas.jpg' alt='' />
          </div>
          <div className='col-lg-6 order-lg-first'>
            <div className='bg-black text-center h-100 project'>
              <div className='d-flex h-100'>
                <div className='project-text w-100 my-auto text-center text-lg-right'>
                  <h4 className='text-white'>Recorrido de 35km</h4>
                  <p className='mb-0 text-white-50'>Recorrido de 35km la salida será el 25 de julio a las 8 AM. </p>
                  <a href='https://goo.gl/maps/WRjb3dqW2kVkyAhb7' rel='noreferrer' target='_blank'>Descargar indicaciones</a>
                  <hr className='d-none d-lg-block mb-0 mr-0' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row justify-content-center no-gutters mb-5 mb-lg-0'>
          <div className='col-lg-6'>
            <img className='img-fluid' src='imgs/bikePinal.jpg' alt='' />
          </div>
          <div className='col-lg-6'>
            <div className='bg-black text-center h-100 project'>
              <div className='d-flex h-100'>
                <div className='project-text w-100 my-auto text-center text-lg-left'>
                  <h4 className='text-white'>Recorrido de 55km</h4>
                  <p className='mb-0 text-white-50'>Recorrido de 55km la salida será el 25 de julio a las 7 AM. </p>
                  <a href='https://goo.gl/maps/WRjb3dqW2kVkyAhb7' rel='noreferrer' target='_blank'>Descargar indicaciones</a>
                  <hr className='d-none d-lg-block mb-0 ml-0' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row justify-content-center no-gutters mb-5 mb-lg-0'>
          <div className='col-lg-6' id='alojamientos'>
            <img className='img-fluid' src='imgs/contacts.jpg' alt='' />
          </div>
          <div className='col-lg-6 order-lg-first'>
            <div className='bg-black text-center h-100 project'>
              <div className='d-flex h-100'>
                <div className='project-text w-100 my-auto text-center text-lg-right'>
                  <h6 className='text-white'>Alojamientos</h6>
                  <ul>
                    <li className='list-unstyled'>Complejos Saltos del Tabay: <a href='tel:+543743400421'>+543743400421</a></li>
                    <li className='list-unstyled'>Complejo Baden Baden:<a href='tel:+543743460923'>+543743460923</a></li>
                    <li className='list-unstyled'>Complejo Paraiso Lodge: <a href='tel:+543743460517'>+543743460517</a></li>
                    <li className='list-unstyled'>Complejo America: <a href='tel:+543743460521'>+543743460521</a></li>
                    <li className='list-unstyled'>Hotel Las Azaleas: <a href='tel:+543743444378'>+543743444378</a></li>
                    <li className='list-unstyled'>Cabañas Kito: <a href='tel:+543743435856'>+543743435856</a></li>
                  </ul>
                  <hr className='d-none d-lg-block mb-0 mr-0' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Projects
