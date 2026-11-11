import '../Navbar.css';

export default function Navbar({ name }) {
    return (

       <nav className="navbar">
            <h3 className="navbar-brand">{name}</h3>

            <div className="navbar-links">
             
                <a href="#about">About</a>
                <a href="#experience">Experience</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>     
    )
}