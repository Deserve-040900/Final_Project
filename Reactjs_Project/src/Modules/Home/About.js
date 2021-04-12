import React from 'react';

const About = () => {
    return (
        // about
        <section className="tabs_pro py-md-5 pt-sm-3 pb-5" id="about">
            <h5 className="head_agileinfo text-center text-capitalize pb-5">
                <span>Giới</span> thiệu
            </h5>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-6">
                        <h3 id="chudegt"><span classNameName="agile_bts">๖ۣۜ𝓑.</span>𝓢𝓽𝓸𝓻𝓮 sẽ giúp bạn dễ dàng thỏa mãn ước mơ “giáo sư” theo cách ít tốn công sức nhất</h3>
                        <h4>Không cần mang theo, khỏi lo cất giữ</h4>
                        <p>Đã là thánh lười thì chắc hẳn bạn sẽ cực kỳ “ái ngại” khi thân mình còn chăm chưa xong nói gì đến việc mang vác bảo quản một “em” sách giấy.</p>
                        <h4>“Sống ảo” cho bằng chị bằng em</h4>
                        <p>Muốn khoe với cả thế giới rằng bạn đang đọc sách và sách rất hay, ngay lập tức bạn có thể tạo dáng chăm chú bên chiếc smartphone.</p>

                        <div className="principles-grids">
                            <div className="abt-btm ">
                                <div className="col-md-12 col-sm-12 agileits elite-services1 w3layouts bottom-gds" data-aos="fade-up">
                                    <div className="bott-img agileits w3layouts">
                                        <div className="icon-holder agileits w3layouts">
                                            <span className="fa fa-search agileits w3layouts service-icon" aria-hidden="true"></span>
                                        </div>
                                        <h4 className="mission agileits w3layouts">Tham quan nhiều hơn</h4>
                                        <div className="description agileits w3layouts">
                                            <a href="/about.html">Chi Tiết</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-6">
                        <img src="images/about.jpeg" className="img-responsive" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;