import './Home.scss';
import Nav from '../../components/nav/Nav';
import Hero from '../../components/hero/Hero';
import Main from '../../components/main/Main';
import SecondCarosel from '../../components/secondcarousel/SecondCarousel';
import ThirdCarousel from '../../components/thirdcarousel/ThirdCarousel';
import FourthCarousel from '../../components/fourthcarousel/FourthCarousel';
import FifthCarousel from '../../components/fifthcarousel/FifthCarousel';

const Home = () => {
  return (
    <div className='home'>
      <Nav />
      <Hero/>
      <Main/>
      <SecondCarosel/>
      <ThirdCarousel/>
      <FourthCarousel/>
      <FifthCarousel/>
    </div>
  )
}

export default Home