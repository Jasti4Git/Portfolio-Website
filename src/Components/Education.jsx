import  '../Education.css';


const education = [
    {
        degree: "Master of Science in Computer Science",
        university: "University of New Orleans",
        duration: "Jan 2014 – Aug 2015"
    },
    {
        degree: "Bachelor of Science in Computer Science",
        university: "Ambedkar Institute of Technology",
        duration: "Aug 2009 – Aug 2013"
    }
];

const certifications = [
    "AWS Certified Developer – Associate",
    "Oracle Certified Associate Java SE 8 Programmer",
    "IBM Blockchain Essentials",
    "Generative AI for Everyone",
    "AI for Everyone"
];

export default function Education() {
    return (
        <section id="education" className="education">
            <h2>Education & Certifications</h2>

            <div className="education-container">

                <div className="education-column">
                    <h3>Education</h3>

                    {education.map((item) => (
                        <div className="education-card" key={item.university}>
                            <h4>{item.degree}</h4>
                            <p>{item.university}</p>
                            <span>{item.duration}</span>
                        </div>
                    ))}
                </div>

                <div className="education-column">
                    <h3>Certifications</h3>

                    {certifications.map((certification) => (
                        <div className="certification-card" key={certification}>
                            {certification}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}