import './Nav.scss';
import logo from '../../assets/images/logo.svg';
import arrowDown from '../../assets/images/Expand Arrow.svg';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const [countryData, setcountryData] = useState([]);

  useEffect(() => {
    const headers ={
      'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTRlNDk0NDNjMmZmYTcxNTVlNzVhOTZmOGFkYzZmMiIsInN1YiI6IjY1MDFhMzgxZGI0ZWQ2MTAzODU2NjRjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bmvXFaEvRE6vCIpbFF3b4mlPvCrYfggjStqJSBN1bXc'
    };
    axios.get("https://api.themoviedb.org/3/watch/providers/regions", {headers})
      .then(response => setcountryData(response.data.results))
      .catch(err => console.log(err))

  }, [])
  console.log(countryData, "values");

  return (
    <div>
      <nav>
        <div className="container">
          <div className="nav__container">
            <div className="logo">
              <NavLink to={'/'}>
                <img src={logo} alt="logo" />
              </NavLink>   
            </div>

            <ul>
              <li>
                <NavLink {...({isActive}) => isActive ? "active" : "link"} to={'/'}>HOME</NavLink>
              </li>
              <li>
                <NavLink {...({isActive}) => isActive ? "active" : "link"} to={'/tvshows'}>TV-PARTNERS</NavLink>
              </li>
              <li>
                <NavLink {...({isActive}) => isActive ? "active" : "link"} to={'/movies'}>MOVIES</NavLink>
              </li>
              <li>
                <NavLink {...({isActive}) => isActive ? "active" : "link"} to={'/new'}>NEW</NavLink>
              </li>
              <li>
                <NavLink {...({isActive}) => isActive ? "active" : "link"} to={'/popular'}>POPULAR</NavLink>
              </li>
            </ul>

            <form className='select'>
              <div className="select-container">
                <select className='selector' id="countries">
                  <option value="COUNTRIES">COUNTRIES</option>
                  {
                    countryData.map((country, i)=>
                      <option key={i} value={country.english__name}>{country.english_name}</option>
                  )
                  }
                </select>
                <button type='button'>
                  <img src={arrowDown} alt="" />
                </button>
              </div>
            </form>

            <form className='input'>
              <input type="text" placeholder="Search" />
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav