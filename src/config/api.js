// PROD
const CORS_HELPER = 'https://cors-anywhere.herokuapp.com';

// DEV cors-anywhere
// const CORS_HELPER = 'http://localhost:8080';

export const api = {
    GENRS_API: `${CORS_HELPER}/https://api.deezer.com/genre`,
    GENR_CHART_API: `${CORS_HELPER}/https://api.deezer.com/chart`,
    ARTIST_API: `${CORS_HELPER}/https://api.deezer.com/artist`,
}