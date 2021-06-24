import React from 'react'
const Contact = () => {
  return (
    <section className='contact-section bg-black'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4 mb-3 mb-md-0'>
            <div className='card py-4 h-100'>
              <div className='card-body text-center'><i className='fas fa-map-marked-alt text-primary mb-2' />
                <h4 className='text-uppercase m-0'>Ubicacion</h4>
                <hr className='my-4' />
                <div className='small text-black-50'>Jardín América, Misiones, Argentina.</div>
              </div>
            </div>
          </div>
          <div className='col-md-4 mb-3 mb-md-0'>
            <div className='card py-4 h-100'>
              <div className='card-body text-center'><i className='fas fa-envelope text-primary mb-2' />
                <h4 className='text-uppercase m-0'>Instagram</h4>
                <hr className='my-4' />
                <div className='small text-black-50'>
                  <a href='https://www.instagram.com/tabay_bike_jardin_america/' rel='noreferrer' target='_blank'>Tabay Bike Jardín América</a>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4 mb-3 mb-md-0'>
            <div className='card py-4 h-100'>
              <div className='card-body text-center'><i className='fas fa-mobile-alt text-primary mb-2' />
                <h4 className='text-uppercase m-0'>Grupo de Whatsapp</h4>
                <hr className='my-4' />
                <div className='small text-black-50'> <a href='https://chat.whatsapp.com/LfdZr7FVbAS9J5rRX7xdEt' rel='noreferrer' /></div>
              </div>
            </div>
          </div>
        </div>
        <div className='social d-flex justify-content-center'>
          <a className='mx-2' href='https://instagram.com/tabay_bike_jardin_america/' target='_blank' rel='noreferrer'>
            <i class='fab fa-instagram' />
          </a>
          <a class='mx-2' href='https://chat.whatsapp.com/LfdZr7FVbAS9J5rRX7xdEt' target='_blank' rel='noreferrer'>
            <i class='fab fa-whatsapp' />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
