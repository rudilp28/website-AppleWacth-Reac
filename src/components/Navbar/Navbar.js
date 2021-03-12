import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div to='/' className='navbar-logo' onClick={closeMobileMenu}>

            <div className="logo">
            <img src="https://i.ibb.co/mJjtp75/logo-Apple.png" alt=""/>
            </div>

          </div>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <div to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </div>
            </li>
            <li className='nav-item'>
              <div
                to='/story'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </div>
            </li>
            <li className='nav-item'>
              <div
                to='/gallery'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products
              </div>
            </li>
            <li className='nav-item'>
              <div
                to='/gallery'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Price
              </div>
            </li>

            {/* <li className='nav-item'>
              <div className="logo2">
                <img src="https://i.ibb.co/2tVDFZY/lupa.png" alt=""/>
              </div>

              <div className="logo3">
                <img src="https://i.ibb.co/n1rLbtf/cesta.png" alt=""/>
              </div>
            </li> */}
          </ul>
          {button && <div to='/sign-up'><div className="logo2"><img src="https://i.ibb.co/2tVDFZY/lupa.png" alt=""/><img src="https://i.ibb.co/n1rLbtf/cesta.png" alt=""/></div> </div>}

          
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;
