import React, { useState } from 'react';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Portfolio from '../Pages/Portfolio';
import Nav from './Nav';
import Footer from './Footer';

export default function PageContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div id="pagecontainer">
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    );
}
