import React, { Component } from 'react';

const Home = () => {
    return (
        <div>
            <div className='header'>
                <h2>Weather Forcast</h2>

            </div>
            <div className="instruction">
                <p>Enter a postalcode belowto get the current weather in your location</p>
            </div>

            <div className='zipcodeInput'> 
                <form method='POST' action='/search-location'>
                    <input type='text' placeholder='Enter zipcod..' name='zipcode'/>
                    <button>ENTER</button>
                </form>
            </div>
        </div>
    )
}

export default Home