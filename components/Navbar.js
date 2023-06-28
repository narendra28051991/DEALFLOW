import Link from "next/link";

const Navbar = () => {
    return (
        // navbar
        <nav className="navbar navbar-expand-md navbar-light pt-5 pb-4">
            <div className="container-xxl">
                {/* navbar brand / title */}
                <Link className="navbar-brand" href="#intro">
                <span className="h1 text-secondary fw-bold">
                    <i className="bi bi-wallet-fill"></i>
                    Dealflow
                </span>
                </Link>
                {/* toggle button for mobile nav */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                {/* navbar links */}
                <div className="collapse navbar-collapse justify-content-end align-center" id="main-nav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link" href="#topics">About Dealflow</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" href="#reviews">Reviews</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" href="#contact">Get in Touch</Link>
                    </li>
                    <li className="nav-item d-md-none">
                    <Link className="nav-link" href="#pricing">Pricing</Link>
                    </li>
                    <li className="nav-item ms-2 d-none d-md-inline">
                    <Link className="btn btn-secondary" href="#pricing">pay now</Link>
                    </li>
                    
                </ul>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;