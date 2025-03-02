
const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top shadow">
            <div className="container">
                <a className="navbar-brand text-white" href="#intro">IRIS NDT</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link text-white" href="#intro">Home</a></li>
                        <li className="nav-item"><a className="nav-link text-white" href="#services">Services</a></li>
                        <li className="nav-item"><a className="nav-link text-white" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
