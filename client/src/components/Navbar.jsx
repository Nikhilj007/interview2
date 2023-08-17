import { Link } from "react-router-dom";

function Navbar() {
    return ( 
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/new">Create New Question</Link>
        </div>
     );
}

export default Navbar;