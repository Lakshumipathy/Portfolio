import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            type: 'work',
            title: 'Data Analyst Intern',
            organization: 'Energica ASPL',
            location: 'Remote',
            period: 'June 2025 - July 2025',
            description: 'Worked on data cleaning and analysis using Excel and built interactive dashboards in Power BI for effective data visualization. Automated repetitive Excel tasks using macros to improve efficiency and accuracy.'
        },
        {
            type: 'work',
            title: 'Centre of AI Intern',
            organization: 'Rajalakshmi Institute of Technology',
            location: 'Chennai, India',
            period: 'Nov 2025 - Dec 2025',
            description: 'Contributed to project planning by designing problem statements across different development stages. Assisted in project copyright registration and co-authored a research paper on system implementation. Developed skills in technical documentation, data management, testing, and team collaboration.'
        }
    ];

    const education = [
        {
            degree: 'B.Tech in Artificial Intelligence & Data Science',
            institution: 'Rajalakshmi Institute of Technology',
            location: 'Chennai, India',
            period: '2023 - 2027',
            cgpa: '8.2'
        },
        {
            degree: 'Higher Secondary School',
            institution: 'Maharishi International Residential School',
            location: 'Chennai, India',
            period: '2020 - 2023',
            '10th': '83%',
            '12th': '80%'
        }
    ];

    return (
        <section id="experience" className="experience">
            <div className="experience-container">
                <div className="section-header">
                    <h2 className="section-title">Experience & Education</h2>
                    <p className="section-subtitle">My professional journey and academic background</p>
                </div>

                <div className="experience-content">
                    <div className="experience-section">
                        <h3 className="subsection-title">
                            <Briefcase size={24} />
                            Work Experience
                        </h3>
                        <div className="timeline">
                            {experiences.map((exp, index) => (
                                <div key={index} className="timeline-item">
                                    <div className="timeline-dot"></div>
                                    <div className="timeline-content">
                                        <h4 className="timeline-title">{exp.title}</h4>
                                        <div className="timeline-org">{exp.organization}</div>
                                        <div className="timeline-meta">
                                            <span className="meta-item">
                                                <MapPin size={16} />
                                                {exp.location}
                                            </span>
                                            <span className="meta-item">
                                                <Calendar size={16} />
                                                {exp.period}
                                            </span>
                                        </div>
                                        <p className="timeline-description">{exp.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="experience-section">
                        <h3 className="subsection-title">
                            <GraduationCap size={24} />
                            Education
                        </h3>
                        <div className="timeline">
                            {education.map((edu, index) => (
                                <div key={index} className="timeline-item">
                                    <div className="timeline-dot"></div>
                                    <div className="timeline-content">
                                        <h4 className="timeline-title">{edu.degree}</h4>
                                        <div className="timeline-org">{edu.institution}</div>
                                        <div className="timeline-meta">
                                            <span className="meta-item">
                                                <MapPin size={16} />
                                                {edu.location}
                                            </span>
                                            <span className="meta-item">
                                                <Calendar size={16} />
                                                {edu.period}
                                            </span>
                                            {edu.cgpa && (
                                                <span className="meta-item">
                                                    <strong>CGPA:</strong> {edu.cgpa}
                                                </span>
                                            )}
                                            {edu['10th'] && (
                                                <span className="meta-item">
                                                    <strong>10th:</strong> {edu['10th']}
                                                </span>
                                            )}
                                            {edu['12th'] && (
                                                <span className="meta-item">
                                                    <strong>12th:</strong> {edu['12th']}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
