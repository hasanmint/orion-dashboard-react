import React from 'react';
import Container from './Container';
import Footer from './Footer';
import NavbarTop from './NavbarTop';

const ContentBody = () => {
    return (
        <>
            <NavbarTop></NavbarTop>
            <Container></Container>
            <Footer></Footer>
        </>
    );
};

export default ContentBody;