import './App.scss';
import Home from './routes/home/Home';
import Movies from './routes/movies/Movies';
import New from './routes/new/New';
import Popular from './routes/popular/Popular';
import SinglePage from './routes/singlepage/SinglePage';
import Tvshows from './routes/tvshows/Tvshows';
import { Routes, Route } from 'react-router-dom';


function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/new' element={<New/>}/>
        <Route path='/popular' element={<Popular/>}/>
        <Route path='/tvshows' element={<Tvshows/>}/>   
        <Route path='/single-page/:id' element={<SinglePage/>}/>
      </Routes>
    </div>
  )
}

export default App
