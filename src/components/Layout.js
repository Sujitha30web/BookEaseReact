import { Link, Outlet } from "react-router-dom";
// import './Layout.css';

export default function Layout() {
    const clientId = localStorage.getItem('clientId'); // Retrieve clientId from localStorage

    return (
        <>
            <nav className="navbar navbar-expand-sm bg-secondary navbar-dark">
                <div className="container-fluid">
                    <ul className="navbar-nav">

                        <li className="nav-item">
                            <Link to='/' className="nav-link">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link to='/hall' className="nav-link">Hall</Link>
                        </li>

                        <li className="nav-item">
                            <Link to='/login' className="nav-link">Login</Link>
                        </li>

                        <li className="nav-item">
                            <Link to='/register' className="nav-link">Register</Link>
                        </li>

                        <li className="nav-item">
                            <Link to='/profile' className="nav-link">Profile</Link>
                        </li>
{/* 
                        <li className="nav-item">
                           <Link to={`/client/${clientId}`} className="nav-link">Client</Link>
                        </li> */}

                    </ul>
                </div>
            </nav>

            <Outlet></Outlet>
        </>
    )
}