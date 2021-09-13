import { Component } from "react";
import "./ReleasedMovielist.css";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import CardFilter from "../movieFilter/MovieFilter";
import genres from "../genre";
import artists from "../artists";
import { Link } from "react-router-dom";
class ReleasedMovielist extends Component {
  state = { Movieslist: this.props.movieList };

  findMovie = "";

  onTextchange = (e) => {
    debugger;
    this.findMovie = e.target.value;
  };

  handeleClick = () => {
    console.log("handle clicked");
    debugger;
    if (this.findMovie !== "") {
      let filterMovieList = this.state.Movieslist.filter((movie) => {
        return (
          movie.title.toLowerCase().indexOf(this.findMovie.toLowerCase()) >= 0
        );
      });
      this.setState({ Movieslist: filterMovieList });
    } else {
      this.setState({ Movieslist: this.props.movieList });
    }
  };

  handeleClickDetails = (e) => {
    debugger;
    var movieDetails = e.target.alt;
    console.log(movieDetails);
    localStorage.setItem("MovieDetails", movieDetails);
  };

  render() {
    return (
      <div className="flex-container">
        <div className="left">
          <ImageList rowHeight={380} cols={5}>
            {this.state.Movieslist.map((movie) => {
              return (
                <Link to="/Details">
                  <div
                    className="MovieTabs"
                    key={movie.id}
                    id={movie.id}
                    onClick={this.handeleClickDetails}
                  >
                    <ImageListItem key={movie.id}>
                      <img
                        src={movie.poster_url}
                        alt={movie.title}
                        className="MovieTabsImages"
                      />
                      <ImageListItemBar key={movie.title} title={movie.title} />
                    </ImageListItem>
                  </div>
                </Link>
              );
            })}
          </ImageList>
        </div>

        <div className="right">
          <CardFilter
            OnTextChange={this.onTextchange}
            HandeleClick={this.handeleClick}
            MovieGenres={genres}
            MovieArtists={artists}
          />
        </div>
      </div>
    );
  }
}
export default ReleasedMovielist;
