import { useState  } from 'react';
import axios from 'axios';

const CreateListForm = () => {

    const [listName, setListName] = useState('');

    const onCreate = () => {
        axios.post('http://localhost:3030/createList', {
          headers: {
            'Access-Control-Allow-Origin': '*'
          },
          listName: listName,
        })
        .then((response) => {
          console.log(response);
          console.log(listName);
        })
        .catch((response) => {
          console.log(response);
        });
      }

    return (
        <div>
            <input
                type= "text" 
                onInput={(e) => setListName(e.target.value)}
            />
            <button onClick={onCreate}>Submit</button>
        </div>
    );
}

export default CreateListForm;
