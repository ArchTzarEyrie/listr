import '../styles/ProfileHome.scss';
import '../components/ListContainer';
import ListContainer from '../components/ListContainer';
import { useState, useEffect } from 'react';
import axios from 'axios';

const fetchLists = (setMyLists) => {
    axios.get('http://localhost:3030/lists/1', {
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    })
    .then(response => {
        console.log('fetching lists');
        setMyLists(response.data);
    })
    .catch(err => console.log(`SERVER ERROR: ${err}`));
}

const ProfileHome = () => {
    const [myLists, setMyLists] = useState([]); 

    useEffect(() => {
        fetchLists(setMyLists);
    }, [setMyLists]);

    return (
        <div className='profile-home-container'>
           <h2>Hi ACC NAME</h2>
           <div className='profile-home-content'>
            <ListContainer 
              className="profile-home-my-lists" 
              title="My Lists" 
              lists={myLists}
            />
            <ListContainer 
              title="Shared with me" 
            />
           </div>
        </div>
    );
}

export default ProfileHome;
