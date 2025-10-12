import { Col, Container, Row } from "react-bootstrap";
import styles from './about.module.css';
import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { TbDeviceDesktopCode } from "react-icons/tb";

export default function About() {
    const skills = [
        "Designing wireframes, prototypes, and high-fidelity UI",
        "Conducting user research and usability testing",
        "Developing clean, responsive, and accessible web interfaces",
        "Collaborating with cross-functional teams to ensure seamless user experiences",
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
                                        2+ <br />
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
