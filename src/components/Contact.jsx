import { Mail, Github, Linkedin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const contactInfo = [
        {
            icon: <Mail size={24} />,
            label: 'Email',
            value: 'rlakshu7@gmail.com',
            link: 'mailto:rlakshu7@gmail.com'
        },
        {
            icon: <Github size={24} />,
            label: 'GitHub',
            value: 'https://github.com/Lakshumipathy',
            link: 'https://github.com/Lakshumipathy'
        },
        {
            icon: <Linkedin size={24} />,
            label: 'LinkedIn',
            value: 'linkedin.com/in/lakshumipathy',
            link: 'https://www.linkedin.com/in/lakshumipathy-r-813599293/'
        }
    ];

    return (
        <section id="contact" className="contact">
            <div className="contact-container">
                <div className="section-header">
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="section-subtitle">
                        Feel free to reach out for collaborations or just a friendly chat
                    </p>
                </div>

                <div className="contact-content">
                    <div className="contact-info">
                        <h3 className="contact-heading">Let's Connect</h3>
                        <p className="contact-text">
                            I'm actively seeking opportunities in Web Development. Let's collaborate
                            on innovative projects or discuss how I can contribute to your team's success!
                        </p>
                        <div className="contact-methods">
                            {contactInfo.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.link}
                                    className="contact-method"
                                    target={item.label === 'Email' ? '_self' : '_blank'}
                                    rel="noopener noreferrer"
                                >
                                    <div className="method-icon">{item.icon}</div>
                                    <div className="method-details">
                                        <div className="method-label">{item.label}</div>
                                        <div className="method-value">{item.value}</div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        <div className="whatsapp-section">
                            <h3 className="contact-heading">Send a Message</h3>
                            <p className="contact-text">
                                Click the button below to chat with me directly on WhatsApp
                            </p>
                            <a
                                href="https://wa.me/919047346219"
                                className="whatsapp-btn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Send size={18} />
                                Message on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
