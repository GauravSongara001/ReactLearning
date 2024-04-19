import React, {useState} from 'react'  

export default function Gallery(props) {
    const [index, setIndex] = useState(0)

    const handlePreviousImage = () => {
        index > 0 ? setIndex(index - 1) : setIndex(index)
    }
    const handleNextImage = () => {
        index < props.sculptureList.length - 1 ? setIndex(index + 1) : setIndex(index)
    }

    return (
    <div className='container mt-5'>
        <div className='col-12 mb-3'>
            <h3>{props.sculptureList[index].name}</h3>
            <img className='w-40' src={props.sculptureList[index].url} alt={props.sculptureList[index].alt}></img>
        </div>
        <button className='btn btn-primary mx-4' onClick={handlePreviousImage}>Previous</button>
        <button className='btn btn-primary mx-3' onClick={handleNextImage}>Next</button>
    </div>
    )
}
