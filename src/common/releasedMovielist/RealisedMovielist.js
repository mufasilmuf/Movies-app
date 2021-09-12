import { Component } from "react";
import "./ReleasedMovielist.css";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import { Link } from "react-router-dom";
class ReleasedMovielist extends Component {
  render() {
    return (
      <div className="flex-container">
        <div className="left">
          <Link to="/Details">
            <ImageList rowHeight={350} cols={4}>
              {this.props.movieList.map((movie) => {
                return (
                  <ImageListItem key={movie.id}>
                    <img src={movie.poster_url} alt={movie.title} />
                    <ImageListItemBar title={movie.title} />
                  </ImageListItem>
                );
              })}
            </ImageList>
          </Link>
        </div>
      </div>
    );
  }
}
export default ReleasedMovielist;
