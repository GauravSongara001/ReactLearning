import React, { useState } from 'react'

function Register({addUserHandler}) {
    const [user, setuser] = useState({name: "", email: "", password: ""})

    const registerUser = (e) => {
        e.preventDefault();

        addUserHandler(user)
        setuser({name: "", email: "", password: ""})
    }
    
    return (
        <div className='container mt-5'>
            <form className='col-6' onSubmit={registerUser}>
            <div className="mb-3">
                    <label htmlFor="username" className="form-label">Name</label>
                    <input type="text" value={user.name} onChange={(e) => setuser({...user, name: e.target.value})} className="form-control" id="username" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="text" value={user.email} onChange={(e) => setuser({...user, email: e.target.value})} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" value={user.password} onChange={(e) => setuser({...user, password: e.target.value})} className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Register