import React from 'react'
const Projects = () => {
  return (
    <section className='projects-section bg-light' id='projects'>
      <div className='container'>
        <div className='row align-items-center no-gutters mb-4 mb-lg-5'>
          <div className='col-xl-8 col-lg-7'><img className='img-fluid mb-3 mb-lg-0' src='imgs/invitacion.jpg' alt='Invitacion' /></div>
          <div className='col-xl-4 col-lg-5'>
            <div className='featured-text text-center text-lg-left'>
              <h3>IV Encuentro Provincial de MTB</h3>
              <h4 className='text-black-50 mb-0'>Cronograma</h4>
              <ul className='text-left'>
                <li className='list-unstyled'>
                  24 de Julio:
                  <ul>
                    <li className='list-unstyled'>14:00hs Salida desde el Salto Tabay</li>
                    <li className='list-unstyled'>17:30hs Merienda en el Complejo Ysiry.</li>
                  </ul>
                </li>
                <li className='list-unstyled'>25 de Julio:
                  <ul>
                    <li className='list-unstyled'>7hs largada desde el Salto Tabay</li>
                    <li className='list-unstyled'>13hs almuerzo en el Salto Tabay a cargo del municipio. </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='row justify-content-center no-gutters mb-5 mb-lg-0'>
          <div className='col-lg-6'>
            <iframe src='https://www.google.com/maps/d/embed?mid=1IfYT7r0iioXa2U9GlrjZd_1iV0u21o2f' width='100%' height='100%' title='Sabado-42km' />
          </div>
          <div className='col-lg-6 '>
            <div className='bg-black text-center h-100 project'>
              <div className='d-flex h-100'>
                <div className='project-text w-100 my-auto text-center text-lg-left'>
                  <h4 className='text-white'>Sábado</h4>
                  <ul className='text-left text-white-50'>
                    <li className='list-unstyled'>Salida desde el Salto Tabay</li>
                    <li className='list-unstyled'>Cruce 4 Bocas</li>
                    <li className='list-unstyled'>Colonia Naranjito</li>
                    <li className='list-unstyled'>Iglesia Santa Teresita</li>
                    <li className='list-unstyled'>Colonia Tabay</li>
                    <li className='list-unstyled'>Retorno por Barrio San Antonio</li>
                    <li className='list-unstyled'>Llegada al Salto Tabay</li>
                  </ul>
                  <a
                    href='https://www.google.com/maps/d/embed?mid=1IfYT7r0iioXa2U9GlrjZd_1iV0u21o2f'
                    rel='noreferrer' target='_blank'
                  >Descargar indicaciones
                  </a>
                  {/*                   <a href='https://goo.gl/maps/WRjb3dqW2kVkyAhb7' rel='noreferrer' target='_blank'>Descargar indicaciones</a>
 */}                  <hr className='d-none d-lg-block mb-0 ml-0' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row justify-content-center no-gutters mb-5 mb-lg-0'>
          <div className='col-lg-6' id='recorridos'>
            <iframe src='https://www.google.com/maps/d/embed?mid=1PiKJ5L_kXO6dt2hbEc4Cut6z_MumG91d' width='100%' height='100%' title='38km' />
            {/*             <img className='img-fluid' src='imgs/salidasNocturnas.jpg' alt='' /> */}
          </div>
          <div className='col-lg-6 order-lg-first'>
            <div className='bg-black text-center h-100 project'>
              <div className='d-flex h-100'>
                <div className='project-text w-100 my-auto text-center text-lg-left'>
                  <h4 className='text-white'>38km</h4>
                  <ul className='text-left text-white-50'>
                    <li className='list-unstyled'>Salida desde el Salto Tabay</li>
                    <li className='list-unstyled'>Terminal de Jardín América</li>
                    <li className='list-unstyled'>Iglesia Santa Teresita</li>
                    <li className='list-unstyled'>Plaza de Colonia Oasis</li>
                    <li className='list-unstyled'>Retorno por Colonia Tabay</li>
                    <li className='list-unstyled'>Llegada al Salto Tabay</li>
                  </ul>
                  <a href='https://www.google.com/maps/d/embed?mid=1PiKJ5L_kXO6dt2hbEc4Cut6z_MumG91d' rel='noreferrer' target='_blank'>Descargar indicaciones</a>
                  <hr className='d-none d-lg-block mb-0 ml-0' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row justify-content-center no-gutters mb-5 mb-lg-0'>
          <div className='col-lg-6'>
            <iframe src='https://www.google.com/maps/d/embed?mid=1Kh_HUgIh4zR4e-ThtZLxUaTbsbxP9wS4' width='100%' height='100%' title='57km' />
          </div>
          <div className='col-lg-6 '>
            <div className='bg-black text-center h-100 project'>
              <div className='d-flex h-100'>
                <div className='project-text w-100 my-auto text-center text-lg-left'>
                  <h4 className='text-white'>57km</h4>
                  <ul className='text-left text-white-50'>
                    <li className='list-unstyled'>Salto Tabay</li>
                    <li className='list-unstyled'>Terminal de Jardín América</li>
                    <li className='list-unstyled'>Salto El Solito</li>
                    <li className='list-unstyled'>Plaza de Colonia Polana</li>
                    <li className='list-unstyled'>Plaza de Colonia Oasis</li>
                    <li className='list-unstyled'>Colonia Tabay</li>
                    <li className='list-unstyled'>Barrio San Antonio</li>
                    <li className='list-unstyled'>Salto Tabay</li>
                  </ul>
                  <a
                    href='https://www.google.com/maps/d/embed?mid=1Kh_HUgIh4zR4e-ThtZLxUaTbsbxP9wS4'
                    rel='noreferrer' target='_blank'
                  >Descargar indicaciones
                  </a>
                  {/*                   <a href='https://goo.gl/maps/WRjb3dqW2kVkyAhb7' rel='noreferrer' target='_blank'>Descargar indicaciones</a>
 */}                  <hr className='d-none d-lg-block mb-0 ml-0' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row justify-content-center no-gutters mb-5 mb-lg-0'>
          {/*           <div className='col-lg-6' id='alojamientos'>
            <img className='img-fluid' src='imgs/contacts.jpg' alt='' />
          </div> */}
          <div className='col-lg-6 order-lg-first' id='alojamientos'>
            <div className='bg-black text-center h-100 project'>
              <div className='d-flex h-100'>
                <div className='project-text w-100 my-auto text-center text-lg-left'>
                  <h6 className='text-white'>Restaurantes y Deliveries</h6>
                  <ul className='text-left'>
                    <li className='list-unstyled text-white'>Eli-Mark 2: <a href='tel:+543743499901'>+543743499901</a></li>
                    <li className='list-unstyled text-white'>Eli-Mark Terminal: <a href='tel:+543743415836'>+543743415836</a></li>
                    <li className='list-unstyled text-white'>La Tabla: <a href='tel:+543743541581'>+543743541581</a></li>
                    <li className='list-unstyled text-white'>Pizza-Plaza: <a href='tel:+543743461851'>+543743461851</a></li>

                  </ul>
                  <hr className='d-none d-lg-block mb-0 mr-35' />
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6 order-lg-first'>
            <div className='bg-black text-center h-100 project'>
              <div className='d-flex h-100'>
                <div className='project-text w-100 my-auto text-center text-lg-left'>
                  <h6 className='text-white'>Alojamientos</h6>
                  <ul className='text-left'>
                    <li className='list-unstyled text-white'>Cabañas Kito: <a href='tel:+543743435856'>+543743435856</a></li>
                    <li className='list-unstyled text-white'>Complejo Saltos del Tabay: <a href='tel:+543743400421'>+543743400421</a></li>
                    <li className='list-unstyled text-white'>Baden Baden:<a href='tel:+543743460923'>+543743460923</a></li>
                    <li className='list-unstyled text-white'>Paraiso Lodge: <a href='tel:+543743460517'>+543743460517</a></li>
                    <li className='list-unstyled text-white'>Hotel America: <a href='tel:+543743460521'>+543743460521</a></li>
                    <li className='list-unstyled text-white'>Hotel Las Azaleas: <a href='tel:+543743444378'>+543743444378</a></li>
                  </ul>
                  <hr className='d-none d-lg-block mb-0 mr-35' />
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
