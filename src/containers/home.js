import React from 'react'

import "../styles/home.css"

const Home = () => {
    return <div class='center'>
        <h1>Home</h1>

        <p>Hello my name is Moises Trejo I am interested in a lot of things</p>

        <img src={process.env.PUBLIC_URL+'/images/mexico.jpg'} class = 'profile'></img>


    </div>
}

export default Home;