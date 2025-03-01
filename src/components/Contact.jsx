import Button from "./ui/button.jsx";


const Contact = () => (
    <div id="contact">
        <h2 >Contact Us</h2>
        <form >
            <input
                   type="text" placeholder="Your Name"/>
            <input
                   type="email" placeholder="Your Email"/>
            <textarea
                placeholder="Your Message"></textarea>
            <Button>Submit</Button>
        </form>
    </div>
);

export default Contact;
