import { useDispatch } from "react-redux";
import { passData } from "../store/UserSlice";
import { useState } from "react/cjs/react.development";
import { Link } from "react-router-dom";
import '../assets/style-contact-us.css'

function ContactUs () {
    const [data, setData] = useState ({
        fname: "",
        email: "",
        nomor: "",
        negara: "Selected",
        bio: ""
    })

    const regexNum = /^[0-9]*$/;
    const regexWord = /^[A-Za-z ]*$/;
    const regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const [errNama, setErrNama] = useState ("")
    const [errMail, setErrMail] = useState ("")
    const [errNum, setErrNum] = useState ("")

    const dispatch = useDispatch()

    const handleInput = e => {
    const nama = e.target.name;
    const value = e.target.value;

        if (nama === "fname") {
            if (regexWord.test(value)) {
                setErrNama("")
            } else {
                setErrNama("Nama Lengkap harus berupa huruf!")
            }
        }

        if (nama === "email") {
            if (regexMail.test(value)) {
                setErrMail("")
            } else {
                setErrMail("Email harus valid!")
            }
        }

        if (nama === "nomor") {
            if (regexNum.test(value)) {
                setErrNum("")
            } else {
                setErrNum("No HP harus berupa angka!")
            }
        }

        setData ({
            ...data,
            [nama]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formIsNotEmpty = data.fname && data.email && data.nomor

        if (formIsNotEmpty) {
            const newData = {
                fname: data.fname,
                email: data.email,
                nomor: data.nomor,
                negara: data.negara,
                bio: data.bio,
            }

            dispatch(passData(newData));
            setData({
                fname: "",
                email: "",
                nomor: "",
                negara: "Selected",
                bio: ""
            })
        } else {
            alert("Data masih kosong!!")
        }
    }

    // const handleSubmit = (event) => {
    //     if (errNama !== "") {
    //         alert ("Terdapat data yang belum seseuai!")
    //     } else if (errMail !== "") {
    //         alert ("Terdapat data yang belum seseuai!")
    //     } else if (errNum !== "") {
    //         alert ("Terdapat data yang belum seseuai!")
    //     } else {
    //         alert ("Pendaftaran Anda Berhasil!!")
    //     }

    //     event.preventDefault()
    // }

    return (
        <div className="container">
            <div className="gambar">
                <img src={require('../assets/images/logoputih.png').default} />
                <div className="biru">
                    
                </div>    
            </div>

            <div className="formulir" id="form">
                <form className="isi form">
                    Contact Us

                    <label>
                        <p>Full Name</p>
                        <input type="text" name="fname" value={data.fname} onChange={handleInput} placeholder="Your full name here .." required/> <br />
                        <span style={{color: "red", fontSize: 13, margin: 0}}>{errNama}</span>
                    </label>

                    <label>
                        <p>Email Address</p>
                        <input type="text" name="email" value={data.email} onChange={handleInput} placeholder="example@domain.com" required/> <br />
                        <span style={{color: "red", fontSize: 13, marginBottom: 10}}>{errMail}</span>
                    </label>

                    <label>
                        <p>Phone Number</p>
                        <input type="text" name="nomor" value={data.nomor} onChange={handleInput} placeholder="0 87362 xxxxx" required/> <br />
                        <span style={{color: "red", fontSize: 13, marginBottom: 10}}>{errNum}</span>
                    </label>

                    <label>
                        <p>Nationality:</p>
                        <select name="negara" value={data.negara} onChange={handleInput}>
                            <option id="pilih" value="pilih" disabled selected hidden>Selected</option>
                            <option value="indo">Indonesian</option>
                            <option value="amrik">American</option>
                            <option value="malay">Malaysian</option>
                            <option value="rusia">Russian</option>
                            <option value="inggris">British</option>
                        </select>
                    </label>

                    <label>
                        <p style={{marginBottom: 11}}>Message</p>
                        <textarea name="bio" value={data.bio} onChange={handleInput} rows="10" placeholder="Your message here .." /> <br />
                    </label>
                    
                    <button onClick={handleSubmit}><Link to="/review">Submit</Link></button>
                </form>
            </div>
        </div>
    );
    
}

export default ContactUs;