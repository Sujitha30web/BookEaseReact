import React from 'react';
import hallimg from '../components/marriage2.jfif';

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to BookEase</h1>
            <p>Book a hall for your event with ease!</p>
            <br /><br />
            <div class="row">
                <div class="col-1"></div>
                <div class="col-4">
                    <img style={{ height: '300px', width: '450px', }} src={hallimg} />
                </div>
                <div class="col-1"></div>

                <div class="col-4">
                    <h3 style={{ color: 'pink' }}>WELCOME TO BOOKEASE!!!</h3>
                    <h5 style={{ color: 'violet' }}>BY BOOKERBUDDIES DECORATORS AND CATERERS</h5> <br />
                    <p style={{ color: 'brown' }}>WELCOME TO
                        BOOKEASE HALL
                        BY BOOKERBUDDIES DECORATORS AND CATERERS
                        One of the Best Hall in Chennai. BOOKEASE HALL has been into the entire gamut of arranging parties, conference events, seminar, marriage, functions, exhibitions, and can ideally be used as a banquet hall.</p>            </div>
                <div class="col-1"></div>

            </div>
        </div>
    );
}

export default Home;
