import React from 'react';                
import { useState } from 'react';
import {
  Link, useNavigate
} from 'react-router-dom';
const Nav = () => {
  const auth = localStorage.getItem('user')
  const navigate = useNavigate();
  const [isMobile,setisMobile] = useState(false)
  const logout = () => {
    localStorage.clear()
    navigate('/signup')
    isMobile ? setisMobile(false) : setisMobile(true)

  }

  const toggle = () =>{

    isMobile ? setisMobile(false) : setisMobile(true)
  }


  return (
    <>

      <nav className='navbar'>

        {auth ?
        
          <ul className={isMobile?'nav-link-mobile' : ""}>
            <img className='logo' onClick={() => navigate('/')} src="https://www.graphicsprings.com/filestorage/stencils/0b06ebeb6a8f99bb799115f9a01fef2b.png?width=150&height=150" alt="" />
            <li>
              <Link to='/' onClick={toggle} className='link product-link'>Products</Link>
            </li>
            <li>
              <Link to='/add' onClick={toggle} className='link'>Add Products</Link>
            </li>
            <li>
              <Link to='/profile' onClick={toggle} className='link'>Profile</Link>
            </li>
            <li>
              <Link to='/signup' onClick={logout} className='link'>Logout({JSON.parse(auth).name})</Link>
            </li>
            <img onClick={toggle} className='hamburger' src="https://img.icons8.com/office/344/menu--v1.png" alt="" />
       
          </ul>
          
          :
          <nav className='navbar'>
            <ul className={isMobile? 'nav-link-mobile' : "" }>
              <img className='logobig' onClick={() => navigate('/')} src="https://www.graphicsprings.com/filestorage/stencils/0b06ebeb6a8f99bb799115f9a01fef2b.png?width=150&height=150" alt="" />
              <li><Link to='/signup' onClick={toggle} className='link'>Sign Up</Link></li>
              <li><Link to='/login' onClick={toggle} className='link'>Login</Link></li>
              <img onClick={toggle} className='hamburger' src="https://img.icons8.com/office/344/menu--v1.png" alt=""/> </ul>
          </nav>
        }

      </nav>
      
    </>
  )
}

export default Nav;