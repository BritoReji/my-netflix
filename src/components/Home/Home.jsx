import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './styles.css';
import { EffectCards, Autoplay } from 'swiper/modules';
import process from 'dotenv';
import axios from 'axios';
import NewMovies from './NewMovies/NewMovies';
import './Home.css'

export default function App() {
  const [s, setS] = useState([]);
  const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';

  useEffect(() => {
    alert('top rated is scrollable')
   let TOKEN = ' eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMGUyZWU5MjFjZmU4NjdkMGFkZWFkYWE2ZDE3NGUyNyIsInN1YiI6IjY1YTUxYWZjNjQ3NjU0MDEyZWQ2ZjVmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JdWv4uJ_ZfUw36x8C-odmVTW5Ee7SbJysWlbUAzReIA'
    axios.get(url, {
      headers: {
        Authorization: 'Bearer ' + TOKEN //the token is a variable which holds the token
      }
    })
    .then(response => {
      console.dir(response.data.results);
      // Handle the response data, update the state, or perform other actions as needed
      setS(response.data.results);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }, []);

  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards, Autoplay]}
        autoplay={{ delay: 3000 }}
        className="mySwiper"
        height={1}
        
        
      >
        {s
        
        .map((item, index) => (
          <SwiperSlide key={index} 
          style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500/${item.poster_path})`}}
          >
            
          </SwiperSlide>
        ))}
       
      </Swiper>
      <NewMovies movies={s}/>
    </>
  );
}
