import '../styles/Entry.scss';

const Entry = ({content}) => {

    return (
        <div className='entry'>
            <p>{`${content}`}</p>
        </div>
    );
}

export default Entry;
