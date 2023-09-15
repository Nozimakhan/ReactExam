import './Main.scss';
import { useState, useEffect} from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay, FreeMode } from 'swiper/modules';
import { Link } from 'react-router-dom';


const Main = () => {
  const [mainData, setmainData] = useState([]);

  useEffect(() => {
    const headers = {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTRlNDk0NDNjMmZmYTcxNTVlNzVhOTZmOGFkYzZmMiIsInN1YiI6IjY1MDFhMzgxZGI0ZWQ2MTAzODU2NjRjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bmvXFaEvRE6vCIpbFF3b4mlPvCrYfggjStqJSBN1bXc'
    };
    axios.get("https://api.themoviedb.org/3/discover/movie?&with_genres=16", { headers })
      .then(response => setmainData(response.data.results))
      .catch(err => console.log(err))

  }, [])
  console.log(mainData);

  return (
    <div className='Main-carousel'>
      <h1>Hollywood Movies </h1>
      <Swiper
        slidesPerView={9}
        spaceBetween={30}
        freeMode={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        draggable={true}
        modules={[FreeMode, Autoplay]}
        className="mySwiper"
      >
        {
          mainData.map((main, i) => (
            <SwiperSlide key={i}>
              <div className="product-card">
                <Link to={`/single-page/${main.id}`}>
                  <img src={`https://image.tmdb.org/t/p/original/${main.poster_path}`} alt="" />
                </Link>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default Main