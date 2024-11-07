import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav style={styles.nav}>
            <h1 style={styles.logo}>Bienvenidos a TutorGo</h1>
            <ul style={styles.navLinks}>
                <li>
                    <Link to="/home" style={styles.link}>Home</Link>
                </li>
                <li>
                    <Link to="/login" style={styles.link}>Login</Link>
                </li>
                <li>
                    <Link to="/register" style={styles.link}>Registro</Link>
                </li>
            </ul>
        </nav>
    );
};

const styles = {
    nav: {
        position: 'fixed', 
        top: 0,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#333',
        padding: '8px 20px',
        zIndex: 1000, 
    } as React.CSSProperties,
    logo: {
        color: '#fff',
        fontSize: '24px',
        fontWeight: 'bold',
    } as React.CSSProperties,
    navLinks: {
        listStyleType: 'none',
        display: 'flex',
        gap: '20px',
    } as React.CSSProperties,
    link: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '18px',
        transition: 'color 0.3s ease, transform 0.3s ease', 
    } as React.CSSProperties,
};

export default Navbar;
