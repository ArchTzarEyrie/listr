import '../styles/Entry.scss';

const Entry = ({content, link}) => {

    return (
        <a href={link}>
            <div className='entry'>
                <p>{`${content}`}</p>
            </div>
        </a>
        
    );
}

export default Entry;
