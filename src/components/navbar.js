import React from 'react';
import {Link, NavLink, withRouter } from 'react-router-dom';

const Navbar =  () => {
  return(
    <nav>
      <div>
        <a href="#">Pokes Time </a>
        <ul>
          <li> <Link to="/">Home </Link></li>

            <li><Link to="/about">About</Link></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
    </nav>

  )
}

export default withRouter(Navbar);
