import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Nav = () =>{
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    return(
        <div>
            <nav className='nav'>
                <div>
                    <Link to='/' className='navbar-logo'>
                        Brev <i className='' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick} >
                        menu <i className={click ? '' : ''}/>
                    </div>
                    <ul className={click ? 'menu-active' : 'nav-menu'}>
                        <li>
                            <Link to='/' className='' onClick={closeMenu}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to='/idk' className='' onClick={closeMenu}>
                                idk
                            </Link>
                        </li>
                        <li>
                            <Link to='/idk2' className='' onClick={closeMenu}>
                                idk2
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Nav;