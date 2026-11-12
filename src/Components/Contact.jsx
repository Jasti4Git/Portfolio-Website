import '../Contact.css';

export default function Contact() {
    return (
        <section id="contact" className="contact">
            <h2>Get In Touch</h2>

            <p>
                I'm always interested in discussing software
                engineering opportunities, technology, and
                interesting projects.
            </p>

            <a
                href="mailto:sreemanthjasti91@gmail.com"
                className="contact-button"
            >
                Email Me
            </a>
        </section>
    );
}