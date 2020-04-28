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
  root: {},
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
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
      <button className="button-contact" onClick={handleOpen}>
        Add Contact
      </button>
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
        <Fade in={open}>
          <div className={classes.paper}>
            <FormControl>
              <h3>Add Contact</h3>
              <Grid container>
                <Grid item xs={6}>
                  <TextField
                    id="standard-basic"
                    label="First Name"
                   
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="standard-basic-two"
                    label="Last Name"
                   
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField id="standard-basic-email" label="Email Address" />
                </Grid>
              </Grid>
            </FormControl>
            <div>
              <Button
                variant="contained"
                size="medium"
                color="primary"
                className={classes.margin}
              >
                Medium
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default TextFields;
