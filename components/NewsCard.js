import { Avatar, Button, Card, CardActions, CardContent, Chip, Divider, Grid, makeStyles, Typography } from '@material-ui/core'
import RssFeedIcon from '@material-ui/icons/RssFeed'
import React from 'react'

const useStyles = makeStyles({
    grid:{
        width: '60%',
        margin: '25px 0'
    },
    root: {
      minWidth: '%100',
      backgroundColor: '#fff'
    },

    icon: {
      color: '#1abc9c',
      fontSize: 40,
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    keyword: {
        color: '#1abc9c',
        border: '1px solid #1abc9c',
        backgroundColor: '#fff',
        marginBottom: '10px'
    }
  });

  const dateFormatter = (date) => {
      const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
      const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
        ];
      const dayNumber = new Date(date).getDay()
      const day = weekdays[dayNumber]
      const dayDate = new Date(date).getDate()
      const monthNumber = new Date(date).getMonth()
      const month = months[monthNumber]
      const year = new Date(date).getFullYear()
      const hour = new Date(date).getHours()
      const minute = new Date(date).getMinutes()

      return `${day}, ${dayDate} ${month} ${year} AT ${hour}:${minute}`
  }

const NewsCard = ({source, newsTitle, date, keywords}) => {
    const classes = useStyles();

    return (
        <Grid justify="center" className={classes.grid} >
            <Card className={classes.root} >
            <CardContent>
            <Grid container spacing={1} justify="space-between">
                <Grid item >
                <Avatar alt="Cindy Baker" src={source.url} />
                </Grid>
                <Grid item  style={{ maxWidth: '50%' }}>
                    <Typography variant="h5" component="h2">
                        {source.title}
                    </Typography>
                </Grid>
                <Grid item >
                    <RssFeedIcon className={classes.icon} />
                </Grid>
            </Grid>
            <br />
            <Typography variant="h6" component="p">
                {newsTitle}
            </Typography>
            <br />
            <Typography className={classes.pos} color="textSecondary">
                {dateFormatter(date)}
            </Typography>
            <Divider variant="middle" />
            </CardContent>
            <CardActions>
                {keywords.map(keyword => <Chip key={keyword._id} label={keyword.name} className={classes.keyword} />)}
            </CardActions>
        </Card>
    </Grid>
    )
}


export default NewsCard