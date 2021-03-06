import React from 'react';

const Footer = () => {
    return (
        // footer
        <footer>
            <div className="footerv2-w3ls">
                <div className="footer-w3lagile-innerr">
                    {/* footer-top */}
                    <div className="container-fluid">
                        <div className="row  footer-v2grids w3-agileits">
                            
                            <div className="container">
                                <ul className="bottom-links-agile">
                                    <li>
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li>
                                        <a href="about.html">About Us</a>
                                    </li>
                                    <li>
                                        <a href="shop.html">Shop</a>
                                    </li>
                                    <li>
                                        <a href="contact.html">Contact</a>
                                    </li>
        
                                </ul>
                                <h3 className="text-center follow">Follow Us</h3>
                                <ul className="social-iconsv2 agileinfo">
                                    <li>
                                        <a href="https://www.facebook.com/">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
        
                                    <li>
                                        <a href="https://www.youtube.com/">
                                            <i className="fab fa-youtube"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.google.com.vn/">
                                            <i className="fab fa-google-plus-g"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
                
                {/* footer-bottom */}
                <div className="container-fluid py-2 footer-copy_w3ls">
                    <div className="d-lg-flex justify-content-between">
                        <div className="mt-2 sub-some align-self-lg-center">
                            <h5>Payment Method</h5>
                            <ul className="mt-4">
                                <li className="list-inline-item">
                                    <img src="images/pay2.png" alt="" />
                                </li>
                                <li className="list-inline-item">
                                    <img src="images/pay5.png" alt="" />
                                </li>
                                <li className="list-inline-item">
                                    <img src="images/pay3.png" alt="" />
                                </li>
                                <li className="list-inline-item">
                                    <img src="images/pay7.png" alt="" />
                                </li>
                                <li className="list-inline-item">
                                    <img src="images/pay8.png" alt="" />
                                </li>
                                <li className="list-inline-item ">
                                    <img src="images/pay9.png" alt="" />
                                </li>
                            </ul>
                        </div>
                        <div className="cpy-right align-self-center">
                            <h2 className="agile_btxt">
                                <a href="index.html">
                                    <span>???????????</span>????????????
                                    <span>????</span>????????????????
                                </a>
                            </h2>
                            <p>?? 2021 Book Store. All rights reserved | Design by
                                <a href="#team3" className="text-secondary" alt=""> Team3</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;