import React from 'react'
import Header from '../components/Header'

const App = ({ Component, pageProps }) => {
    return (
    <div>
        <Header />
        <div style={{  marginTop: '100px' }}>
            <Component {...pageProps} />
        </div>
    </div>
    )
}

export default App