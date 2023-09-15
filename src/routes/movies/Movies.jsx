import FourthCarousel from '../../components/fourthcarousel/FourthCarousel'
import Nav from '../../components/nav/Nav'
import './Movies.scss'

const Movies = () => {
  return (
    <div className='Movies'>
      <Nav/>
      <div className="container">
        <h1><span>All</span> Movies</h1>
      </div>
      <FourthCarousel/>
    </div>
  )
}

export default Movies