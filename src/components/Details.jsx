const Details = () => (
    <div id="details" className="container-fluid py-5 bg-dark text-white">
        <div className="container">
            <div className="row g-4">
                {/* Company Info */}
                <div className="col-md-4">
                    <div className="h-100 p-4 bg-black rounded shadow-lg border border-secondary">
                        <h3 className="mb-4 fw-bold">IRIS NDT</h3>
                        <p>Providing advanced non-destructive testing solutions since 2018. We deliver quality inspection services across various industries.</p>
                        <div className="mt-3">
                            <button className="btn btn-outline-light me-2">
                                <i className="bi bi-whatsapp"></i>
                            </button>
                            <a className="btn btn-outline-light me-2" href='mailto:roshanvivek3920@gmail.com' target="_blank">
                                <i className="bi bi-envelope" ></i>
                            </a>
                            <button className="btn btn-outline-light me-2">
                                <i className="bi bi-linkedin"></i>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="col-md-4">
                    <div className="h-100 p-4 bg-black rounded shadow-lg border border-secondary">
                        <h3 className="mb-4 fw-bold">Quick Links</h3>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <a href="#intro" className="text-decoration-none text-white">
                                    <i className="bi bi-chevron-right me-2"></i>Home
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#services" className="text-decoration-none text-white">
                                    <i className="bi bi-chevron-right me-2"></i>Services
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#contact" className="text-decoration-none text-white">
                                    <i className="bi bi-chevron-right me-2"></i>Contact
                                </a>
                            </li>
                            {/*<li className="mb-2">*/}
                            {/*    <a href="#" className="text-decoration-none text-white">*/}
                            {/*        <i className="bi bi-chevron-right me-2"></i>Privacy Policy*/}
                            {/*    </a>*/}
                            {/*</li>*/}
                        </ul>
                    </div>
                </div>

                {/* Contact Details */}
                <div className="col-md-4">
                    <div className="h-100 p-4 bg-black rounded shadow-lg border border-secondary">
                        <h3 className="mb-4 fw-bold">Contact Details</h3>
                        <ul className="list-unstyled">
                            <li className="mb-3 d-flex align-items-start">
                                <i className="bi bi-geo-alt-fill me-3 mt-1"></i>
                                <span>123 Industrial Park, Suite 456<br />Houston, TX 77002</span>
                            </li>
                            <li className="mb-3 d-flex align-items-center">
                                <i className="bi bi-telephone-fill me-3"></i>
                                <span>+91 93601 63895</span>
                            </li>
                            <li className="mb-3 d-flex align-items-center">
                                <i className="bi bi-envelope-fill me-3"></i>
                                <span>info@irisndt.com</span>
                            </li>
                            <li className="d-flex align-items-center">
                                <i className="bi bi-clock-fill me-3"></i>
                                <span>Mon-Fri: 8:00 AM - 6:00 PM</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="row mt-5">
                <div className="col-12">
                    <div className="py-3 text-center border-top border-secondary">
                        <p className="m-0">© 2025 IRIS NDT. All Rights Reserved. Designed with <i className="bi bi-heart-fill text-danger"></i></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Details;
