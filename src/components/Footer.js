import React from 'react'
const Footer = () => {
  return (
    <footer className='footer bg-black small text-center text-white-50'>
      <div className='container'>
        <div>
          Consultas y/o sugerencias:
          <div>
            <a href='mailto:ominuka.mauro@gmail.com' rel='noreferrer'><strong>ominuka.mauro@gmail.com</strong></a>
          </div>
          <div>
            <a className='mx-2' href='https://github.com/OmiMauro' rel='noreferrer' target='_blank'><i className='fab fa-github' /></a>
            <a className='mx-2' href='https://linkedin.com/in/mauro-ominuka-89156a210' target='_blank' rel='noreferrer'><i className='fab fa-linkedin'> </i></a>
          </div>

        </div>
        &copy; Omiñuka, Mauro Cristian Emanuel.
      </div>
    </footer>
  )
}

export default Footer
