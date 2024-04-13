import '../styles/ListContainer.scss';
import ListEntry from './ListEntry';

const ListContainer = ({title, lists = []}) => {

    return (
        <div>
            <h2>{`${title}`}</h2>
            {lists.map(list => {
                return (
                    <ListEntry content={list.name} listId={list.id}/>
                );
            })}
        </div>
    );
}

export default ListContainer;
