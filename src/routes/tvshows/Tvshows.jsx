import './Tvshows.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import { Autoplay, Grid } from 'swiper/modules';

const Tvshows = () => {
  const [showsData, setshowsData] = useState([]);

  useEffect(() => {
    const headers = {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTRlNDk0NDNjMmZmYTcxNTVlNzVhOTZmOGFkYzZmMiIsInN1YiI6IjY1MDFhMzgxZGI0ZWQ2MTAzODU2NjRjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bmvXFaEvRE6vCIpbFF3b4mlPvCrYfggjStqJSBN1bXc'
    };
    axios.get("https://api.themoviedb.org/3/watch/providers/movie", { headers })
      .then(response => setshowsData(response.data.results))
      .catch(err => console.log(err))

  }, [])
  console.log(showsData);
  return (
    <>
      <div className="Tvshows">
        <h1><span>TV</span> Providers</h1>
        <div className='partners'>
          <Swiper
            slidesPerView={7}
            grid={{
              rows: 4,
              fill: "row",
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            draggable={true}
            spaceBetween={30}
            modules={[Grid, Autoplay]}
            className="gridSwiper"
          >
            {
              showsData.map((provider, i) => (
                <SwiperSlide className='grid-slide' key={i}>
                  <img key={i} src={`https://image.tmdb.org/t/p/original/${provider.logo_path}`} alt="" />
                  <p>{provider.provider_name}</p>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default Tvshows