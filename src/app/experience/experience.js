import { Col, Container, Row } from "react-bootstrap";
import styles from "./experience.module.css";
import { FaCircle } from "react-icons/fa";

export default function Experience() {
    const experienceData = [
        {
            year: "2023 - 2024",
            company: "DGtalists Solutions PVT. LTD",
            link: "https://dgtalists.com/",
            description: `During my time at DGtalists Solutions Pvt. Ltd., I worked as a Frontend Developer, focusing on creating modern, responsive, and user-friendly web interfaces.My role involved transforming design concepts into functional digital experiences using technologies like HTML, CSS, Bootstrap, jQuery, JavaScript, React.js, and Next.js.I also utilized Figma to design intuitive UI/UX layouts, ensuring seamless and visually appealing experiences across devices.In addition, I collaborated with the development team using GitHub for version control and project management, maintaining clean and efficient workflows.Through this experience, I enhanced my ability to bridge the gap between design and development — delivering pixel-perfect, performance-optimized, and engaging websites that align with client goals and brand identity.`,
        },
        {
            year: "2024 - 2025",
            company: "RedoQ Software PVT. LTD",
            link: "https://redoq.com/",
            description: `At RedoQ Software Pvt. Ltd., I worked as a Frontend Developer, where I was responsible for developing responsive and dynamic web interfaces.I utilized HTML, CSS, Bootstrap, jQuery, and JavaScript to build interactive and visually appealing user experiences.In addition, I collaborated with team members using Bitbucket for version control and code management, ensuring smooth project workflow and efficient deployment.This experience strengthened my understanding of front-end development best practices, teamwork in agile environments, and the importance of clean, maintainable code in delivering high-quality web solutions.`,
        },
        {
            year: "2025 - Present",
            company: "Intelspire Technology",
            link: "https://intelspire.net/",
            description: `At Intelspire Technology, I worked as a Frontend Developer, where I contributed to building dynamic, responsive, and high-performance web applications.My work involved developing user-friendly interfaces using HTML, CSS, Bootstrap, jQuery, JavaScript, React.js, and Next.js, ensuring seamless performance across devices and browsers.I collaborated closely with designers and backend developers, using Figma for UI/UX design implementation and Git for version control.Additionally, I managed project tasks and progress efficiently through Jira, maintaining smooth coordination within the development team.This experience enhanced my expertise in modern frontend frameworks, agile project management, and delivering visually appealing, functional, and optimized web solutions.`,
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
                            <Col lg={4} md={4} key={index}>
                                <div className={styles.eachExp}>
                                    <h2>{item.year}</h2>
                                    <h3>{item.company}</h3>
                                    <div className={styles.eachTimeborder}>
                                        <FaCircle />
                                        <span className={styles.timelineHorizontal}></span>
                                    </div>
                                    <div className={styles.timelineContent}>
                                        <p className={styles.subheading}>
                                            During my time at{" "}
                                            <a href={item.link}>{item.company}</a>,{" "}
                                            {item.description}
                                        </p>
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
