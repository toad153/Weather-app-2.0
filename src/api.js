export const geoApioptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.React_App_GEODB,
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo"

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5"

export const WEATHER_API_KEY = process.env.React_App_OPENWEATHER