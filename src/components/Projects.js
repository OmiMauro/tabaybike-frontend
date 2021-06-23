import React from 'react'
const Projects = () => {
  return (
    <section className='projects-section bg-light' id='projects'>
      <div className='container'>
        <div className='row align-items-center no-gutters mb-4 mb-lg-5'>
          <div className='col-xl-8 col-lg-7'><img className='img-fluid mb-3 mb-lg-0' src='imgs/portada1.jpg' alt='' /></div>
          <div className='col-xl-4 col-lg-5'>
            <div className='featured-text text-center text-lg-left'>
              <h4>Tabay Bike</h4>
              <p className='text-black-50 mb-0'>Some description
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, rem sunt! Nulla saepe aliquid dolore itaque eum, laboriosam esse in doloribus nobis sed aliquam consectetur, quam debitis, omnis provident? Libero!
              </p>
            </div>
          </div>
        </div>
        <div className='row justify-content-center no-gutters mb-5 mb-lg-0'>
          <div className='col-lg-6'><img className='img-fluid' src='imgs/salidasNocturnas.jpg' alt='' /></div>
          <div className='col-lg-6'>
            <div className='bg-black text-center h-100 project'>
              <div className='d-flex h-100'>
                <div className='project-text w-100 my-auto text-center text-lg-left'>
                  <h4 className='text-white'>Title</h4>
                  <p className='mb-0 text-white-50'>Some description <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, rem sunt! Nulla saepe aliquid dolore itaque eum, laboriosam esse in doloribus nobis sed aliquam consectetur, quam debitis, omnis provident? Libero!</p>
                  <hr className='d-none d-lg-block mb-0 ml-0' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row justify-content-center no-gutters'>
          <div className='col-lg-6'><img className='img-fluid' src='imgs/bikePinal.jpg' alt='' /></div>
          <div className='col-lg-6 order-lg-first'>
            <div className='bg-black text-center h-100 project'>
              <div className='d-flex h-100'>
                <div className='project-text w-100 my-auto text-center text-lg-right'>
                  <h4 className='text-white'>Title</h4>
                  <p className='mb-0 text-white-50'>Some description<br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, rem sunt! Nulla saepe aliquid dolore itaque eum, laboriosam esse in doloribus nobis sed aliquam consectetur, quam debitis, omnis provident? Libero!</p>
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
