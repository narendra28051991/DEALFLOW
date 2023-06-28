import Image from "next/image";

const Accordion = () => {
        // accordion
        return ( 
        <div className="accordion" id="chapters">
            <div className="accordion-item">
                <h2 className="accordion-header" id="heading-1">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-1" aria-expanded="true" aria-controls="chapter-1">
                        Step 1 - Invoice in seconds
                    </button>
                </h2>
                <div id="chapter-1" className="accordion-collapse collapse show" aria-labelledby="heading-1" data-bs-parent="#chapters">
                    <div className="accordion-body">
                        <p>Create a beautiful invoice that you can send to your brand or agency in no time.</p>
                        <div className="mx-auto col-sm-4 col-lg-6">
                        <Image src="/assets/invoice.png" width={200} height={300} className="img-fluid" alt="invoice"></Image>
                        </div>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="heading-2">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-2" aria-expanded="false" aria-controls="chapter-2">
                        Step 2 - Get paid now
                    </button>
                </h2>
                <div id="chapter-2" className="accordion-collapse collapse" aria-labelledby="heading-2" data-bs-parent="#chapters">
                    <div className="accordion-body">
                        <p>Companies pay you after 4+ weeks. We pay you the same day.</p>
                        <div className="mx-auto col-lg-4">
                        <Image src="/assets/get-paid.png" width={200} height={300} className="img-fluid" alt="get-paid"></Image>
                        </div>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="heading-3">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-3" aria-expanded="false" aria-controls="chapter-1">
                        Step 3 - Withdraw anytime
                    </button>
                </h2>
                <div id="chapter-3" className="accordion-collapse collapse" aria-labelledby="heading-3" data-bs-parent="#chapters">
                    <div className="accordion-body">
                        <p>You can transfer the money anywhere. You're in control.</p>
                        <div className="mx-auto col-lg-4">
                        <Image src="/assets/withdraw.png" width={200} height={300} className="img-fluid" alt="withdraw"></Image>
                        </div>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="heading-4">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-4" aria-expanded="false" aria-controls="chapter-4">
                        Benefit 1 - Reduce admin
                    </button>
                </h2>
                <div id="chapter-4" className="accordion-collapse collapse" aria-labelledby="heading-4" data-bs-parent="#chapters">
                    <div className="accordion-body">
                        <p>We collect payments for you.</p>
                        <p>That means we'll have to chase your client if they forget, are slow or refuse to pay.</p>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="heading-5">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-5" aria-expanded="false" aria-controls="chapter-5">
                        Benefit 2 - Invest today
                    </button>
                </h2>
                <div id="chapter-5" className="accordion-collapse collapse" aria-labelledby="heading-5" data-bs-parent="#chapters">
                    <div className="accordion-body">
                        <p>Invest in your business when the work is done.</p>
                        <p>1 month of invoice waiting is 1 month with missed opportunities.</p>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="heading-5">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-6" aria-expanded="false" aria-controls="chapter-6">
                        Benefit 3 - No risk
                    </button>
                </h2>
                <div id="chapter-6" className="accordion-collapse collapse" aria-labelledby="heading-5" data-bs-parent="#chapters">
                    <div className="accordion-body">
                        <p>You have 0 risk if the brands don’t pay.</p>
                        <p>We take the risk for you, so you can focus on creating the future.</p>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="heading-5">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-7" aria-expanded="false" aria-controls="chapter-7">
                        Benefit 4 - No change for client
                    </button>
                </h2>
                <div id="chapter-7" className="accordion-collapse collapse" aria-labelledby="heading-5" data-bs-parent="#chapters">
                    <div className="accordion-body">
                        <p>Dealflow is free for companies and they don’t have to change a single thing in their system.</p>
                        <p>It just works.</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Accordion;