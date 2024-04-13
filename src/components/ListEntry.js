import '../styles/ListEntry.scss';
import { Link } from "react-router-dom";

const ListEntry = ({content, listId}) => {

    return (
        <div className='list-entry'>
            <Link 
              to={`/list-view/${listId}`}
              className='list-entry-link'
            >
                {`${content}`}
            </Link>
        </div>
    );
}

export default ListEntry;
