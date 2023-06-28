const Modal = () => {
    // modal itself
    return ( 
        <div className="modal fade" id="reg-modal" tabIndex="-1" aria-labelledby="modal-title" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="modal-title">Get the Latest Updates</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, exercitationem laboriosam nihil minus voluptatibus harum aliquam consequatur pariatur inventore dignissimos illum excepturi ratione ipsum sit iusto alias eligendi fugit laborum?</p>
                        <label htmlFor="modal-email" className="form-label">Your email address:</label>
                        <input type="text" className="form-control" id="modal-email" placeholder="e.g. william@example.com" />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Modal;