import {useState} from 'react';

import {BsHouse} from 'react-icons/bs'
import {BsHouseFill} from 'react-icons/bs'
import {RiMessage3Line} from 'react-icons/ri'
import {RiMessage3Fill} from 'react-icons/ri'
import {BsFilePerson} from 'react-icons/bs'
import {BsFilePersonFill} from 'react-icons/bs'
import {IoAddCircleOutline} from 'react-icons/io5'
import {IoAddCircle} from 'react-icons/io5'


import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const activeHome = <BsHouseFill />
    const unactiveHome = <BsHouse />
    const [Home, setHome] = useState(activeHome);

    const activeMessage = <RiMessage3Fill />
    const unactiveMessage = <RiMessage3Line />
    const [Message, setMessage] = useState(unactiveMessage);

    const unactiveProfile = <BsFilePerson />;
    const activeProfile = <BsFilePersonFill />;
    const [Profile, setProfile] = useState(unactiveProfile)

    const unactiveAdd = <IoAddCircleOutline />;
    const activeAdd = <IoAddCircle />;
    const [Add, setAdd] = useState(unactiveAdd)


    return (
        <nav id='nav'>
            <div id="logo-title-container">
                <img id="nav-logo" src="https://img.icons8.com/cotton/128/000000/instagram-new.png" alt='img'/>
                <div id="nav-title">InstaClone</div>
            </div>
            <div id='nav-search-container'><input id="nav-search" type='text' placeholder={"Search"}></input></div>
            <ul id="nav-icons-container">
                <li id="add-post" className="nav-icons">{Add}</li>
                <li id="home" className={"nav-icons active-icon"}><Link to={'/'}>{Home}</Link></li>
                <li id="messages" className="nav-icons">{Message}</li>
                <li id="profile" className="nav-icons"><Link to={'/profile'}>{Profile}</Link></li> 
            </ul>
        </nav>
        
    );
}
 
export default Navbar;