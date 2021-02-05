const API_KEY = "c377344a7a925e99a3012c76d25d70ba";

const requests = {
  fetchNetflixOriginal: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTrending: `/trending/all/day?api_key=${API_KEY}`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=2`,
  fetchAiringToday: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=3`,
  fetchTrendingPerson: `/trending/person/week?api_key=${API_KEY}`,
  fetchTrendingMonthly: `/trending/all/week?api_key=${API_KEY}`,
  fetchTrendingShows: `/trending/tv/week?api_key=${API_KEY}`,
  fetchTrendingMovies: `/trending/movie/week?api_key=${API_KEY}`,
};
export default requests;
