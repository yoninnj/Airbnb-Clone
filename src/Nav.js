import React from 'react';
import './Nav.css'
import CabinIcon from '@mui/icons-material/Cabin';
import CottageIcon from '@mui/icons-material/Cottage';
import GiteIcon from '@mui/icons-material/Gite';
import HouseIcon from '@mui/icons-material/House';
import HouseSidingIcon from '@mui/icons-material/HouseSiding';
import FenceIcon from '@mui/icons-material/Fence';
import BungalowIcon from '@mui/icons-material/Bungalow';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SurfingIcon from '@mui/icons-material/Surfing';
import PoolIcon from '@mui/icons-material/Pool';
import requests from './requests';

export default function Nav({setSelectedOption}) {
  return (
      <div className="Nav" >
          <div className='nav' >
          <CabinIcon onClick={() => setSelectedOption(requests.fetchAnimation)}/>
          <p onClick={() => setSelectedOption(requests.fetchAnimation)}>Home</p>
          </div>
          <div className='nav' >
          <AcUnitIcon onClick={() => setSelectedOption(requests.fetchActionMovies)}/>
          <p onClick={() => setSelectedOption(requests.fetchActionMovies)}>Ice House</p>
          </div>
          <div className='nav' >
          <HouseSidingIcon onClick={() => setSelectedOption(requests.fetchComedyMovies)} />
          <p onClick={() => setSelectedOption(requests.fetchComedyMovies)}>Beach House</p>
          </div>
          <div className='nav' >
          <BungalowIcon onClick={() => setSelectedOption(requests.fetchHorrorMovies)} />
          <p onClick={() => setSelectedOption(requests.fetchHorrorMovies)}>Bungalow</p>
          </div>
          <div className='nav' >
          <HouseIcon onClick={() => setSelectedOption(requests.fetchMystery)}/>
          <p onClick={() => setSelectedOption(requests.fetchMystery)}>PantHouse</p>
          </div>
          <div className='nav' >
          
          <SurfingIcon onClick={() => setSelectedOption(requests.fetchRomanceMovies)}/>
          <p onClick={() => setSelectedOption(requests.fetchRomanceMovies)}>Surfing</p>
          </div>
          <div className='nav' >
          <CottageIcon onClick={() => setSelectedOption(requests.fetchSciFi)}/>
          <p onClick={() => setSelectedOption(requests.fetchSciFi)}>Cottage</p>
          </div>
          <div className='nav' >
          <PoolIcon onClick={() => setSelectedOption(requests.fetchTV)}/>
          <p onClick={() => setSelectedOption(requests.fetchTV)}>Swimming</p>
          </div>
          <div className='nav' >
          <FenceIcon onClick={() => setSelectedOption(requests.fetchTopRated)}/>
          <p onClick={() => setSelectedOption(requests.fetchTopRated)}>Hill Station</p>
          </div>
          <div className='nav' >
          <GiteIcon onClick={() => setSelectedOption(requests.fetchWestern)}/>
          <p onClick={() => setSelectedOption(requests.fetchWestern)}>Club</p>
          </div>
      </div>
  )
}
