import { Col, Container, Row } from 'react-bootstrap';
import styles from './education.module.css';

export default function Education() {
    return (
        <>
            <section className={styles.educationPart} id='education'>
                <Container>
                    <div className={styles.educationTop}>
                        <Row>
                            <Col lg={4} md={6}>
                                <div className="title-wrapper">
                                    <span className="title">Education</span>
                                    <span className="title-line"></span>
                                </div>
                                <h2 className={`heading ${styles.heading}`}>My Education</h2>
                            </Col>
                            <Col lg={8} md={6}>
                                <div className={styles.educationRight}>
                                    <p className="subheading">I have pursued a strong foundation in science and electrical engineering, which has equipped me with both theoretical knowledge and practical skills essential for a career in the tech and engineering fields.</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className={styles.educationBotttom}>
                        <Row>
                            <Col lg={4} md={4}>
                                <div className={styles.educationCard}>
                                    <small>2016-2017 ( Ichapur Girls' High School )</small>
                                    <h5>Higher Secondary in Science</h5>
                                    <p className={`subheading ${styles.subheading}`}>I developed a solid base in physics, chemistry, and mathematics, which fueled my curiosity in electrical systems and problem-solving techniques.</p>
                                </div>
                            </Col>
                            <Col lg={4} md={4}>
                                <div className={styles.educationCard}>
                                    <small>2017-2020 ( Baruipur Govt. Polytechnic )</small>
                                    <h5>Diploma in Electrical Engineering</h5>
                                    <p className={`subheading ${styles.subheading}`}>During my diploma, I gained hands-on experience with electrical circuits, power systems, and control mechanisms, preparing me for advanced studies and technical challenges.</p>
                                </div>
                            </Col>
                            <Col lg={4} md={4}>
                                <div className={styles.educationCard}>
                                    <small>2020-2023 ( Gargi Memorial Institute Of Technology )</small>
                                    <h5>Bachelor in Electrical Engineering</h5>
                                    <p className={`subheading ${styles.subheading}`}>I further honed my skills in electrical design, renewable energy, and electronics. Projects and practical labs enhanced my ability to apply concepts to real-world engineering solutions.</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    )
}