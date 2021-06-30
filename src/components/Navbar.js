const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light fixed-top' id='mainNav'>
      <div className='container'><a className='navbar-brand js-scroll-trigger' href='#page-top'>Tabay Bike</a><button className='navbar-toggler navbar-toggler-right' type='button' data-toggle='collapse' data-target='#navbarResponsive' aria-controls='navbarResponsive' aria-expanded='false' aria-label='Toggle navigation'>Menu<i className='fas fa-bars' /></button>
        <div className='collapse navbar-collapse' id='navbarResponsive'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'><a className='nav-link js-scroll-trigger' href='#projects'>Eventos</a></li>
            <li className='nav-item'><a className='nav-link js-scroll-trigger' href='#recorridos'>Recorridos</a></li>
            <li className='nav-item'><a className='nav-link js-scroll-trigger' href='#alojamientos'>Alojamientos</a></li>
            <li className='nav-item'><a className='nav-link js-scroll-trigger' href='#signup'>Inscripcion</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
