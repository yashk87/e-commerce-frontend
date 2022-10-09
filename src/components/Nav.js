import React from 'react';
import Hamburger from './Hamburger'
import { useState } from 'react';
import {
  Link, useNavigate
} from 'react-router-dom';
const Nav = () => {
  const auth = localStorage.getItem('user')
  const navigate = useNavigate();
  const [hide,isHide] = useState(true)
  const logout = () => {
    localStorage.clear()
    navigate('/signup')
    isHide(false)
  }

  const toggle = () =>{
    hide?isHide(false) : isHide(true)
    console.log(hide)
  }


  return (
    <>



      <nav className='navbar sticky'>

        {auth ?

          <ul>
            <img className='logo' onClick={() => navigate('/')} src="https://www.graphicsprings.com/filestorage/stencils/0b06ebeb6a8f99bb799115f9a01fef2b.png?width=150&height=150" alt="" />
            <li>
              <Link to='/' className='link'>Products</Link>
            </li>
            <li>
              <Link to='/add' className='link'>Add Products</Link>
            </li>
            {/* <li>
      <Link to='/update' className='link'>Update Products</Link>
      </li> */}
            <li>
              <Link to='/profile' className='link'>Profile</Link>
            </li>
            <li>
              <Link to='/signup' onClick={logout} className='link'>Logout({JSON.parse(auth).name})</Link>
            </li>
            <img onClick={toggle} className='hamburger' src="https://img.icons8.com/office/344/menu--v1.png" alt="" />
          </ul>

          :
          <nav className='navbar'>
            <ul className='flex' style={
              {"display":"flex",
              "flex-direction" : "row"
            }
            }>
              <img className='logobig' onClick={() => navigate('/')} src="https://www.graphicsprings.com/filestorage/stencils/0b06ebeb6a8f99bb799115f9a01fef2b.png?width=150&height=150" alt="" />
              <li><Link to='/signup' className='link'>Sign Up</Link></li>
              <li><Link to='/login' className='link'>Login</Link></li>
              <img onClick={toggle} className='hamburger' src="https://img.icons8.com/office/344/menu--v1.png" alt="" />
            </ul>

          </nav>
        }

      </nav>
      
      {
        hide ? 
      <Hamburger className="ham" truth={hide} />

      : ""
}


    </>
  )
}

export default Nav;