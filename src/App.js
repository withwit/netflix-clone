import "./App.css";
import requests from "./request";
import Row from "./Row";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginal}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row
        title="Trending Personalities"
        fetchUrl={requests.fetchTrendingPerson}
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Trending Monthly" fetchUrl={requests.fetchTrendingMonthly} />
      <Row title="Airing Today" fetchUrl={requests.fetchAiringToday} />
      <Row title="Trending Shows" fetchUrl={requests.fetchTrendingShows} />
      <Row title="Trending Movies" fetchUrl={requests.fetchTrendingMovies} />
    </div>
  );
}

export default App;
