import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './styles.css';
import { EffectCards, Autoplay } from 'swiper/modules';

import axios from 'axios';
import NewMovies from './NewMovies/NewMovies';
import './Home.css'

;
const apiKey = import.meta.env.VITE_SOME_KEY;

export default function App() {
  const [s, setS] = useState([]);
  const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
  console.log('API Key:', apiKey);
  


  useEffect(() => {
   console.log(apiKey);
   
    axios.get(url, {
      headers: {
        Authorization: 'Bearer ' + apiKey //the token is a variable which holds the token
      }
    })
    .then(response => {
      
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
