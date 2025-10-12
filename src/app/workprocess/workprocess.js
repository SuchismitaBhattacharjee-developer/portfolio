import { Col, Container, Row } from "react-bootstrap"
import styles from "./workprocess.module.css"
import { BiSolidRightArrowAlt } from "react-icons/bi";

export default function Workprocess() {
    const steps = [
        { img: "/images/search.png", title: "Research" },
        { img: "/images/design.png", title: "Design" },
        { img: "/images/development.png", title: "Development" },
        { img: "/images/launch.png", title: "Discover" },
    ];
    return (
        <>
            <section className={styles.workprocess}>
                <Container>
                    <div className="mainHeading">
                        <div className={`title-wrapper ${styles.titlewrapper}`}>
                            <span className="title">How I Work</span>
                            <span className="title-line"></span>
                        </div>
                        <h2 className={`heading ${styles.heading}`}>My Workflow for Every Project</h2>
                        <p className={`subheading ${styles.subheading}`}>From concept to completion — a clear, organized, and creative process that ensures quality results.</p>
                    </div>
                    <div className={styles.processInfo}>
                        <Row>
                            {steps.map((step, index) => (
                                <Col lg={3} md={6} key={index} className={styles.processCol}>
                                    <div className={`${styles.eachProcess} ${styles.first}`}>
                                        <img src={step.img} alt={step.title} />
                                        {index !== steps.length - 1 && (
                                            <BiSolidRightArrowAlt className={styles.arrowIcon} />
                                        )}
                                    </div>
                                    <h4>{step.title}</h4>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    )
}