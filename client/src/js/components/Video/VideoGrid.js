import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

export default class VideoGrid extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row columns={5}>
          <video width="320" height="240" controls>
            <source src="movie.mp4" type="video/mp4" />
            <source src="movie.ogg" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        </Grid.Row>
      </Grid>
    );
  }
}