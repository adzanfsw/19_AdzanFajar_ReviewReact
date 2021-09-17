import '../assets/style.css'

function Home() {
  return (
    <div className="App">
        <header>
            <img src={require('../assets/images/logo-ALTA.png').default} />
           
            <ul>
                <li><a href="contact_us.html">CONTACT US</a></li>
                <li>EXPERIENCE</li>
                <li>ABOUT</li>
                <li style={{color: "#F47522"}}>HOME</li>
            </ul>
        </header>

        <content>
            <div class="foto">
                <img src={require('../assets/images/cewek.jpg').default} />
            </div>

            <div className="nama">
                Hi, my name is <br />
                <label>Anne Sullivan</label>
                <p>I build things for the web.</p>

                <button>Get in touch</button>
            </div>
        </content>
    </div>
  );
}

export default Home;