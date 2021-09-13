import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
} from "@material-ui/core";
import React from "react";
import { Select } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";

class CardFilter extends React.Component {
  state = { item1: "Genres", item2: "Artists" };

  render() {
    return (
      <Card className="root">
        <CardContent>
          <label style={{ color: "#3700B3" }}>FIND MOVIES BY:</label>
          <br />

          <TextField
            label="Movie Name"
            onChange={this.props.OnTextChange}
            style={{ minWidth: 200 }}
          />
          <br />
          {/* -------------------------------------------------------------------------------- */}
          {/* Genres select option */}
          <InputLabel id="genres">Genres</InputLabel>
          <Select
            style={{ minWidth: 200 }}
            labelId="genres"
            id="demo1-simple-select"
            value={this.state.item1}
            onChange={this.props.OnTextChange}
          >
            {this.props.MovieGenres.map((GENRES) => {
              return <MenuItem value={GENRES.id}>{GENRES.name}</MenuItem>;
            })}
          </Select>
          <br />
          {/* Genres select option */}
          {/* -------------------------------------------------------------------------------- */}
          {/* Artists select option */}
          <InputLabel id="artists">Artists</InputLabel>
          <Select
            style={{ minWidth: 200 }}
            labelId="artists"
            id="demo2-simple-select"
            value={this.state.item2}
            onChange={this.props.OnTextChange}
          >
            {this.props.MovieArtists.map((ARTISTS) => {
              return (
                <MenuItem value={ARTISTS.id}>
                  {ARTISTS.first_name} {ARTISTS.last_name}
                </MenuItem>
              );
            })}
          </Select>
          <br />
          {/* Artists select option */}
          {/* -------------------------------------------------------------------------------- */}
          <TextField
            style={{ minWidth: 200 }}
            id="date"
            label="Release Date Start"
            type="date"
            onChange={this.props.OnTextChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <br />
          <TextField
            style={{ minWidth: 200 }}
            id="date"
            label="Release Date End"
            type="date"
            onChange={this.props.OnTextChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <br />
        </CardContent>
        <CardActions>
          <Button
            style={{ minWidth: 200 }}
            variant="contained"
            color="primary"
            onClick={this.props.HandeleClick}
          >
            APPLY
          </Button>
        </CardActions>
      </Card>
    );
  }
}
export default CardFilter;
