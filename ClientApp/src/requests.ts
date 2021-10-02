const APT_KEY: string = "1b5732f1d7224c170147fdd9497f8f9c";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${APT_KEY}&language=en-us`,
    fetchNetflixOriginals: `/discover/tv?api_key=${APT_KEY}&language=en-us&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${APT_KEY}&language=en-us`,
    fetchActionMovies: `/discover/movie?api_key=${APT_KEY}&language=en-us&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${APT_KEY}&language=en-us&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${APT_KEY}&language=en-us&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${APT_KEY}&language=en-us&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${APT_KEY}&language=en-us&with_genres=99`,
}

export default requests;

// https://api.themoviedb.org/3/discover/movie?api_key=1b5732f1d7224c170147fdd9497f8f9c&language=en-us&with_genres=28