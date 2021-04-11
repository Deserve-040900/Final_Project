import React, { useState } from 'react';

const TopBanner = () => {
    const [an_hien_hinh, setAnHienHinh] = useState(true);

    const handleClick = (e) => {
        console.log('đã click vào ReadMore Xbox Component');
        console.log(e);

        setAnHienHinh(false);
    }

    return (
        // banner
        <div className="banner-text">
            <div className="callbacks_container">
                <ul className="rslides" id="slider3">

                    <li className="banner banner1">
                        <div className="container">
                            <h3 className="agile_btxt">
                                <span>𝓑</span>𝓸𝓸𝓴
                                <span>𝓢</span>𝓽𝓸𝓻𝓮
                            </h3>
                            <h4 className="w3_bbot">kho tàng kiến thức...</h4>
                            <div className="slider-info mt-sm-5">
                                <h4 className="bn_right">
                                    <span>𝓢</span>𝓪'𝓬𝓱
                                </h4>
                                <div className="bnr_clip position-relative">
                                    <h4>siêu sale
                                        <span className="px-2">40% </span>
                                    </h4>
                                    <div className="d-inline-flex flex-column banner-pos position-absolute text-center">
                                        <div className="bg-flex-item">
                                            <span>O</span>
                                        </div>
                                        <div className="bg-flex-item">
                                            <span>F</span>
                                        </div>
                                        <div className="bg-flex-item">
                                            <span>F
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-uppercase py-2">Tuần lễ sách</p>
                                    <a className="btn btn-primary mt-3 text-capitalize" href="shop.html" role="button">Mua sắm ngay</a>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="banner banner2">
                        <div className="container">
                            <h3 className="agile_btxt">
                                <span>𝓑</span>𝓸𝓸𝓴
                                <span>𝓢</span>𝓽𝓸𝓻𝓮
                            </h3>
                            <h4 className="w3_bbot">kho tàng kiến thức...</h4>
                            <div className="slider-info mt-sm-5">
                                <h4 className="bn_right">
                                    <span>𝓣</span>𝓻𝓾𝔂ệ𝓷
                                </h4>
                                <div className="bnr_clip position-relative">
                                    <h4 className="alo">phát hành hơn
                                        <span className="px-2">25.000</span>
                                        đầu sách mới
                                    </h4>
                                    
                                    <p className="text-uppercase py-2">Tuần lễ sách</p>
                                    <a className="btn btn-primary mt-3 text-capitalize" href="shop.html" role="button">Mua sắm ngay</a>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="banner banner3">
                        <div className="container">
                            <h3 className="agile_btxt">
                                <span><img src="images/logobanner-removebg-preview.png" alt="" /></span>𝓸𝓸𝓴
                                <span>𝓢</span>𝓽𝓸𝓻𝓮
                            </h3>
                            <h4 className="w3_bbot1">kho tàng kiến thức...</h4>
                        </div>
                    </li>                  
                </ul>
            </div>
            {/* <button className="hvr-bounce-to-top" onClick={handleClick}>Read More</button>
            {
                (an_hien_hinh)?
                <div className="col-md-5 x-box-right">
                    <img src="images/pexels-photo-3585048 (2).jpeg" className="img-responsive" alt="" />
                </div>
                :
                <></>
            }
            <div className="clearfix"></div> */}
        </div>
    );
}

export default TopBanner;