import './Hero.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import { useState, useEffect } from 'react';
import logo from '../../assets/images/Darlings.svg';
import play from '../../assets/images/Polygon 1.svg';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Hero = () => {
    const [heroData, setheroData] = useState([]);

    useEffect(() => {
        const headers = {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTRlNDk0NDNjMmZmYTcxNTVlNzVhOTZmOGFkYzZmMiIsInN1YiI6IjY1MDFhMzgxZGI0ZWQ2MTAzODU2NjRjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bmvXFaEvRE6vCIpbFF3b4mlPvCrYfggjStqJSBN1bXc'
        };
        axios.get("https://api.themoviedb.org/3/discover/movie?&with_genres=35", { headers })
            .then(response => setheroData(response.data.results))
            .catch(err => console.log(err))

    }, [])
    console.log(heroData);
    return (
        <div className='hero__banner'>
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="myHero"
            >
                {
                    heroData.map((hero, i) => (
                        <SwiperSlide key={i}>
                            <img key={i} src={`https://image.tmdb.org/t/p/original/${hero.poster_path}`} alt="" />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div className="gradient"></div>
            <div className="hero__content">
                    <div className="logoDarling">
                        <img src={logo} alt="" />
                    </div>
                    <div className="btns">
                        <NavLink to={'/movies'} className='play'>
                            <img src={play} alt="" />
                            Play
                        </NavLink>
                        <NavLink to={'/tvshows'} className='info'>More Info</NavLink>
                    </div>
                </div>
        </div>
    )
}

export default Hero