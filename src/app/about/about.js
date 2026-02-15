import { Col, Container, Row } from "react-bootstrap";
import styles from './about.module.css';
import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { TbDeviceDesktopCode } from "react-icons/tb";

export default function About() {
    const skills = [
        "Frontend Developer specializing in building scalable, high-performance web applications using React.js, Next.js, JavaScript (ES6+), HTML5, and CSS3.",

        "Strong expertise in component-based architecture, React Hooks, state management, RESTful API integration, and performance optimization.",

        "Experienced in translating Figma designs into production-ready, responsive, and pixel-perfect user interfaces.",

        "Focused on writing clean, maintainable, and optimized code to deliver seamless user experiences across devices and browsers."
    ];

    return (
        <>
            <section className={styles.aboutMe} id="about">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <div className={styles.aboutLeft}>
                                <div className={styles.exp}>
                                    <h2 className={`heading ${styles.heading}`}>
                                        3+ <br />
                                        <span>Years of Experience</span>
                                    </h2>
                                </div>
                                <div className={styles.field}>
                                    <div className={styles.designCardImg}>
                                        <TbDeviceDesktopCode className={styles.icon} />
                                    </div>
                                    <div className={styles.content}>
                                        <h5>Frontend Engineer</h5>
                                        <span>100 Projects</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className={styles.aboutRight}>
                                <div className="title-wrapper">
                                    <span className="title">About Me</span>
                                    <span className="title-line"></span>
                                </div>
                                <h2 className={`heading ${styles.heading}`}>
                                    Crafting Intuitive Digital Experiences with Precision & Creativity
                                </h2>
                                <p className="subheading">
                                    I am a Professional UI/UX Designer & Web Developer with a strong focus on delivering
                                    visually compelling and user-centric digital solutions. With expertise in React.js,
                                    Next.js, HTML, CSS, Bootstrap, and Tailwind CSS, I bridge the gap between design and
                                    development.
                                </p>
                                <ul className={styles.aboutuslist}>
                                    {skills.map((item, index) => (
                                        <li key={index}>
                                            <FaArrowRight /> {item}
                                        </li>
                                    ))}
                                </ul>

                                <p className="subheading">
                                    Let's work together to transform your ideas into impactful digital products that
                                    <b> boost user engagement</b> and <b>drive business growth</b>.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}
