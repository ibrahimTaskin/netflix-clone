const API_KEY='e2dc1885365a293ff8cac529ace33c16';


// url lerin bazıları arızalı düzelt
const requests={
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`/discovery/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discovery/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discovery/tv?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discovery/tv?api_key=${API_KEY}&with_genres=27`,
    fetchNeDocumentaries:`/discovery/tv?api_key=${API_KEY}&with_genres=99`,
}

export default requests;