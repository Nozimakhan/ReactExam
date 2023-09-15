import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './SinglePage.scss';
import Main from '../../components/main/Main';
import SecondCarosel from '../../components/secondcarousel/SecondCarousel';
import ThirdCarousel from '../../components/thirdcarousel/ThirdCarousel';
import FourthCarousel from '../../components/fourthcarousel/FourthCarousel';
import FifthCarousel from '../../components/fifthcarousel/FifthCarousel';
import star from '../../assets/images/star.svg';


const SinglePage = () => {
    let singleDataInURL = useParams(null);
    const [singleData, setsingleData] = useState(null);

    useEffect(() => {
        const headers = {
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTRlNDk0NDNjMmZmYTcxNTVlNzVhOTZmOGFkYzZmMiIsInN1YiI6IjY1MDFhMzgxZGI0ZWQ2MTAzODU2NjRjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bmvXFaEvRE6vCIpbFF3b4mlPvCrYfggjStqJSBN1bXc`
        };
        axios.get(`https://api.themoviedb.org/3/movie/${singleDataInURL.id}`, { headers })
            .then(response => setsingleData(response.data))
            .catch(err => console.log(err))

    }, [singleDataInURL.id])
    console.log(singleData)
    return (
        <div className='SinglePage'>
            <div className="container">
                <div className="single__wrapper">
                    <div className="single__img">
                        <img src={`https://image.tmdb.org/t/p/original/${singleData?.poster_path}`} alt="" />
                    </div>
                    <div className="single__title">
                        <h2>{singleData?.title}</h2>
                        <p>{singleData?.overview}</p>
                        <div className="date">
                            <p className='star'><img src={star} alt="" /> <p className='rate'>{singleData?.vote_average}</p></p>
                            <p className='release'>Release date: {singleData?.release_date}</p>
                        </div>
                        <div className="genre">
                            <p>Genre: {singleData?.genres[0].name}</p>
                            <p>Language: {singleData?.original_language}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousels">
                <Main />
                <SecondCarosel />
                <ThirdCarousel/>
                <FourthCarousel/>
                <FifthCarousel/>
            </div>
        </div>
    )
}

export default SinglePage