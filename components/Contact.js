const Contact = () => {
    // contact form
    // form-control, form-label, form-select, input-group, input-group-text
    return ( 
        <section id="contact">
            <div className="container-lg">
                
                <div className="text-center">
                    <h2>Get in Touch</h2>
                    <p className="lead">Questions to ask? Fill out the form to contact me directly...</p>
                </div>
                <div className="row justify-content-center my-5">
                    <div className="col-lg-6">
                        
                        <form>
                            <label htmlFor="email" className="form-label">Email address:</label>
                            <div className="input-group mb-4">
                                <span className="input-group-text">
                                    <i className="bi bi-envelope-fill text-secondary"></i>
                                </span>
                                <input type="text" id="email" className="form-control" placeholder="e.g. william@example.com" />
                                {/* tooltip */}
                                <span className="input-group-text">
                                    <span className="tt" data-bs-placement="bottom" title="Enter an email address we can reply to.">
                                        <i className="bi bi-question-circle text-muted"></i>
                                    </span>
                                </span>
                            </div>
        
                            <label htmlFor="name" className="form-label">Name:</label>
                            <div className="mb-4 input-group">
                                <span className="input-group-text">
                                    <i className="bi bi-person-fill text-secondary"></i>
                                </span>
                                <input type="text" id="name" className="form-control" placeholder="e.g. William" />
                                {/* tooltip */}
                                <span className="input-group-text">
                                    <span className="tt" data-bs-placement="bottom" title="Pretty self explanatory really...">
                                        <i className="bi bi-question-circle text-muted"></i>
                                    </span>
                                </span>
                            </div>
        
                            <label htmlFor="subject" className="form-label">What is your question about?</label>
                            <div className="mb-4 input-group">
                                <span className="input-group-text">
                                    <i className="bi bi-chat-right-dots-fill text-secondary"></i>
                                </span>
                                <select className="form-select" id="subject">
                                    <option value="pricing" defaultValue>Pricing query</option>
                                    <option value="content">Content query</option>
                                    <option value="other">Other query</option>
                                </select>
                            </div>
                            <div className="mb-4 mt-5 form-floating">
                                <textarea className="form-control" id="query" style={{height: 140 + 'px'}} placeholder="query"></textarea>
                                <label htmlFor="query">Your query...</label>
                            </div>
                            <div className="mb-4 text-center">
                                <button type="submit" className="btn btn-secondary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Contact;