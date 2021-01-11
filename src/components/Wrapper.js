import React from 'react';

import SearchBox from './SearchBox';
import Geolocation from './Geolocation';
import WeatherDisplay from './WeatherDisplay';

import StyledWrapper from './styles/StyledWrapper';

const Wrapper = ({ handleInput, handleSubmit, states }) => (
  <StyledWrapper>
   
 
    <Geolocation location={states.location} currentDate={states.currentDate} />
    <WeatherDisplay weather={states.weather} />
    <SearchBox handleInput={handleInput} handleSubmit={handleSubmit} />

  </StyledWrapper>
  
);

export default Wrapper;