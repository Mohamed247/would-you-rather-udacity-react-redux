import React, { Component } from "react";
import { Form } from "react-final-form";
import CardActions from "@material-ui/core/CardActions";
import {
  Typography,
  Paper,
  Grid,
  Button,
  CssBaseline,
  TextField,
} from "@material-ui/core";
// Picker
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";
import { withRouter } from "react-router";

class AddQuestion extends Component {
  state = { optionOne: "", optionTwo: "" };

  onSubmit = (e) => {
    const { dispatch, authedUser } = this.props;
    console.log("about to submit");
    console.log(this.props);
    console.log(this.state);
    e.preventDefault();
    if (!this.state.optionOne || !this.state.optionTwo) {
      return alert("Please enter valid questions");
    }
    dispatch(
      handleAddQuestion(authedUser, this.state.optionOne, this.state.optionTwo)
    );

    alert("Question Successfully Created!");
    return this.props.history.push("/");
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div style={{ padding: 16, margin: "auto", maxWidth: 600 }}>
        <CssBaseline />
        <Typography
          variant="h4"
          align="center"
          component="h1"
          gutterBottom
        ></Typography>

        <Form
          onSubmit={this.onSubmit}
          render={() => (
            <form onSubmit={this.onSubmit} noValidate>
              <Paper style={{ padding: 16 }}>
                <Typography
                  variant="h5"
                  align="center"
                  component="h2"
                  gutterBottom
                >
                  Create A New Poll
                </Typography>
                <Grid container alignItems="flex-start" spacing={2}>
                  <Typography
                    variant="h6"
                    align="center"
                    component="h2"
                    gutterBottom
                  >
                    Would You Rather...
                  </Typography>
                  <Grid item xs={12}>
                    <TextField
                      name="optionOne"
                      fullWidth
                      required
                      value={this.state.optionOne}
                      label="Enter option one here"
                      onChange={(e) => this.handleChange(e)}
                    />
                  </Grid>
                  <br />
                  <Typography
                    variant="h6"
                    align="center"
                    component="h2"
                    gutterBottom
                  >
                    OR
                  </Typography>
                  <Grid item xs={12}>
                    <TextField
                      name="optionTwo"
                      fullWidth
                      required
                      value={this.state.optionTwo}
                      label="Enter option two here"
                      onChange={(e) => this.handleChange(e)}
                    />
                  </Grid>
                  <Grid item style={{ marginTop: 16 }}>
                    <CardActions style={{ justifyContent: "center" }}>
                      <Button variant="contained" color="primary" type="submit">
                        Submit
                      </Button>
                    </CardActions>
                  </Grid>
                </Grid>
              </Paper>
            </form>
          )}
        />
      </div>
    );
  }
}
function mapStateToProps({ authedUser }) {
  return { authedUser };
}
export default withRouter(connect(mapStateToProps)(AddQuestion));
