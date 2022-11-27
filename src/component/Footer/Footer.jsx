import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";

const Footer = () => {
    return (
        <Box>
            <h1 style={{
                color: "orange",
                opacity: "50%",
                fontFamily: 'monospace',
                textAlign: "center",
                marginTop: "-50px"
            }}>
                Purano Bazar: get old products in cheap price
            </h1>
            <Container>
                <Row>
                    <Column>
                        <Heading>About Us</Heading>
                        <FooterLink href="#">Aim</FooterLink>
                        <FooterLink href="#">Vision</FooterLink>
                        <FooterLink href="#">Testimonials</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Top Products</Heading>
                        <FooterLink href="#">mobiles</FooterLink>
                        <FooterLink href="#">Laptops</FooterLink>
                        <FooterLink href="#">Books</FooterLink>
                        <FooterLink href="#">Car</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Contact Us</Heading>
                        <FooterLink href="#">Uttar Pradesh</FooterLink>
                        <FooterLink href="#">Ahemdabad</FooterLink>
                        <FooterLink href="#">Indore</FooterLink>
                        <FooterLink href="#">Mumbai</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>
                        <FooterLink href="#">
                            <i className="fab fa-facebook-f">
                                <span style={{ marginLeft: "10px" }}>
                                    Facebook
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-instagram">
                                <span style={{ marginLeft: "10px" }}>
                                    Instagram
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-twitter">
                                <span style={{ marginLeft: "10px" }}>
                                    Twitter
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-youtube">
                                <span style={{ marginLeft: "10px" }}>
                                    Youtube
                                </span>
                            </i>
                        </FooterLink>
                    </Column>
                </Row>
            </Container>
            <div className="footer">

            </div>
        </Box>
    );
};
export default Footer;
