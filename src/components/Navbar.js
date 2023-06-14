import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <Link className="navbar-brand" to='/'>Navbar</Link>
            
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item ">
                            <Link className="nav-link" to='/temperature'>Temperature</Link> 
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/childtoparent'>ChildToParent</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/searchfilter'>Search Filter</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/form'>Login Form</Link>
                        </li>

                    </ul>
                </div>
            </nav>

        </React.Fragment>
    )
}

export default Navbar