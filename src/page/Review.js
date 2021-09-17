import { useState } from "react/cjs/react.development";
import '../assets/style-review.css'

function Review () {
    return (
        <div>
            <div className="kotak">
                <div className="hasil">
                    <label id="nama"> Full Name       : </label> <br />
                    <label id="email"> Email Adress    : </label> <br />
                    <label id="nomer"> Phone Number    : </label> <br />
                    <label id="negara"> Nationality     : </label> <br /> <br />
                    <label id="tulis"> Bla bla bla </label>
                </div>

                <hr size="1" width="70%" color="#CCD7EB" /> 

                <div className="box">
                    Thanks for contacting us! <br />
                    We will be in touch with you shortly. <br /> <br />

                    <button>Home</button>
                </div>
            </div>

            <div className="bawah">
                <img src={require('../assets/images/dot.png').default} />
            </div>
        </div>
    );
}

export default Review;