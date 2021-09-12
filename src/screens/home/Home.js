import { Component } from "react";
import "./Home.css";
import moviesData from "../../common/moviesData";
import Imagelist from "../../common/upcomingMovieList.js/upcomingmovelist";
import ReleasedMovielist from "../../common/releasedMovielist/RealisedMovielist";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <span className="Heading">Upcoming Movies</span>
        <Imagelist movieList={moviesData} />
        <ReleasedMovielist movieList={moviesData} />
      </div>
    );
  }
}
export default Home;
