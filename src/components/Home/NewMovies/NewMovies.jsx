import React from 'react'
import './NewMoies.css'
function NewMovies({movies}) {
    console.log(movies);
  return (
    <div>
        <h4> New Movies</h4>
        <hr />
        <div className="new-movies">
            {
                movies.map((item,index)=>{
                    return <img key={index} className='n-mov' src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt="" srcset="" />
                })
            }
            
           
            </div>
    </div>
  )
}

export default NewMovies