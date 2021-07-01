import React from 'react'
const Footer = () => {
  return (
    <footer className='footer bg-black small text-center text-white-50'>
      <strong><a href='privacy_policy.html' target='_blank' rel='noreferrer'>Politicas de privacidad</a></strong>
      <div className='container'>
        &copy; Omiñuka Mauro Cristian Emanuel.
        <div>

          <a href='mailto:ominuka.mauro@gmail.com' rel='noreferrer'><strong>Sugerencias</strong></a>
          <div>
            <a className='mx-2' href='https://github.com/OmiMauro' rel='noreferrer' target='_blank'><i className='fab fa-github' /></a>
          </div>
          {/*   <a className='mx-2' href='https://linkedin.com/in/mauro-ominuka-89156a210' target='_blank' rel='noreferrer'><i className='fab fa-linkedin'> </i></a>
          */}
        </div>

      </div>
    </footer>
  )
}

export default Footer
