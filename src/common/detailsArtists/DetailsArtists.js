import { Component } from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import "./DetailsArtists.css";

class ArtistsDetails extends Component {
  searchedMovie = localStorage.getItem("MovieDetails");

  state = {
    MoviesInformation: {
      id: "M1",
      title: "The Yashfather",
      storyline:
        "A chilling portrait of the Corleone family's rise and near fall from power in America along with balancing the story of the Sicilian clan's ugly crime business in which they are engaged.",
      genres: ["Crime", "Drama"],
      duration: 177,
      poster_url:
        "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
      trailer_url: "https://www.youtube.com/watch/?v=sY1S34973zA",
      wiki_url: "https://en.wikipedia.org/wiki/The_Godfather",
      release_date: "1972-03-15T00:00:00+05:30",
      censor_board_rating: "R",
      critics_rating: 9.2,
      status: "PUBLISHED",
      artists: [
        {
          id: "A1",
          first_name: "Marlon",
          last_name: "Brando",
          role_type: "ACTOR",
          profile_description:
            "Marlon Brando Jr. was an American actor and film director. He is credited with bringing realism to film acting and helping to popularize the Stanislavski system of acting having studied with Stella Adler in the 1940s. Regarded for his cultural influence on 20th century film, Brando's Academy Award-winning performances include that of Terry Malloy in On the Waterfront (1954) and Don Vito Corleone in The Godfather (1972). Brando was an activist for many causes, notably the civil rights movement and various Native American movements.",
          profile_url:
            "https://www.biography.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5ODc1MzkwNzI1MDQwMTE3/gettyimages-527187002-square.jpg",
          wiki_url: "https://en.wikipedia.org/wiki/Marlon_Brando",
        },
        {
          id: "A2",
          first_name: "Al",
          last_name: "Pacino",
          role_type: "ACTOR",
          profile_description:
            "Alfredo James Pacino is an American actor and filmmaker. Pacino has had a career spanning over five decades, during which time he has received numerous accolades and honors both competitive and honorary, among them an Academy Award, two Tony Awards, two Primetime Emmy Awards, a British Academy Film Award, four Golden Globe Awards, the Lifetime Achievement Award from the American Film Institute, the Golden Globe Cecil B. DeMille Award, and the National Medal of Arts. He is also one of few performers to have won a competitive Oscar, an Emmy, and a Tony Award for acting, dubbed the 'Triple Crown of Acting'.",
          profile_url:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Al_Pacino.jpg/220px-Al_Pacino.jpg",
          wiki_url: "https://en.wikipedia.org/wiki/Al_Pacino",
        },
      ],
    },
  };

  filterarray = "";

  componentDidMount() {
    debugger;
    console.log("component did update");
    console.log(this.props.data);
    console.log(this.searchedMovie);

    this.filterarray = this.props.data.filter((data) => {
      return data.title === this.searchedMovie;
    });
    this.setState({ MoviesInformation: this.filterarray[0] });
    console.log(this.filterarray);
  }

  render() {
    console.log("inside render of poster");
    console.log(this.state.MoviesInformation);
    debugger;
    return (
      <div className="ArtistsInfo">
        <div className="Rating">
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">
              <b>Rate this movie:</b>
            </Typography>
            <Rating />
          </Box>
        </div>

        <div className="artists">
          <ImageList cols={2}>
            {this.state.MoviesInformation.artists.map((item) => (
              <ImageListItem key={item.id}>
                <img src={item.profile_url} alt={item.role_type} />
                <ImageListItemBar title={item.first_name} />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      </div>
    );
  }
}
export default ArtistsDetails;
