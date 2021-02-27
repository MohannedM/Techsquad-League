import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NewsCard from '../components/NewsCard'
import { Grid } from '@material-ui/core'

const HomePage = ({data}) => {
    console.log(data.news)
    const cards =  data.news.map(singleNew => <NewsCard key={singleNew._id}
        date={singleNew.created_at}
        keywords={singleNew.keywords}
        source={singleNew.source}
        newsTitle={singleNew.title}
        />)
        return (
            <Grid container justify="center">
                {cards}
            </Grid>
        )
}

HomePage.getInitialProps = async () => {
    const { data } = await axios.get('http://80.240.21.204:1337/news?skip=12&limit=10')

    return { data }
}

export default HomePage