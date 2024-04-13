import './styles/Nav.scss';
import CreateList from './screens/CreateList';
import Home from './screens/Home';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import ProfileHome from './screens/ProfileHome';
import ListView from './screens/ListView';

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="create-list" element={<CreateList />} />
        <Route path="profile-home" element={<ProfileHome />} />
        <Route path="list-view/*" element={<ListView />} />

        {/* Using path="*"" means "match anything", so this route
          acts like a catch-all for URLs that we don't have explicit
          routes for. */}
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav className='nav-container'>
        <ul className='flex-container nav-items'>
          <li>
            <Link to="/">Listr</Link>
          </li>
          <div className='nav-spacer'/>
          <li>
            <Link to="/create-list">Create List</Link>
          </li>
          <li>
            <Link to="/profile-home">Profile Home</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App;
