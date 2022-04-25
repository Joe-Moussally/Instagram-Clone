import {RiSettings4Line} from 'react-icons/ri'; /*setting icons*/
import './Profile.css'

const Profile = () => {
    return (
        <div id="profile-container">
            <div id="profile-top">
                <img className='profile-pic' src="https://pbs.twimg.com/profile_images/1144723172224315392/dxzT6DzS_400x400.png"></img>
                <div id='sections-container'>
                    <div id='section1'>
                        <h1>andrew.garlfield92</h1>
                        <button id='edit-profile-btn'>Edit Profile</button>
                    </div>
                    <div id='section2'>
                        <span><strong>8</strong> posts</span>
                        <span><strong>871.2K</strong> followers</span>
                        <span><strong>395</strong> following</span>
                    </div>
                    <div id='section3'>
                        &#127916; Former actor<br></br>
                        &#127828; Burger and BBQ Lover<br></br>
                        "Chase the stars fool, life is short"
                    </div>
                </div>
            </div>
            {/*--------------POSTS-------------------*/}
            <div id="profile-posts-container">
                <img src='https://media1.popsugar-assets.com/files/thumbor/NWARRTBI1xGt0j0RB4GyCkMHgaY/fit-in/550x550/filters:format_auto-!!-:strip_icc-!!-/2013/05/26/082/n/1922398/83f67dbfd0e16e4a_169529231/i/Andrew-Garfield-Little-Boy-Set-Spider-Man-2.jpg'></img>
                <img src='https://data.whicdn.com/images/77971021/original.jpg'></img>
                <img src='https://i.guim.co.uk/img/media/0431101cff335ba3dca34306e3602117a1b60149/29_2101_5950_3571/master/5950.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=c3b2e0dea7fefb6049d48706d0db7efc'></img>
                <img src='https://www.who2.com/wp-content/uploads/2015/10/andrewgarfield-2.jpg'></img>
                <img src='https://pbs.twimg.com/media/E4r9lXRUcAAjUol.jpg'></img>
                <img src='https://s.yimg.com/ny/api/res/1.2/fzkOAtYc2TKfSBOSev77Xg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQ4MA--/https://s.yimg.com/uu/api/res/1.2/R_rxXfTXuPmK2jqd8M_yWg--~B/aD0xMTYwO3c9MTU0NzthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/insider_articles_922/bd6a7dd9f53b09394e3da145fce32098'></img>
                <img src='https://i.insider.com/61f06285702f4b001866f609?width=700'></img>
                <img src='https://i.insider.com/6241ff9ca2e45b001950c46a?width=700'></img>
                
            </div>
        </div>
    );
}
 
export default Profile;