import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <div className='logo'>
          Logo
        </div>
        <nav>
          <ul>
          <li className='first'><Link to='/'>Home</Link></li>
          <li><Link to='/products'>Products</Link></li>
          <li className='last'><Link to='/contact'>Contact</Link></li>
          </ul>
        </nav>

      </header>
    );
  }
}

export default Header;
