import { AppBar, Grid, Toolbar, Typography, InputAdornment, Input, OutlinedInput  } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from "react";
import AppBarCollapse from "./AppBarCollapse";

const styles = theme => ({
    AppBar: {
        backgroundColor: '#1abc9c'
    },
    search: {
        display: "none",
        [theme.breakpoints.down("xs")]: {
            display: "block"
        },
        position: 'relative',
        borderRadius: '50px',
        backgroundColor: '#fff',
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
        },
    },
    searchIcon: {
        color: '#1abc9c',
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: '#1abc9c',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
        width: '20ch',
        },
    },
    buttonCollapse: {
      [theme.breakpoints.up("sm")]: {
        display: "none"
      },
      boxShadow: "none",
    }
});


const Header = props => {
    const { classes } = props
    const [] = useState(null)

    return (
    <AppBar position="fixed" className={classes.AppBar}>
    <Toolbar>
        <Grid justify="space-between" container>
            <Grid item>
            <Typography variant="h6">
            Newsbuzz
            </Typography>

            </Grid>
            <Grid item>
            <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search league or learn"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
            </Grid>
            <Grid item>
                <AppBarCollapse />
            </Grid>
        </Grid>
    </Toolbar>
    </AppBar>
    )
}

export default withStyles(styles)(Header);
