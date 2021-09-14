import { Component } from "react";
import "./Details.css";
import Typography from "@material-ui/core/Typography";
import Poster from "../../common/detailsPoster/DetailsPoster";
import MoviesInfo from "../../common/detailsTrailer/DetailsTrailer";
import ArtistsDetails from "../../common/detailsArtists/DetailsArtists";
import { Link } from "react-router-dom";
import moviesData from "../../common/moviesData";
import Header from "../../common/header/Header";
class Detail extends Component {
  render() {
    return (
      <div>
        <Header showBtns={true} />
        <Link to="/Home" style={{ textDecoration: "none", color: "black" }}>
          <Typography id="btnBacktoHome">{"<"} Back to Home </Typography>
        </Link>
        <div className="Container">
          <Poster data={moviesData} />
          <MoviesInfo data={moviesData} />
          <ArtistsDetails data={moviesData} />
        </div>
      </div>
    );
  }
}
export default Detail;
