/**
 * Code from the below medium post, only updated for latest material UI, using a
 * Menu for the popup and with breakpoints that work.
 *
 * https://medium.com/@habibmahbub/create-appbar-material-ui-responsive-like-bootstrap-1a65e8286d6f
 */
import React from "react";
import { Button, MenuItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ButtonAppBarCollapse from "./ButtonAppBarCollapse";

const styles = (theme) => ({
  buttonBar: {
    [theme.breakpoints.down("xs")]: {
      display: "none"
    },
    right: 0,
    position: "relative",
    width: "100%",
    background: "transparent"
  },
  registerButton: {
      backgroundColor: '#fff',
      color: '#1abc9c',
      border: '2px solid #fff',
      borderRadius: '50px',
      transition: 'all 250ms',
      '&:hover': {
        backgroundColor: '#1abc9c',
        color: '#fff',
      }
  },
  loginButton: {
    border: '2px solid #fff',
    borderRadius: '50px',
    transition: 'all 250ms',
    marginRight: '5px',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#1abc9c',
    }
  }
});

const AppBarCollapse = (props) => (
  <div className={props.classes.root}>
    <ButtonAppBarCollapse>
      <MenuItem>Login</MenuItem>
      <MenuItem>Register</MenuItem>
    </ButtonAppBarCollapse>
    <div className={props.classes.buttonBar} id="appbar-collapse">
      <Button color="inherit" className={props.classes.loginButton}>Login</Button>
      <Button className={props.classes.registerButton}>Register</Button>
    </div>
  </div>
);

export default withStyles(styles)(AppBarCollapse);
