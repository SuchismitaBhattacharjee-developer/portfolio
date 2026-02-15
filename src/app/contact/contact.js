'use client';

import { Col, Container, Form, Row, Button } from "react-bootstrap";
import styles from "./contact.module.css";
import React from 'react';
import Link from "next/link";
import { BiLogoFacebook, BiLogoLinkedin, BiLogoInstagram } from 'react-icons/bi';

export default function Contact() {

    const contactDetails = [
        {
            id: 1,
            title: "Phone",
            value: "+91 8617264615",
            link: "tel:+918617264615"
        },
        {
            id: 2,
            title: "Email",
            value: "suchismitabhatta1998@gmail.com",
            link: "mailto:suchismitabhatta1998@gmail.com"
        }
    ];

    const socialLinks = [
        { id: 1, icon: <BiLogoFacebook />, link: "https://www.facebook.com/suchismitabhatta.207" },
        { id: 2, icon: <BiLogoLinkedin />, link: "https://www.linkedin.com/in/suchismita-bhattacharjee-2628512a7" },
        { id: 3, icon: <BiLogoInstagram />, link: "https://www.instagram.com/_suchi_here" }
    ];

    return (
        <section className={styles.contact} id="contact">
            <Container>
                <div className={styles.contactBox}>
                    <Row className={styles.row}>
                        <Col lg={6} >
                            <Form className={styles.fromPart}>
                                <Row>
                                    {[
                                        { id: 1, label: "Name", name: "name", type: "text" },
                                        { id: 2, label: "Email", name: "email", type: "email" },
                                        { id: 3, label: "Subject", name: "subject", type: "text" },
                                        { id: 4, label: "Message", name: "message", type: "textarea" }
                                    ].map((field) => (
                                        <Col key={field.id} lg={field.id <= 2 ? 6 : 12} >
                                            <div className={styles.eachformPart}>
                                                <label htmlFor={`${field.name}-field`} className={styles.eachForm}>
                                                    {field.label} <span>*</span>
                                                </label>
                                                {field.type === "textarea" ? (
                                                    <textarea
                                                        className={`${styles.formControl} ${styles.textareaControl}`}
                                                        id={field.name}
                                                        name={field.name}
                                                        required
                                                    />
                                                ) : (
                                                    <input
                                                        type={field.type}
                                                        className={styles.formControl}
                                                        id={field.name}
                                                        name={field.name}
                                                        required
                                                    />
                                                )}
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                                <Button type="submit" className={`${styles.download} ${styles.animatedBtn}`}>
                                    Send Message
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </Button>
                            </Form>
                        </Col>

                        {/* Contact Info Part */}
                        <Col lg={6} md={6} sm={12}>
                            <div className="title-wrapper">
                                <span className="title">contact me</span>
                                <span className="title-line"></span>
                            </div>
                            <h2 className={`heading ${styles.heading}`}>
                                Get in touch
                            </h2>
                            <div className={styles.contacthead}>
                                <h3>Suchismita Bhattacharjee</h3>
                                <p>UI/UX Designer &amp; Frontend Developer</p>
                                <div className={styles.contactInfo}>
                                    {contactDetails.map((contact) => (
                                        <div key={contact.id} className={styles.singleContact}>
                                            <h3>{contact.title}</h3>
                                            <Link href={contact.link} className={styles.singleLink}>
                                                {contact.value}
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                                <ul className={styles.socialLinks}>
                                    {socialLinks.map((social) => (
                                        <li key={social.id}>
                                            <Link href={social.link} className={styles.eachLink}>
                                                {social.icon}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}
