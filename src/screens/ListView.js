import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Entry from "../components/Entry";
import '../styles/ListView.scss';
import axios from 'axios';

const getEditEntry = (setIsDirty, setEditId) => {
    return (id, content, link) => {
    axios.put(`http://localhost:3030/entries/update/${id}`, {
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        content,
        link
    })
    .then(response => {
        console.log('updating');
        console.log(response);
        setIsDirty(true);
        setEditId(-1);
    })
    .catch(err => console.log(`ERROR: ${err}`));
}}

const fetchEntries = (setEntries) => {
    axios.get('http://localhost:3030/entries/10', {
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    })
    .then(response => {
        console.log('fetching');
        console.log(response);
        setEntries(response.data)
    })
    .catch(err => console.log(`ERROR: ${err}`));
}

const createNewEntry = (setIsDirty, setEditId) => {
    axios.post('http://localhost:3030/entries/create', {
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        content: "New Entry",
        creator: 1,
        listId: 10,
        link: "https://duck.com"
    })
    .then(response => {
        console.log('creating new entry');
        console.log(response);
        setIsDirty(true);
        setEditId(response.data.insertId);
    })
    .catch(response => {
        console.log(`ERROR: ${response}`);
    });
}

const ListView = () => {
    const [entries, setEntries] = useState([]);
    const [isDirty, setIsDirty] = useState(true);
    const [editId, setEditId] = useState(-1);
    const editEntry = getEditEntry(setIsDirty, setEditId);

    useEffect(() => {
        if (isDirty) {
          fetchEntries(setEntries);
          setIsDirty(false);
        }
    }, [isDirty, setEntries]);

    return (
        <div>
            <Link to={'/profile-home'}>
                Back
            </Link>
            <h2>LIST NAME</h2>
            <div>
                {entries.map(entry => {
                    return (
                        <Entry 
                          key={entry.id} 
                          content={entry.content} 
                          link={entry.link} 
                          isEditing={editId === entry.id}
                          setEditId={setEditId}
                          id={entry.id}
                          editEntry={editEntry}
                        />
                    );
                })}
            </div>
            <button onClick={() => createNewEntry(setIsDirty, setEditId)}>+ Add entry</button>
        </div>
    );
}

export default ListView;
