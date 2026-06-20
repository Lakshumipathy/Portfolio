import './About.css';
import profileImage from '../assets/profile.png';

const About = () => {


    return (
        <section id="about" className="about">
            <div className="about-container">
                {/* Section Header */}
                <div className="section-header reveal">
                    <h2 className="section-title">About Me</h2>
                    
                </div>

                <div className="about-grid">
                    {/* Left — Avatar & Quick Stats */}
                    <div className="about-left">
                        <div className="about-avatar-wrapper">
                            <div className="about-avatar">
                                <img src={profileImage} alt="Lakshumipathy R" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 43%', borderRadius: '50%' }} />
                            </div>
                            <div className="avatar-ring" />
                            <div className="avatar-glow" />
                        </div>
                    </div>

                    {/* Right — Bio & Highlights */}
                    <div className="about-right">
                        <div className="about-bio reveal-right">
                            <h3 className="bio-greeting">Hey there! I'm <span className="bio-name">Lakshumipathy R</span></h3>
                            <p className="bio-text">
                                I'm an enthusiastic undergraduate student pursuing a degree in Artificial Intelligence
                                and Data Science. I have a genuine passion for building things on the web and leveraging
                                data to solve real-world problems. I enjoy working at the crossroads of technology and
                                creativity — whether that's crafting clean, responsive UIs or diving deep into datasets
                                to uncover meaningful insights.
                            </p>
                            <p className="bio-text">
                                When I'm not coding, I'm exploring new technologies, working on personal projects,
                                and continuously growing my skills to become a well-rounded developer who can contribute
                                meaningfully to any team or product.
                            </p>
                            
                        </div>


                    </div>
                </div>
            </div>

            {/* Background decorations */}
            <div className="about-bg">
                <div className="about-orb about-orb-1" />
                <div className="about-orb about-orb-2" />
            </div>
        </section>
    );
};

export default About;
