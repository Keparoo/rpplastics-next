import { Container } from '@mui/system';
import React from 'react';
import About from '../src/About';
import Footer from '../src/Footer';
import Hero from '../src/Hero';
import Navbar from '../src/Navbar';
import Products from '../src/Products';
import Contact from '../src/Contact';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <React.Fragment>
      <header>
        <Navbar />
      </header>

      <main>
        <Container>
          <Hero />
          <About />
          <Products />
          <Contact />
        </Container>
      </main>

      <Container component="footer">
        <Footer />
      </Container>
    </React.Fragment>
  );
}
