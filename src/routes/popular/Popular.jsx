import FifthCarousel from '../../components/fifthcarousel/FifthCarousel'
import Nav from '../../components/nav/Nav'
import './Popular.scss'

const Popular = () => {
  return (
    <div className='Popular'>
      <Nav />
      <div className="container">
        <h1><span>Popular</span> Movies</h1>
      </div>
      <div className="movie__wrapper">
        <FifthCarousel />
      </div>
    </div>
  )
}

export default Popular