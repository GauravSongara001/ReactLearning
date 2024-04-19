import React from 'react'

export function Button(props) {
    return (
        <button className='btn btn-warning m-3' onClick={props.handleAlert}>{props.buttonName}</button>
    )
}

export default function Event() {
    function handleAlert(message) {
        alert(message)
    }
    return (
        <div className='container'>
            <Button buttonName="Alert button" handleAlert={(event) => {handleAlert("First")}} />
            <Button buttonName="Alert button" handleAlert={(event) => {handleAlert("Second")}} />
            <Button buttonName="Alert button" handleAlert={(event) => {handleAlert("Third")}} />
        </div>
    )
}
