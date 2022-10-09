import React from 'react';
import { useState } from 'react';
import {
  Link, useNavigate
} from 'react-router-dom';
const Hamburger = (props) => {
  const auth = localStorage.getItem('user')
  const navigate = useNavigate();
  const [hide, setHide] = useState(true);
  const logout = () => {
    localStorage.clear()
    navigate('/signup')
  }

  let toggle = () =>{
    if(hide) {
        setHide(false)
    }
    else{
        setHide(true)
    }
  }

  return (
    <>
      <nav style={{left : hide ? "0%"  :"100%" }} className='overlay'>

        {auth ?
          <ul className='center'>
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
          <nav className='navbar login'>
            <ul>
              <img className='logobig' onClick={() => navigate('/')} src="https://www.graphicsprings.com/filestorage/stencils/0b06ebeb6a8f99bb799115f9a01fef2b.png?width=150&height=150" alt="" />
              <li><Link to='/signup' className='link'>Sign Up</Link></li>
              <li><Link to='/login' className='link'>Login</Link></li>
              <img onClick={toggle} className='hamburger' src="https://img.icons8.com/office/344/menu--v1.png" alt="" />
            </ul>
      
          </nav>
        }


      </nav>

    </>
  )
}

export default Hamburger;