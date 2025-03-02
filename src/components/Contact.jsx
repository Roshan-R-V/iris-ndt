const Contact = () => (
    <div id="contact" className="container d-flex justify-content-center align-items-center my-5" style={{ minHeight: "50vh" }}>
        <div className="card p-4 shadow-lg bg-dark text-white" style={{ width: "24rem" }}>
            <h2 className="text-center">Contact Us</h2>
            <form className="mt-3">
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Your Name" required />
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control" placeholder="Your Email" required />
                </div>
                <div className="mb-3">
                    <textarea className="form-control" rows="3" placeholder="Your Message" required></textarea>
                </div>
                <div className="text-center">
                    <button className="btn btn-primary" type="submit">Submit</button>
                </div>
            </form>
        </div>
    </div>
);

export default Contact;
