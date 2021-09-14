import { Component } from "react";
import "./DetailsPoster.css";

class Poster extends Component {
  searchedMovie = localStorage.getItem("MovieDetails");

  state = {
    MoviesInformation: "",
  };

  filterarray = "";

  componentDidMount() {
    console.log("component did update");
    console.log(this.props.data);
    console.log(this.searchedMovie);

    this.filterarray = this.props.data.filter((data) => {
      return data.title === this.searchedMovie;
    });
    this.setState({ MoviesInformation: this.filterarray[0] });
  }

  render() {
    return (
      <div className="MoviePoster">
        <img
          src={this.state.MoviesInformation.poster_url}
          alt={this.state.MoviesInformation.title}
        />
      </div>
    );
  }
}
export default Poster;
