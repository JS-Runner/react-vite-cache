import { Link, Outlet } from 'react-router';
import './index.css';

function App() {
  return (
    <>
      <h1>React Vite Cache - v{__APP_VERSION__}</h1>
      <div className="header-container">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <Outlet />
    </>
  );
}

export default App;
