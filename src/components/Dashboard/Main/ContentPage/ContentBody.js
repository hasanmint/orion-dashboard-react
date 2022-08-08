import React from 'react';
import Container from './Container';
import Footer from './Footer';
import NavbarTop from './NavbarTop';

const ContentBody = () => {
    return (
        <>
            <div class="content">
                <NavbarTop></NavbarTop>
                <Container></Container>
                <Footer></Footer>
            </div>
        </>
    );
};

export default ContentBody;