import '../assets/style-news.css'
import { Link } from "react-router-dom";

function News() {
    fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "quotes15.p.rapidapi.com",
          "x-rapidapi-key": "a016b89190msh6a25aff9c82f9b8p125500jsn4fa7436267a2"
        }
    })
    .then(response => response.json())
    .then(response => {
        console.log(response);

        document.getElementById('quote').innerHTML = response.content;
        document.getElementById('author').innerHTML = '- ' + response.originator.name + ' -';
    })
    .catch(err => {
        console.error(err);
    });

    return (
      <div className="Back">
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
          <article>
              <div class="quoteContainer">
                  <div id="quote"></div>
                  <div id="author"></div>
              </div>
          </article>
      </div>
    );
}

export default News;