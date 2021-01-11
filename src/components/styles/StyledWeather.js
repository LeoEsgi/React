import styled from 'styled-components';
import morning from '../../assets/morning.jpg';
import night from '../../assets/night.jpg';
import day from '../../assets/day.jpg';

const StyledWeather = styled.div `
  background-image: url(
    ${props => {
    if (props.bgImage === 'morning') {
      return morning;
    }
    if (props.bgImage === 'night') {
      return night;
    }
    if (props.bgImage === 'day') {
      return day;
    }
  }}
  );
  background-size: cover;
  background-position: top center;
`

export default StyledWeather;