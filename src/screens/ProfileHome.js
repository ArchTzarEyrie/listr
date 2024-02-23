import '../styles/ProfileHome.scss';
import '../components/ListContainer';
import ListContainer from '../components/ListContainer';

const ProfileHome = () => {

    return (
        <div className='profile-home-container'>
           <h2>Hi ACC NAME</h2>
           <div className='profile-home-content'>
            <ListContainer 
              className="profile-home-my-lists" 
              title="My Lists" 
            />
            <ListContainer 
              title="Shared with me" 
            />
           </div>
        </div>
    );
}

export default ProfileHome;
