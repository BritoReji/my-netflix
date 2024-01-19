// Home.jsx

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './styles.css';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import axios from 'axios';
import NewMovies from './NewMovies/NewMovies';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [movies, setMovies] = useState([]);
  const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: 'Bearer ' + apiKey,
          },
        });
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    return () => {
      // Cleanup function (if needed)
    };
  }, [url, apiKey]);

  return (
    <>
      <Swiper
        style={{
          "--swiper-theme-color": "red",
        }}
        cssMode={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        autoplay={{ delay: 3000 }}
        loop={movies.length > 1}
        className="mySwiper"
        slidesPerView={1}
        slidesPerGroup={1}
      >
        {movies.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="gra">
              <div
                style={{
                  backgroundImage: `linear-gradient(to top, rgb(17, 11, 11), rgba(0, 0, 0, 0))`,
                }}
              ></div>
              <img
                src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                alt={`Movie backdrop ${index}`}
                className="movie-image"
              />
              <div className="title">
                <h2>{item.title}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <NewMovies apiKey={apiKey} />
    </>
  );
};

export default Home;
