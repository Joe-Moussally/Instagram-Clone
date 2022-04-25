import React from 'react';
import Post from "./Post";
import Flyer from "./Flyer"
import './Home.css'

const Home = () => {
    return (
        <div id="feed">
            <div id='Post'><Post /></div>
            <div id='Flyer'><Flyer /></div>
        </div>
    );
}
 
export default Home;