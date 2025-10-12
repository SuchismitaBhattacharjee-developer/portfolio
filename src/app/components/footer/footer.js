import React from 'react';
import styles from './footer.module.css';
import Container from 'react-bootstrap/Container';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className={styles.main_footer}>
        <Container>
          <div className={styles.copyright_text}>
            <p className="subheading">
              Copyright © {currentYear}{" "}
              <Link href="#" className={styles.link}>
             Suchi's Creation
              </Link>.
              design by Suchi
            </p>
          </div>
        </Container>
      </footer>
    </>
  );
}
