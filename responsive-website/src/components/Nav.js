import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';

const Nav = () =>{
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    return(
        <div>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo'>
                        Brev <i className='fab fa-typo3' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick} >
                        menu <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/idk' className='nav-links' onClick={closeMenu}>
                                idk
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/idk2' className='nav-links' onClick={closeMenu}>
                                idk2
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/idk2' className='nav-links-mobile' onClick={closeMenu}>
                                sign up
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Nav;