import { Code, Database, Wrench } from 'lucide-react';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            icon: <Code size={32} />,
            title: 'Languages',
            skills: ['Python', 'Java', 'C', 'JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS']
        },
        {
            icon: <Database size={32} />,
            title: 'Frameworks',
            skills: ['React', 'Express.js', 'Node.js', 'Tailwind CSS', 'Bootstrap']
        },
        {
            icon: <Wrench size={32} />,
            title: 'Tools & Technologies',
            skills: ['Node.js', 'MySQL', 'Supabase', 'Power BI']
        }
    ];

    return (
        <section id="skills" className="skills">
            <div className="skills-container">
                <div className="section-header">
                    <h2 className="section-title">Skills & Technologies</h2>
                    <p className="section-subtitle">My technical expertise and toolset</p>
                </div>
                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-card">
                            <div className="skill-icon">{category.icon}</div>
                            <h3 className="skill-title">{category.title}</h3>
                            <div className="skill-tags">
                                {category.skills.map((skill, idx) => (
                                    <span key={idx} className="skill-tag">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
