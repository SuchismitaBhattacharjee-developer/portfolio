'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from "react-bootstrap";
import styles from './header.module.css'
import Link from "next/link";
import { useEffect, useState } from 'react';

const Header = () => {
    const [activeSection, setActiveSection] = useState('');
    const [isFixed, setIsFixed] = useState(false);

    const handleScroll = () => {
        const sections = document.querySelectorAll('section');
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 60 && window.scrollY < sectionTop + sectionHeight - 60) {
                currentSection = section.getAttribute('id');
            }
        });
        setActiveSection(currentSection);

        if (window.scrollY > 100) {
            setIsFixed(true);
        } else {
            setIsFixed(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { name: 'Education', link: '#education', id: 'education' },
        { name: 'About', link: '#about', id: 'about' },
        { name: 'Skills', link: '#skills', id: 'skills' },
        { name: 'Experience', link: '#experience', id: 'experience' },
        { name: 'Portfolio', link: '#portfolio', id: 'portfolio' },
        { name: 'Contact', link: '#contact', id: 'contact' },
    ];
    return (
        <>
                <div className={`${styles.topArea} ${isFixed ? styles.fixed : ''}`}>
                    <Container>
                        <Row className="align-items-center">
                            <Col lg="auto" md={6} xs={6}>
                                <div className={styles.logo}>
                                    <Link href="#" className={styles.logoname}>
                                       Suchi's <br />Creation
                                    </Link>
                                </div>
                            </Col>
                            <Col lg md={6} xs={6}>
                                <div className={styles.menu}>
                                    <ul className={styles.nav}>
                                        {menuItems.map((item, index) => (
                                            <li
                                                key={index}
                                                className={`${styles.smoothMenu} ${activeSection === item.id ? styles.active : ''}`}
                                            >
                                                <Link href={item.link}>{item.name}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
        </>
    );
}
export default Header;