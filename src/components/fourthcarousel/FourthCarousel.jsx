import './FourthCarousel.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay, FreeMode } from 'swiper/modules';
import { Link } from 'react-router-dom';

const FourthCarousel = () => {
    const [fourthData, setfourthData] = useState([]);

    useEffect(() => {
        const headers = {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTRlNDk0NDNjMmZmYTcxNTVlNzVhOTZmOGFkYzZmMiIsInN1YiI6IjY1MDFhMzgxZGI0ZWQ2MTAzODU2NjRjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bmvXFaEvRE6vCIpbFF3b4mlPvCrYfggjStqJSBN1bXc'
        };
        axios.get("https://api.themoviedb.org/3/discover/movie?&with_genres=35", { headers })
          .then(response => setfourthData(response.data.results))
          .catch(err => console.log(err))
    
      }, [])
      console.log(fourthData);
  return (
    <div className='fourth__swiper'>
      <h1>Family Movies</h1>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        autoplay={{delay: 3000, disableOnInteraction: false}}
        loop={true}
        draggable={true}
        modules={[FreeMode, Autoplay]}
        className="fourthCarousel"
      >
        {
          fourthData.map((cinema, i)=>(
            <SwiperSlide key={i}>
              <div className="product-card">
                <Link to={`/single-page/${cinema.id}`}>
                  <img key={i}src={`https://image.tmdb.org/t/p/original/${cinema.poster_path}`} alt="" />
                </Link>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default FourthCarousel