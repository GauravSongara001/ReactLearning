import React from 'react'

export default function List(props) {

    const listItems = props.userArr.map(user => {
        return (
            <tr key={user.id}>
                <th>{user.id}</th>
                <td>{user.username}</td>
                <td>{user.phone}</td>
                <td>{user.gender}</td>
            </tr> 
        )
    })

    return (
        <div className='container mt-5'>
            <table className="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {listItems}
                </tbody>
            </table>
        </div>
    )
}
