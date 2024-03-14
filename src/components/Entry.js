import '../styles/Entry.scss';
import { useState } from "react";

const Entry = ({content, link, isEditing, setEditId, id, editEntry}) => {

    const [inputValue, setInputValue] = useState(content);

    return (
        <div className='entry'>
            {isEditing ?
                <div className='flex'>
                    <input 
                        type="text" 
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button 
                        className={'entry-save-button'} 
                        onClick={() => editEntry(id, inputValue, link)}
                    >
                        Save
                    </button>
                </div>
            :
                <div className='flex'>
                    <p href={link}>{`${content}`}</p>
                    <button 
                        className='entry-edit-button'
                        onClick={() => setEditId(id)}
                    >
                        Edit
                    </button>
                </div>
            }
        </div>
        
    );
}

export default Entry;
