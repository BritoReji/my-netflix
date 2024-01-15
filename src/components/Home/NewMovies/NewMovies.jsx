import React, { useEffect, useState } from 'react'
import './NewMoies.css'
import axios from 'axios'
function NewMovies({movies}) {
    const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';

    const [newm, setnew] = useState([])
    useEffect(()=>{
        let TOKEN = ' eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMGUyZWU5MjFjZmU4NjdkMGFkZWFkYWE2ZDE3NGUyNyIsInN1YiI6IjY1YTUxYWZjNjQ3NjU0MDEyZWQ2ZjVmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JdWv4uJ_ZfUw36x8C-odmVTW5Ee7SbJysWlbUAzReIA'
        axios.get(url, {
          headers: {
            Authorization: 'Bearer ' + TOKEN //the token is a variable which holds the token
          }
        })
        .then(response => {
          console.dir(response.data.results);
          // Handle the response data, update the state, or perform other actions as needed
          setnew(response.data.results);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    },[])
    console.log(movies);
  return (
    <div>
        <h4>Top Rated</h4>
        <hr />
        <div className="new-movies">
            {
                newm.map((item,index)=>{
                    return <img key={index} className='n-mov' src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt="" srcset="" />
                })
            }
            
           
            </div>
    </div>
  )
}

export default NewMovies