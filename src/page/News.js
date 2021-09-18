import '../assets/style.css'
import { Link } from "react-router-dom";

function News() {
  return (
    <div>
        <header>
            <img src={require('../assets/images/logo-ALTA.png').default} />
           
            <ul>
                <li><Link to="/contact">CONTACT US</Link></li>
                <li>EXPERIENCE</li>
                <li>ABOUT</li>
                <Link to="/news"><li style={{color: "#F47522"}}>NEWS</li></Link>
                <li style={{color: "#F47522"}}><Link to="/">HOME</Link></li>
            </ul>
        </header>
    </div>
  );
}

export default News;