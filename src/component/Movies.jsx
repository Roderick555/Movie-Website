import React from 'react'
import data from '../JSON/Movies.json'
import "../component/player.css"
import Button from 'react-bootstrap/Button';

const Movies = () => {
  return (
    <div className='moveleft'>
       <h2>Movies</h2>
       <div className=' p-0  flex-wrap d-flex gap-2'>
             {data.map((value) =>{
                return(
                    <div key={value.id} className='moveT'>
                        <img src={value.url} alt="error image"  className='card-width'/>
                        <h4>{value.title}</h4>
                        <p>{value.duration}</p>
                        <Button variant="outline-success">Download</Button>
                    </div>
                )
             })}
             </div>
    </div>
  )
}

export default Movies
