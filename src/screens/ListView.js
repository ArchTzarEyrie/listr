import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Entry from "../components/Entry";
import '../styles/ListView.scss';
import axios from 'axios';

const getDeleteEntry = (setIsDirty) => {
    return (id) => {
    axios.delete(`http://localhost:3030/entries/${id}`, {
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    })
    .then(response => {
        if (response.data.errorMessage) {
            console.log(`SERVER ERROR: ${response.data.errorMessage}`);
        } else {
            setIsDirty(true);
        }
    })
    .catch(err => console.log(`ERROR: ${err}`));
}}

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

const fetchEntries = (setEntries, listId, setListName) => {
    axios.get(`http://localhost:3030/entries/${listId}`, {
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    })
    .then(response => {
        console.log('fetching');
        console.log(response);
        setEntries(response.data.rows);
        setListName(response.data.listName);
    })
    .catch(err => console.log(`ERROR: ${err}`));
}

const createNewEntry = (setIsDirty, setEditId, listId) => {
    axios.post('http://localhost:3030/entries/create', {
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        content: "New Entry",
        creator: 1,
        listId: listId,
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
    const [listName, setListName] = useState('DEFAULT LIST NAME');
    const listId = document.location.pathname.split('/').pop();
    const editEntry = getEditEntry(setIsDirty, setEditId);
    const deleteEntry = getDeleteEntry(setIsDirty);

    useEffect(() => {
        if (isDirty) {
          fetchEntries(setEntries, listId, setListName);
          setIsDirty(false);
        }
    }, [isDirty, setEntries, setListName]);

    return (
        <div>
            <Link to={'/profile-home'}>
                Back
            </Link>
            <h2>{listName}</h2>
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
                          deleteEntry={deleteEntry}
                        />
                    );
                })}
            </div>
            <button onClick={() => createNewEntry(setIsDirty, setEditId, listId)}>+ Add entry</button>
        </div>
    );
}

export default ListView;
