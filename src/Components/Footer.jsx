
import '../Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-links">
                <a
                    href="https://github.com/Jasti4Git"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>

                <a
                    href="https://www.linkedin.com/in/sreemanthjasti/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>
            </div>

            <p>
                © {new Date().getFullYear()} Sreemanth Jasti.
                All rights reserved.
            </p>
        </footer>
    );
}
