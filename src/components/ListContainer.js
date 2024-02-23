import '../styles/ListContainer.scss';
import ListEntry from './ListEntry';

const entriesStub = ['tv', 'movies'];

const ListContainer = ({title}) => {

    return (
        <div>
            <h2>{`${title}`}</h2>
            {entriesStub.map(entry => {
                return (
                    <ListEntry content={entry} />
                );
            })}
        </div>
    );
}

export default ListContainer;
