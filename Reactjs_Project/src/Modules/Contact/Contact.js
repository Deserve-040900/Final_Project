import React, { Component } from 'react';
import FormContact from './FormContact';

const Contact = () => {
    return (
        // contact
        <section className="wthree-row pt-3 pb-sm-5 w3-contact">
            <div className="container py-sm-5 pb-5">
                <h5 className="head_agileinfo text-center text-capitalize1 pb-5">
                    <span>C</span>ontact Us</h5>
                <div className="row contact-form pt-lg-5">
                    <div className="col-lg-6 wthree-form-left">
                        {/* contact form grid */}
                        <div className="contact-top1">
                            <h4 className="mb-4 text-capitalize1">Hãy để lại thông tin của bạn</h4>
                            <FormContact />
                        </div>
                    </div>

                    {/* contact details */}
                    <div className="col-lg-6 contact-bottom pl-5 mt-lg-0 mt-5">
                        {/* contact details grid1 */}
                        <div className="address">
                            <h5 className="pb-3 text-capitalize1">Address</h5>
                            <address>
                                <p className="c-txt">Trụ Sở Chính: Tầng 5 Và Tầng 8, Tòa Nhà Khang Thông, Số 67, Đường Nguyễn Thị Minh Khai, Phường Bến Thành, Quận 1, Thành Phố Hồ Chí Minh.</p>
                                
                            </address>
                        </div>
                        {/* contact details grid2 */}
                        <div className="address my-5">
                            <h5 className="pb-3 text-capitalize1">phone</h5>
                            <p>
                                +0123456789</p>
                            <p>
                                +9876543210</p>
                            <p>
                                +0908246357</p>
                        </div>
                        {/* contact details grid3 */}
                        <div className="address mt-md-0 mt-3">
                            <h5 className="pb-3 text-capitalize1">Email</h5>
                            <p>
                                <a href="mailto:info@example.com">contact@greenacademy.edu.vn</a>
                            </p>
                            <p>
                                <a href="mailto:info@example.com">lienhehotro@greenacademy.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* contact map grid */}
            <div className="map contact-right pb-5">
                <div className="pt-lg-5 bg-pricemain text-center">
                    <h3 className="stat-title text-capitalize1 pb-5">TỔNG HÀNH DINH</h3>
                    <span className="w3-line"></span>
                </div>
                    <iframe title="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40957.668160214154!2d106.6630393368335!3d10.778074514475897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3ca0da684d%3A0x32c352459c6757c8!2sGit%20Academy%20Vietnam!5e0!3m2!1sen!2s!4v1578488623771!5m2!1sen!2s" width="600" height="450" frameborder="0" allowfullscreen="" ></iframe>
            </div>
        </section>
    );
}

export default Contact;