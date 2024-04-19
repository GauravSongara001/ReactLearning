import React from 'react'

function UserList() {
    // const listItems = props.users.map((el) => {
    //     return (
    //         <tr key={el.id}>
    //             <th scope="row">{el.id}</th>
    //             <td>{el.name}</td>
    //             <td>{el.email}</td>
    //             <td>{el.password}</td>
    //         </tr>
    //     )
    // })

  return (
    <div className='container mt-5'>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                </tr>
            </thead>
            <tbody><tr>
                    <th scope="col">id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                </tr></tbody>
        </table>
    </div>
  )
}

export default UserList