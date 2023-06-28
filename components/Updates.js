import Modal from "./add-ons/Modal";

const Updates = () => {
    // get updates / modal trigger
    return (
        <>
            <section className="bg-dark">
                <div className="container">
                    <div className="text-center text-light">
                        <h2>Stay in The Loop</h2>
                        <p className="lead">Get the latest updates as they happen...</p>
                    </div>
                
                    <div className="row justify-content-center">
                        <div className="col-md-8 text-center">
                            <p className="text-light fw-lighter my-4">Dealflow is for creators and freelancers that make money collaborating with brands. Right now we are only live for an exclusive group of creators. You must apply to join our next intake! Creator wallet like a bank account, just built for creators and the modern internet (web 3.0). We cannot get paid in Bitcoin, but it's in our roadmap. We are big crypto fans!</p>
                            <button className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#reg-modal">
                                Register for Updates
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <Modal />
        </>
     );
}
 
export default Updates;