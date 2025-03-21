const Contact = () => (
    <div id="contact" className="min-vh-100 container-fluid py-5 bg-black text-white">
        <div className="container container-fluid">
            <h2 className="mb-5 text-center text-white">Contact Us</h2>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card p-4 shadow-lg bg-dark text-white border-secondary">
                        <form action="https://formsubmit.co/roshanvivek2000@gmail.com" method="POST" className="mt-3">
                            <input type="hidden" name="_subject" value="New Contact Form Submission"/>
                            <div className="mb-3">
                                <p>Name</p>
                                <input type="text" className="form-control bg-dark text-white border-secondary"
                                       name="name" placeholder="Your Name" required/>
                            </div>
                            <div className="mb-3">
                                <p>Email</p>
                                <input type="email" className="form-control bg-dark text-white border-secondary"
                                       name="email" placeholder="Your Email" required/>
                            </div>
                            <div className="mb-3">
                                <p>Message</p>
                                <textarea className="form-control bg-dark text-white border-secondary" rows="3"
                                          name="message" placeholder="Your Message" required></textarea>
                            </div>
                            <div className="text-center">
                                <button className="btn btn-primary" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
);


export default Contact;
