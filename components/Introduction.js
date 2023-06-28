import Link from "next/link";
import Image from "next/image";

import Sidebar from "./add-ons/Sidebar";

const Introduction = () => {
        // main image & intro text / side panel trigger
        return (
        <>
            <section id="intro">
                <div className="container-lg">
                    <div className="row g-4 justify-content-center align-items-center">
                        <div className="col-md-5 text-center text-md-start">
                        <h1>
                            <div className="display-2">Get Paid Now</div>
                            <div className="display-5 text-muted">the same day</div>
                        </h1>
                        <p className="lead my-4 text-muted">Dealflow gets you paid the same day when sending an invoice to a brand. Avoid frustration with financial admin.</p>
                        <Link href="https://apps.apple.com/pl/app/dealflow/id1613740232" className="btn btn-secondary btn-lg">Get App</Link>
                        {/* open sidebar / offcanvas */}
                        <Link href="#sidebar" className="d-block mt-3" data-bs-toggle="offcanvas" role="button" aria-controls="sidebar">
                            Explore my other options
                        </Link>
                        </div>
                        <div className="col-md-5 col-sm-3 text-center d-md-block d-sm-block">
                        {/* tooltip */}
                        <span className="tt" data-bs-placement="bottom" title="Dealflow explained in a single video">
                            <Link href="https://www.youtube.com/watch?v=X3vKSHc6H-k&t=1s"><Image src="/assets/dealflow-cover.png" className="img-fluid" width={400}
                            height={400} priority alt="ebook"></Image></Link>
                        </span>
                        </div>
                    </div>
                </div>
            </section>

            <Sidebar />
        </>
     );
}
 
export default Introduction;