
import React from 'react';
import '../Experience.css';

const experiences = [
    {
        company: "National Institutes of Health",
        role: "Full Stack Developer",
        duration: "Aug 2019 – Present",
        location: "Bethesda, MD",
        responsibilities: [
            "Developed full-stack enterprise applications and enhanced existing platforms with new features.",
            "Improved application security, performance, and reliability.",
            "Developed regression testing automation, reducing testing time by 30%.",
            "Collaborated with teams on distributed systems and cross-product solutions."
        ]
    },
    {
        company: "PNC Bank",
        role: "Full Stack Developer / Production Support",
        duration: "Sep 2018 – Aug 2019",
        location: "Pittsburgh, PA",
        responsibilities: [
            "Developed wire transfer functionality using Java/J2EE.",
            "Remediated 10+ security vulnerabilities.",
            "Contributed to a 15% reduction in fraudulent transactions.",
            "Monitored application and Apache servers to prevent production issues."
        ]
    },
    {
        company: "Social Security Administration",
        role: "Full Stack Developer",
        duration: "Sep 2016 – Sep 2018",
        location: "Baltimore, MD",
        responsibilities: [
            "Modernized enterprise application interfaces using frontend frameworks.",
            "Improved page loading performance by 40%.",
            "Developed Java applications for IBM mainframes using the JZOS library."
        ]
    },
    {
        company: "Wells Fargo",
        role: "Java Developer",
        duration: "Jan 2016 – Sep 2016",
        location: "San Francisco, CA",
        responsibilities: [
            "Developed Java/J2EE applications involving image processing.",
            "Implemented automated notifications and scheduled batch processing.",
            "Helped migrate integrations to REST web services."
        ]
    }
];




export default function Experience() {

    const [isVisible, isRolesDisplayed] =React.useState({
    "National Institutes of Health": false,
    "PNC Bank": false,
    "Social Security Administration": false,
    "Wells Fargo": false
});

function UpdateRolesView(companyName){
       isRolesDisplayed(visibility => ({...visibility,[companyName]:!visibility[companyName]}));
}

    return (
        <section id="experience" className="experience">
            <h2>Professional Experience</h2>

            <div className="experience-container">
                {experiences.map((item, index) => (
                    <div className="experience-card" key={item.company}>
                        <div className="experience-header">
                            <div>
                                <h3>{item.company}</h3>
                                <h4>{item.role}</h4>
                            </div>

                            <span>{item.duration}</span>
                        </div>

                        <p className="experience-location">
                            {item.location}
                        </p>

                <button className="roles-toggle-button" onClick={() => UpdateRolesView(item.company)}>{isVisible[item.company]? "Hide roles": "Show roles" }</button>


                       {isVisible[item.company] && <ul>
                            {item.responsibilities.map((task, taskIndex) => (
                                <li key={taskIndex}>{task}</li>
                            ))}
                        </ul> }


                    </div>
                ))}
            </div>
        </section>
    );
}
