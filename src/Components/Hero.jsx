import '../Hero.css';
import developerImage from '../Assests/Portfolio Caricature.JPG';



export default function hero() {

    return (
        <section className="hero">
             <div className="hero-inner">    
            <div className="hero-content">
            <p>Hi, I'm</p>
            <h1>Sreemanth Jasti</h1>
            <h2>Full Stack Software Engineer</h2>
            </div>

                 <div className="hero-image">
                <img
                    src={developerImage}
                    alt="Software developer at his workstation"
                />
            </div>
        </div>


        </section>
    )
}