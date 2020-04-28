import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import "./TextField.scss";
import { FormControl, Grid } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1),
    width: "25ch",
  },
  textFieldTwo: {
    margin: theme.spacing(1),
  },

  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
const TextFields = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search Contact"
        className="input-search"
      />
      <SearchIcon className="search-icon" />
      <Button className="button-contact" onClick={handleOpen}>
        Add Contact
      </Button>
      {/* <Models handleClose={handleClose} /> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <div style={{ width: "50%" }}>
          <Fade in={open}>
            <div className={classes.paper}>
              <FormControl>
                <h3>Add Contact</h3>
                <Grid container className="form-content">
                  <Grid item xs={6}>
                    <TextField
                      className={classes.textField}
                      id="standard-basic"
                      label="First Name"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      className={classes.textField}
                      id="standard-basic-two"
                      label="Last Name"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      className={classes.textFieldTwo}
                      id="standard-basic-email"
                      label="Email Address"
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      className={classes.textField}
                      id="standard-basic-countryCode"
                      label="Country Code"
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      className={classes.textField}
                      id="standard-basic-phoneNumber"
                      label="Phone Number"
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      className={classes.textField}
                      id="standard-basic-companyName"
                      label="Company Name"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      className={classes.textField}
                      id="standard-basic-position"
                      label="Position"
                    />
                  </Grid>
                </Grid>
              </FormControl>
              <div>
                <Button
                  variant="contained"
                  size="medium"
                  className="model-button"
                >
                  Add Contact
                </Button>
              </div>
            </div>
          </Fade>
        </div>
      </Modal>
    </div>
  );
};

export default TextFields;
