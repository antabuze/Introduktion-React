import react,{Component} from 'react'
import {Link} from 'react-router-dom'
function NavBar() {
    return (
      <nav>
        <ul>
          <li className="btn"><Link to="/home">Home</Link> </li>
          <li className="btn"><Link to="/admins">Admins</Link> </li>
          <li className="btn"><Link to="/catfact">Cat Fact</Link> </li>
        </ul>
      </nav>
    );
  }
  
  export default NavBar;
  