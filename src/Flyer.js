import './Flyer.css'

const Flyer = () => {
    return (
        <div className="users-flyer">
            <p>People you may know</p>
            <div className="user-flyer">
                <img className="profile-pic" src="https://i.pinimg.com/474x/0f/43/19/0f4319d11e5f07594547447a54605f38.jpg" alt='img'></img>
                <span>Tom Holland</span>
                <button>Follow</button>
            </div>
            <div className="user-flyer">
                <img className="profile-pic" src="http://acidcow.com/pics/20111223/angelina_jolie_27.jpg" alt='img'></img>
                <span>Angelina Jolie</span>
                <button>Follow</button>
            </div>
            <div className="user-flyer">
                <img className="profile-pic" src="https://i.imgflip.com/4/dafqx.jpg" alt='img'></img>
                <span>Robert Downey Jr.</span>
                <button>Follow</button>
            </div>
            <div className="user-flyer">
                <img className="profile-pic" src="data:image/jpeg;base64,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"></img>
                <span>Sheldon Cooper</span>
                <button>Follow</button>
            </div>
            <button>See more...</button>
        </div>
    );
}
 
export default Flyer;