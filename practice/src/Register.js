import React, {useState, useEffect} from 'react'

export default function Register(props) {

    useEffect(() => {
      alert("I'm called")
    }, [])
    
    const [text, setText] = useState({
        email: "",
        username: "",
        password: "",
        phone: "",
    })
    const [passwordMode, setpasswordMode] = useState("password")
    
    const textHandler = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        console.log('value: ' + name + " - " + value);
        setText(values => ({...values, [name]: value}))
        console.log('text: ', text);
    }

    const formSubmitHandler = (e) => {
        e.preventDefault();
        // setText(text.username.toUpperCase())
        console.log('text ---: ', text);
        props.userArr.push(text);
        console.log('props.userArr: ', props.userArr);
    }

    const viewPassword = (e) => {
        e.preventDefault();
        
        if (passwordMode === "password") {
            setpasswordMode("text")
        } else {
            setpasswordMode("password")
        }
    }

    return (
        <div className='container'>
            <form className='mt-5'>
                <h3>{props.heading}</h3>
                <div className="mb-3 mt-5">
                    <label htmlFor="username" className="form-label">Name</label>
                    <input type="text" name='username' value={text.username || ""} onChange={textHandler} className="form-control" id="username" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="text" name='email' value={text.email || ""} onChange={textHandler} className="form-control" id="email" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input type="text" name='phone' value={text.phone || ""} onChange={textHandler} className="form-control" id="phone" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type={passwordMode} name='password' value={text.password || ""} onChange={textHandler} className="form-control" id="exampleInputPassword1" />
                </div>
                <button onClick={viewPassword} className="btn btn-outline-primary me-2 mt-2">View Passsword</button>
                <button onClick={formSubmitHandler} className="btn btn-outline-success mt-2">Submit</button>
            </form>
        </div>
    )
}
