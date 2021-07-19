import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';
import Logo from './cropped-MeJeNe-Logo.jpg';

function NavBar() {
  const [click, setClick] = useState(false);
  const [Button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else{
      setButton(true);
    }
  };

  useEffect(() =>{
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

    return (
      <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                  <img src={Logo} alt='logo'/> 
                  {/* <i className="fas fa-tshirt"></i> */}
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active': 'nav-menu'}>
                  <li className='nav-item'>
                    <Link to='/news' className='nav-links' onClick={closeMobileMenu}>اخبار</Link></li>
                  <li className='nav-item'>
                    <Link to='/tips' className='nav-links' onClick={closeMobileMenu}>ترفند</Link></li>
                  <li className='nav-item'>
                    <Link to='/models' className='nav-links' onClick={closeMobileMenu}>مدل ها</Link></li>
                  <li className='nav-item'>
                    <Link to='/designers' className='nav-links' onClick={closeMobileMenu}>استایلیست</Link></li>
                  <li className='nav-item'>
                    <Link to='/brands' className='nav-links' onClick={closeMobileMenu}>برند ها</Link></li>
                  <li className='nav-item'>
                    <Link to='/business' className='nav-links' onClick={closeMobileMenu}>کسب وکار</Link></li>
                  {/* <li className='nav-item'>
                    Direct Page
                    <Link to='/MeJeNe' className='nav-links-mobile' onClick={closeMobileMenu}></Link></li> */}
                </ul>
                {/* {button && <Button buttonStyle='btn--outline'>مجله تخصصی مد و فشن</Button>} */}
            </div>
        </nav>
      </>
    )
}

export default NavBar
