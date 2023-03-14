import React from 'react';




const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbarCloser'>
                <div className='links'>
                    <div className='logo'>EM</div>
                    <ul className='list'>
                        <li className='listItems'>Home</li>
                        <li className='listItems'>Studio</li>
                        <li className='listItems'>Works</li>
                        <li className='listItems'>Contact</li>
                    </ul>
                </div>
                <div className='icons'>
                    <div className='icon'> <img className='loupe' src="./img/search.png" alt="img loupe" /></div>
                    <button className='buttonNav'>Hire Now</button>
            </div> 
            </div>
        </div>
    );
};

export default Navbar;