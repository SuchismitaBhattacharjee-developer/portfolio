'use client'
import { Col, Container, Row } from "react-bootstrap";
import styles from "./skill.module.css";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const skillsData = [
  { name: "React.js", value: 95 },
  { name: "Next.js", value: 92 },
  { name: "JavaScript (ES6+)", value: 95 },
  { name: "TypeScript", value: 85 },
  { name: "Redux / Zustand", value: 90 },
  { name: "RESTful API Integration", value: 95 },
  { name: "Component-Based Architecture", value: 92 },
  { name: "Micro-Frontend Architecture", value: 85 },
  { name: "Web Performance Optimization", value: 88 },
  { name: "HTML5 / CSS3 / Tailwind / Bootstrap", value: 98 },
];


export default function Skill() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        if (inView) setAnimated(true);
    }, [inView]);

    return (
        <>
            <section className={styles.skillPart} id="skills">
                <Container>
                    <Row>
                        <Col lg={6} md={6}>
                            <div className={styles.skillLeft}>
                                <div className="title-wrapper">
                                    <span className="title">My Skills</span>
                                    <span className="title-line"></span>
                                </div>
                                <h2 className={`heading ${styles.heading}`}>What I Excel At</h2>
                                <p className="subheading">
                                    I am passionate about crafting modern, responsive, and visually
                                    appealing web experiences. With a strong foundation in HTML,
                                    CSS, and JavaScript, I build dynamic web applications using
                                    frameworks like React.js and Next.js. I also leverage tools like
                                    Figma , Tailwind CSS and Bootstrap to design intuitive
                                    interfaces and seamless user experiences. My goal is to bridge
                                    the gap between functionality and aesthetics, ensuring every
                                    project is both technically robust and creatively engaging.
                                    Constantly learning and exploring new technologies, I strive to
                                    deliver high-quality solutions that meet user needs and exceed
                                    expectations.
                                </p>
                            </div>
                        </Col>
                        <Col lg={6} md={6}>
                            <div ref={ref} className={styles.skillSection}>
                                {skillsData.map((skill, index) => (
                                    <div key={index} className={styles.progressWrapper}>
                                        <h4>{skill.name}</h4>
                                        <p className={styles.progressValue}>{skill.value}%</p>
                                        <div className={styles.progress}>
                                            <div
                                                className={styles.progressBar}
                                                style={{ width: animated ? `${skill.value}%` : "0%" }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}
