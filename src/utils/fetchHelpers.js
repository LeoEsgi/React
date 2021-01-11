//API 
const MAPBOX_BASE = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'; // API MAP
const WEATHER_BASE = 'https://api.openweathermap.org/data/2.5/onecall'; // API Meteo

const KEY_MAP = 'pk.eyJ1IjoibGVvZXNnaSIsImEiOiJja2pybGV2dGMxd3g2MnNxcDZpMjFjMG42In0.dRYFx39YtolqpYIxTbxZ6w'; // API KEY FOR MAP
const KEY_WEATHER = '479a29bbd029683251dbb6e0c61a92e9'; // API KEY FOR WEATHER

const getGeocode = async(location) => {
    const URL = `${MAPBOX_BASE}${location}.json?types=place&access_token=${KEY_MAP}`;

    const geocodeList = await fetch(URL)
        .then(data => data.json())
        .then(result => result.features);

    const coordinates = geocodeList[0].center;
    const placeName = geocodeList[0].matching_text ? geocodeList[0].matching_text : geocodeList[0].text;

    const state = geocodeList[0].context[0].text;
    const country = geocodeList[0].context[1].text;
    return { coordinates, placeName, state, country };
}

export const getWeather = async(location) => {
    const geocodeResult = await getGeocode(location);
    const [lon, lat] = geocodeResult.coordinates;
    const placeName = {
        city: geocodeResult.placeName.split(/\b\s[Ss]hi\b/)[0],
        state: geocodeResult.state,
        country: geocodeResult.country
    }


    const URL = `${WEATHER_BASE}?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&appid=${KEY_WEATHER}`;

    const weatherResult = await fetch(URL).then(data => data.json()).then(result => result);

    const currentTemp = weatherResult.current.temp;
    const todayWeather = weatherResult.daily[0];
    const weatherMain = todayWeather.weather[0].main;
    const tempMax = todayWeather.temp.max;
    const tempMin = todayWeather.temp.min;

    return [{ currentTemp, weatherMain, tempMax, tempMin }, placeName];
}