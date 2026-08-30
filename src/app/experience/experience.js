import { Col, Container, Row } from "react-bootstrap";
import styles from "./experience.module.css";
import { FaCircle } from "react-icons/fa";

export default function Experience() {
    const experienceData = [
        {
            year: "2023 - 2024",
            company: "DGtalists Solutions PVT. LTD",
            link: "https://dgtalists.com/",
            points: [
                "Implemented and enhanced user-facing features using HTML5, CSS3, Bootstrap, Tailwind CSS, JavaScript, and TypeScript.",
                "Optimized frontend performance using strong JavaScript fundamentals like Object handling, Array methods, Hoisting, and DOM optimization.",
                "Refactored and scaled shared codebases using React.js and Next.js ensuring cross-browser compatibility."
            ],
        },
        {
            year: "2024 - 2025",
            company: "RedoQ Software PVT. LTD",
            link: "https://redoq.com/",
            points: [
                "Translated Figma designs into pixel-perfect production-ready web and mobile UIs.",
                "Developed reusable components using React.js, Next.js, jQuery, and Micro-Frontend patterns.",
                "Integrated RESTful APIs and utilized Redux for predictable state management."
            ],
        },
        {
            year: "2025 - 2026",
            company: "IntelSpire Technologies",
            link: "https://intelspire.net/",
            points: [
                "Built and maintained scalable web and mobile web interfaces using React.js, Next.js, TypeScript, and JavaScript, delivering responsive, highperformance user experiences.",
                "Designed reusable UI components focused on usability, responsiveness, and cross-browser compatibility, contributing to a consistent product design system.",
                "Integrated RESTful APIs and debugged UI/production issues, improving application stability and user experience."
            ],
        },
    ];


    return (
        <section className={styles.experience} id="experience">
            <Container>
                <div className={`title-wrapper ${styles.allTitle}`}>
                    <span className="title">Experience</span>
                    <span className="title-line"></span>
                </div>
                <div className="mainHeading">
                    <h2 className={`heading ${styles.heading}`}>My professional path as a Frontend Developer</h2>
                    <p className={`subheading ${styles.subheading}`}>Showcasing my journey in creating responsive, interactive, and user-friendly web applications using modern frontend technologies.</p>
                </div>
                <div className={styles.totalexperience}>
                    <Row>
                        {experienceData.map((item, index) => (
                            <Col lg={4} md={6} key={index}>
                                <div className={styles.eachExp}>
                                    <h2>{item.year}</h2>
                                    <h3>{item.company}</h3>
                                    <div className={styles.eachTimeborder}>
                                        <FaCircle />
                                        <span className={styles.timelineHorizontal}></span>
                                    </div>
                                    <div className={styles.timelineContent}>
                                        <ul className={styles.expList}>
                                            {item.points.map((point, i) => (
                                                <li key={i}>
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </section>
    );
}
