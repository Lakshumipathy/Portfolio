import { Github } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Face Recognition Attendance System',
            description: 'An automated attendance system using deep learning and computer vision to recognize faces and mark attendance in real-time.',
            techStack: ['Python', 'OpenCV', 'Machine Learning', 'Face Recognition'],
            category: 'AI/ML',
            githubLink: '',
            demoLink: ''
        },
        {
            title: 'Simple Weather Application',
            description: 'A responsive weather app that provides real-time weather information using OpenWeatherMap API with a clean user interface.',
            techStack: ['React', 'OpenWeatherMap API', 'JavaScript', 'CSS'],
            category: 'Web Application',
            githubLink: 'https://github.com/Lakshumipathy/weather'
        },
        {
            title: 'EDUGRADE – Smart Academic Performance System',
            description: 'An intelligent system to track and analyze academic performance, providing insights and predictions to help students improve their grades.',
            techStack: ['React', 'TypeScript', 'Node.js', 'Supabase'],
            category: 'Web Application',
            githubLink: 'https://github.com/Lakshumipathy/EduGrade.co'
        }
    ];

    return (
        <section id="projects" className="projects">
            <div className="projects-container">
                <div className="section-header">
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-subtitle">Some of my recent work and personal projects</p>
                </div>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-category">{project.category}</div>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="project-tech">
                                {project.techStack.map((tech, idx) => (
                                    <span key={idx} className="tech-badge">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="project-links">
                                {project.githubLink && (
                                    <a
                                        href={project.githubLink}
                                        className="project-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Github size={18} />
                                        <span>Link</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
