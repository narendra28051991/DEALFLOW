import Link from "next/link";

const Sidebar = () => {
    // side panel / offcanvas
    return ( 
        <div className="offcanvas offcanvas-start" tabIndex="-1" id="sidebar" aria-labelledby="sidebar-label">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="sidebar-label">My Other Options</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <p>Dealflow is for creators and freelancers that make money collaborating with brands. Right now we are only live for an exclusive group of creators. You must apply to join our next intake! Creator wallet like a bank account, just built for creators and the modern internet (web 3.0). We cannot get paid in Bitcoin, but it's in our roadmap. We are big crypto fans!</p>
                {/* dropdown */}
                <div className="dropdown mt-3">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="book-dropdown" data-bs-toggle="dropdown">
                    Choose a dealflow title
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="book-dropdown">
                        <li><Link className="dropdown-item" href="https://apps.apple.com/pl/app/dealflow/id1613740232">Become a Creator</Link></li>
                        <li><Link className="dropdown-item" href="https://dealflow.live/partners">Payment Guide</Link></li>
                        <li><Link className="dropdown-item" href="https://open.spotify.com/episode/6LcWGWBGioEFpT1d2wu2QF?go=1&sp_cid=7fe7f72f602de11e034764f9f3841291&utm_source=embed_player_p&utm_medium=desktop&nd=1">Podcast</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
 
export default Sidebar;