'use client';

import { useEffect, useRef, useState } from 'react';
import imagesLoaded from 'imagesloaded';
import styles from './portfolio.module.css';
import { BiPlus } from 'react-icons/bi';
import { Row } from 'react-bootstrap';

const portfolioItems = [
    {
        id: 1,
        category: 'development design',
        title: 'Gsoe',
        img: '../images/gsoe.webp',
        task: 'UI/UX, Frontend',
        link: 'https://gsoedurgapuja.com/',
    },
    {
        id: 2,
        category: 'development',
        title: 'Globnet',
        img: '../images/globnet.webp',
        task: 'Frontend',
        link: 'https://globnetllc.com/',
    },
    {
        id: 3,
        category: 'development design',
        title: 'Abha',
        img: '../images/abha.webp',
        task: 'UI/UX, Frontend',
        link: 'https://aabhamagazine.in/',
    },
    {
        id: 4,
        category: 'development',
        title: 'Roha',
        img: '../images/roha.webp',
        task: 'Frontend',
        link: 'https://roha-precision.org/',
    },
    {
        id: 5,
        category: 'development',
        title: 'Gmit',
        img: '../images/gmit.webp',
        task: 'Frontend',
        link: 'https://gmitkolkata.org/',
    },
    {
        id: 6,
        category: 'development',
        title: 'Amardeep Global',
        img: '../images/amardeep.webp',
        task: 'Frontend',
        link: 'https://www.amardeepglobal.ae/',
    },
    // {
    //     id: 7,
    //     category: 'development',
    //     title: 'Eduspire Global',
    //     img: '../images/eduspire-global.webp',
    //     task: 'Frontend',
    //     link: 'https://eduspireglobal.com/',
    // },
    {
        id: 7,
        category: 'development',
        title: 'Digital Data Consultancy',
        img: '../images/digitaldata.webp',
        task: 'Frontend',
        link: 'https://www.digitaldataconsultancy.com/',
    },
    {
        id: 8,
        category: 'development',
        title: 'Transcon IT Solutions',
        img: '../images/transcon.webp',
        task: 'Frontend',
        link: 'https://tispl.tech/',
    },
    {
        id: 9,
        category: 'development',
        title: 'Safco B2B',
        img: '../images/safco.webp',
        task: 'Frontend',
        link: 'https://safcob2b.com/',
    },
];


export default function PortfolioSection() {
    const gridRef = useRef(null);
    const [isotope, setIsotope] = useState(null);
    const [activeFilter, setActiveFilter] = useState('*');

    useEffect(() => {
        let iso;
        import('isotope-layout').then((Isotope) => {
            if (gridRef.current) {
                iso = new Isotope.default(gridRef.current, {
                    itemSelector: '.grid-item',
                    layoutMode: 'fitRows',
                    transitionDuration: '0.5s',
                });

                imagesLoaded(gridRef.current, () => {
                    iso.layout();
                });

                setIsotope(iso);
            }
        });

        return () => {
            if (iso) iso.destroy();
        };
    }, []);

    const handleFilter = (filter) => {
        setActiveFilter(filter);
        if (isotope) {
            isotope.arrange({ filter: filter === '*' ? '*' : `.${filter.toLowerCase()}` });
        }
    };

    return (
        <section className={styles.portfolioSection} id="portfolio">
            <div className="container">
                <div className="section-title">
                    <div className="mainHeading">
                        <div className={`title-wrapper ${styles.titlewrapper}`}>
                            <span className="title">Portfolio</span>
                            <span className="title-line"></span>
                        </div>
                        <h2 className={`heading ${styles.heading}`}>Showcasing My Best Work</h2>
                        <p className={`subheading ${styles.subheading}`}>
                            A collection of projects demonstrating my skills in building responsive,
                            interactive, and visually appealing web applications.
                        </p>
                    </div>
                </div>
                <div className={`${styles.buttonGroup} ${styles.filterButtonGroup}`}>
                    {['*', 'Development', 'Design'].map((cat) => (
                        <button
                            key={cat}
                            className={activeFilter === cat ? styles.active : ''}
                            onClick={() => handleFilter(cat)}
                        >
                            {cat === '*' ? 'All' : cat}
                        </button>
                    ))}
                </div>
                <Row className={`${styles.row} grid`} ref={gridRef}>
                    {portfolioItems.map((item) => (
                        <div
                            key={item.id}
                            className={`col-lg-4 col-md-6 col-12 grid-item ${item.category}`}
                        >
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.boxLink}
                            >
                                <div className={styles.box}>
                                    <img src={item.img} alt={item.title} />
                                    <div className={styles.iconOverlay}>
                                        <BiPlus size={50} />
                                    </div>
                                    <div className={styles.boxContent}>
                                        <h3 className={styles.title}>{item.title}</h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </Row>
            </div>
        </section>
    );
}
