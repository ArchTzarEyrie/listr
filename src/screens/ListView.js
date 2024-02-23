import { Link } from "react-router-dom";
import Entry from "../components/Entry";

const entries = ['entry 1', 'entry 2'];

const ListView = ({title}) => {

    return (
        <div>
            <Link to={'/profile-home'}>
                Back
            </Link>
            <h2>LIST NAME</h2>
            <div>
                {entries.map(entry => {
                    return (
                        <Entry content={entry} />
                    );
                })}
            </div>
        </div>
    );
}

export default ListView;
