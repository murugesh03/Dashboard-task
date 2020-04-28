import React, { useState, Fragment } from "react";
import { Grid, Typography } from "@material-ui/core";
import "./MainArea.scss";
import TextFields from "./TextField/TextField";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
const MainArea = () => {
  const classes = useStyles();
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
 
  return (
    <Fragment>
      <Grid item className="contact-us">
        <div>
          <Typography variant="h5">Contact</Typography>
          <Typography>Welcome to FLATCRM ContactPage</Typography>
        </div>
        <div className="sort">
          <Typography className="sort-text">Sort by</Typography>
          <FormControl className={classes.formControl}>
            <Select
              value={age}
              onChange={handleChange}
              displayEmpty
              className={classes.selectEmpty}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>date</MenuItem>
            </Select>
          </FormControl>
        </div>
      </Grid>
      <Grid item className="text-field">
        <TextFields />
      </Grid>
    </Fragment>
  );
};

export default MainArea;
