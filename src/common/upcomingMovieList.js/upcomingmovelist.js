import { Component } from "react";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import "./upcomingmovelist.css";
import { Link } from "react-router-dom";

class Imagelist extends Component {
  render() {
    debugger;
    return (
      <Link to="/Details">
        <ImageList className="mainContainer" rowHeight={250} cols={6}>
          {this.props.movieList.map((movie) => {
            return (
              <ImageListItem key={movie.id} className="container">
                <img src={movie.poster_url} alt={movie.title} />
                <ImageListItemBar title={movie.title}></ImageListItemBar>
              </ImageListItem>
            );
          })}
        </ImageList>
      </Link>
    );
  }
}
export default Imagelist;
