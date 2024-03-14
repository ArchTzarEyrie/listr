import '../styles/Entry.scss';
import { useState } from "react";

const Entry = (
    {
        content, 
        link, 
        isEditing, 
        setEditId, 
        id, 
        editEntry,
        deleteEntry
    }
) => {
    const [contentValue, setContentValue] = useState(content);
    const [linkValue, setLinkValue] = useState(link);

    return (
        <div className='entry'>
            {isEditing ?
                <div className='flex'>
                    <input
                        type="text" 
                        value={contentValue}
                        onChange={(e) => setContentValue(e.target.value)}
                    />
                    <label htmlFor="link">Link</label>
                    <input
                        id="link"
                        name="link"
                        type="text" 
                        value={linkValue}
                        onChange={(e) => setLinkValue(e.target.value)}
                    />
                    <button 
                        className={'entry-save-button'} 
                        onClick={() => editEntry(id, contentValue, linkValue)}
                    >
                        Save
                    </button>
                </div>
            :
                <div className='flex'>
                    <a href={link}>{`${content}`}</a>
                    <button 
                        className='entry-edit-button'
                        onClick={() => setEditId(id)}
                    >
                        Edit
                    </button>
                    <button 
                        className='entry-delete-button'
                        onClick={() => deleteEntry(id)}
                    >
                        Delete
                    </button>
                </div>
            }
        </div>
        
    );
}

export default Entry;
