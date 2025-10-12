'use client';

import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from './banner.module.css';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import SplitText from 'gsap/SplitText';
import { Typewriter } from 'react-simple-typewriter';
import Image from 'next/image';

gsap.registerPlugin(SplitText);

export default function Banner() {
    const headingRef = useRef(null);

    useEffect(() => {
        const split = new SplitText(headingRef.current, { type: 'words,chars' });
        gsap.from(split.chars, {
            y: 50,
            opacity: 0,
            stagger: 0.05,
            duration: 0.8,
            ease: 'power3.out',
        });
    }, []);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/resume/SuchismitaResume.pdf';
        link.download = 'Suchismita_Bhattacharjee_Resume.pdf';
        link.click();
    };

    return (
        <>
            <section className={styles.mainBanner}>
                <div className={styles.singleWelcome}>
                    <Container>
                        <Row>
                            <Col lg={7}>
                                <div className={styles.bannerText}>
                                    <h2 ref={headingRef} className={styles.heading}>
                                        hi <span>,</span> i am <br /> Suchismita Bhattacharjee<span>.</span>
                                    </h2>
                                    <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
                                        I'm a{' '}
                                        <span style={{ color: '#b636ff' }}>
                                            <Typewriter
                                                words={['Frontend Developer', 'UI/UX Designer']}
                                                loop={0}
                                                cursor
                                                cursorStyle="|"
                                                typeSpeed={80}
                                                deleteSpeed={50}
                                                delaySpeed={1500}
                                            />
                                        </span>
                                    </p>
                                    <Button className={`${styles.download} ${styles.animatedBtn}`} onClick={handleDownload}>
                                        Download
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </Button>
                                </div>
                            </Col>
                            <Col lg={5}>
                                <div style={{ position: 'relative', width: '100%', height: '600px' }}>
                                    <Image
                                        src="/images/prof_img.jpg"
                                        alt="Profile Image"
                                        className={styles.profImage}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>

                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className={styles.memphisWrap}>
                    <div className={styles.memphics}>
                        <Image src="/images/cta1.png" width={18} height={18} alt="cta1" className={`${styles.memphis1} ${styles.allMemphis}`} />
                        <Image src="/images/download.svg" width={500} height={400} alt="download" className={`${styles.memphis2} ${styles.allMemphis}`} />
                        <Image src="/images/cta2.png" width={18} height={18} alt="cta2" className={`${styles.memphis3} ${styles.allMemphis}`} />
                        <Image src="/images/cta3.png" width={10} height={10} alt="cta3" className={`${styles.memphis4} ${styles.allMemphis}`} />
                        <Image src="/images/cta6.svg" width={55} height={41} alt="cta6" className={`${styles.memphis5} ${styles.allMemphis}`} />
                        <Image src="/images/cta5.png" width={53} height={42} alt="cta5" className={`${styles.memphis6} ${styles.allMemphis}`} />
                        <Image src="/images/cta7.svg" width={19} height={16} alt="cta7" className={`${styles.memphis7} ${styles.allMemphis}`} />
                    </div>
                </div>
            </section>
        </>
    );
}
