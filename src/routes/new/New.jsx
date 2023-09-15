import Nav from '../../components/nav/Nav'
import SecondCarosel from '../../components/secondcarousel/SecondCarousel'
import ThirdCarousel from '../../components/thirdcarousel/ThirdCarousel'
import './New.scss'

const New = () => {
  return (
    <div className='New'>
      <Nav/>
      <div className="container">
        <h1><span>New</span> Movies</h1>
      </div>
      <SecondCarosel />
      <ThirdCarousel/>
    </div>
  )
}

export default New