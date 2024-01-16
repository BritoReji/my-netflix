import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './styles.css';
import { Navigation, Pagination, Mousewheel, Keyboard,Autoplay } from 'swiper/modules';
import axios from 'axios';
import NewMovies from './NewMovies/NewMovies';
import './Home.css'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

;
const apiKey = import.meta.env.VITE_API_KEY;

export default function App() {
  const [s, setS] = useState([]);
  const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
  
  


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
      style={{
        "--swiper-theme-color":"red",
        
      }}
         cssMode={true}
         modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
         navigation={true}
         pagination={true}
         mousewheel={true}
         keyboard={true}
         autoplay={{ delay: 3000 }} // Set the autoplay delay
         loop={true}
         className="mySwiper"
      >
        {s
        
        .map((item, index) => (
          <div className="gra" key={index}>
         <SwiperSlide key={index} 
          style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.backdrop_path})`,
        
        }}
          >
            
          </SwiperSlide>
          </div>
         
        ))}
       
      </Swiper>
      <NewMovies apiKey={apiKey}/>
    </>
  );
}
