import React from 'react';
import ExamplePagination from '../TestMaterialUI/ExamplePagination';

const Shop = () => {
    return (
        // Shop
        <div className="innerf-pages section">
            <div className="fh-container mx-auto">
                <div className="row my-lg-5 mb-5">
                    {/* <!-- grid left --> */}
                    <div className="side-bar col-lg-3">
                        {/* <!--preference --> */}
                        <div className="left-side">
                            <h3 className="shopf-sear-headits-sear-head">
                                Danh mục sản phẩm</h3>
                            <ul>
                                <li>
                                    <input type="checkbox" className="checked" name="cat1" id="cat1" />
                                    <p className="cat1">Sách Tiếng Việt</p>
                                </li>
                                <li>
                                    <input type="checkbox" className="checked" name="cat2" id="cat2" />
                                    <p className="cat2">Văn phòng phẩm</p>
                                </li>
                                <li>
                                    <input type="checkbox" className="checked" name="cat3" id="cat3" />
                                    <p className="cat3">Quà lưu niệm</p>
                                </li>
                                <li>
                                    <input type="checkbox" className="checked" name="cat4" id="cat4" />
                                    <p className="cat4">English Ebook</p>
                                </li>

                            </ul>
                        </div>
                        {/* <!-- // preference --> */}
                        <div className="search-hotel">
                            <h3 className="shopf-sear-headits-sear-head">
                                Tiêu điểm thương hiệu
                            </h3>
                            <form action="#" method="post">
                                <input type="search" placeholder="Tìm sách, tác giả, NXB,...." required="" />
                                <input type="submit" value="Tìm kiếm" />
                            </form>
                        </div>
                        {/* <!-- price range --> */}
                        <div className="range">
                            <h3 className="shopf-sear-headits-sear-head">
                                Mức giá
                            </h3>
                            <ul className="dropdown-menu6">
                                <li>
                                    <div id="slider-range"></div>
                                    <input type="text" id="amount" style="border: 0;" />
                                </li>
                            </ul>
                        </div>

                        {/* <!--preference --> */}
                        <div className="left-side">
                            <h3 className="shopf-sear-headits-sear-head">
                                <span>Công ty</span> phát hành</h3>
                            <ul>
                                <li>
                                    <input type="checkbox" className="checked" name="arr1" id="arr1" />
                                    <p className="arr1">ALPHABOOK</p>
                                </li>
                                <li>
                                    <input type="checkbox" className="checked" name="arr2" id="arr2" />
                                    <p className="arr2">NHÃ NAM</p>
                                </li>
                                <li>
                                    <input type="checkbox" className="checked" name="arr3" id="arr3" />
                                    <p className="arr3">MCBooks</p>
                                </li>
                                <li>
                                    <input type="checkbox" className="checked" name="arr3" id="arr3" />
                                    <p className="arr3">NXB Trẻ</p>
                                </li>
                                <li>
                                    <input type="checkbox" className="checked" name="arr3" id="arr3" />
                                    <p className="arr3">NXB Kim Đồng</p>
                                </li>
                                <li>
                                    <input type="checkbox" className="checked" name="arr3" id="arr3" />
                                    <p className="arr3">Minh Long</p>
                                </li>
                            </ul>
                        </div>

                        {/* <!-- discounts --> */}
                        <div className="left-side">
                            <h3 className="shopf-sear-headits-sear-head">Tác giả</h3>
                            <ul>
                                <li>
                                    <input type="checkbox" className="checked" name="size1" id="size1" />
                                    <p className="size1">Nhiều tác giả</p>
                                </li>
                                <li>
                                    <input type="checkbox" className="checked" name="size2" id="size2" />
                                    <p className="size2">The Windy</p>
                                </li>
                                <li>
                                    <input type="checkbox" className="checked" name="size3" id="size3" />
                                    <p className="size3">Kim Khánh</p>
                                </li>
                                <li>
                                    <input type="checkbox" className="checked" name="size4" id="size4" />
                                    <p className="size4">Nhóm tác giả</p>
                                </li>
                                <li>
                                    <input type="checkbox" className="checked" name="size5" id="size5" />
                                    <p className="size5">Nguyễn Nhật Ánh</p>
                                </li>
                                <li>
                                    <input type="checkbox" className="checked" name="size6" id="size6" />
                                    <p className="size6">Fujiko F Fujio</p>
                                </li>
                                <li>
                                    <input type="checkbox" className="checked" name="size7" id="size7" />
                                    <p className="size7">Phan Minh Đạo</p>
                                </li>
                            </ul>
                        </div>

                        {/* <!-- Binding --> */}
                        <div className="left-side">
                            <h3 className="shopf-sear-headits-sear-head">Màu sắc</h3>
                            <div className="d-flex">
                                <ul>
                                    <li>
                                        <input type="checkbox" className="checked" name="color1" id="color1" />
                                        <p className="color1">Đen</p>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="checked" name="color2" id="color2" />
                                        <p className="color2">Xanh</p>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="checked" name="color3" id="color3" />
                                        <p className="color3">Đỏ</p>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="checked" name="color4" id="color4" />
                                        <p className="color4">Vàng</p>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="checked" name="color5" id="color5" />
                                        <p className="color5">Trắng</p>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <input type="checkbox" className="checked" name="color6" id="color6" />
                                        <p className="color6">Xanh lá</p>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="checked" name="color7" id="color7" />
                                        <p className="color7">Nhiều màu</p>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="checked" name="color8" id="color8" />
                                        <p className="color8">Tím</p>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="checked" name="color9" id="color9" />
                                        <p className="color9">Vàng ánh kim</p>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="checked" name="color10" id="color10" />
                                        <p className="color10">Cam</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* <!-- discounts --> */}
                        <div className="left-side">
                            <h3 className="shopf-sear-headits-sear-head">Giảm giá</h3>
                            <ul>
                                <li>
                                    <input type="checkbox" className="checked" name="dis1" id="dis1" />
                                    <p className="dis1">5% - 20%</p>
                                </li>
                                <li>
                                    <input type="checkbox" className="checked" name="dis2" id="dis2" />
                                    <p className="dis2">20% - 40%</p>
                                </li>
                                <li>
                                    <input type="checkbox" className="dis3" name="dis3" id="dis3" />
                                    <p className="dis3">40% - 60%</p>
                                </li>
                                <li>
                                    <input type="checkbox" className="checked" name="dis4" id="dis4" />
                                    <p className="dis4">60% or more</p>
                                </li>
                            </ul>
                        </div>

                        {/* <!-- reviews --> */}
                        <div className="customer-rev left-side">
                            <h3 className="shopf-sear-headits-sear-head">Đánh giá</h3>
                            <ul>
                                <li>
                                    <a href="#1">
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <span>Từ 5 sao</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#2">
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star-o" aria-hidden="true"></i>
                                        <span>Từ 4 sao</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#3">
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star-half-o" aria-hidden="true"></i>
                                        <i className="fa fa-star-o" aria-hidden="true"></i>
                                        <span>Từ 3.5 sao</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#4">
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star-o" aria-hidden="true"></i>
                                        <i className="fa fa-star-o" aria-hidden="true"></i>
                                        <span>Từ 3.0 sao</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#5">
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star-half-o" aria-hidden="true"></i>
                                        <i className="fa fa-star-o" aria-hidden="true"></i>
                                        <i className="fa fa-star-o" aria-hidden="true"></i>
                                        <span>Từ 2.5 sao</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* <!-- grid right --> */}
                    <div className="col-lg-9 mt-lg-0 mt-5 right-product-grid">

                        <div>
                            <h3 id="chudeskm">Tất cả sản phẩm</h3>
                            <hr/>
                            <p className="ketqua">HIỂN THỊ: <span className="ketqua2">10k+ kết quả</span></p>
                        </div>

                        {/* <!-- card group  0--> */}
                        <div className="card-group">
                            {/* <!-- card --> */}
                            <div className="col-lg-3 col-sm-6 p-0">
                                <div className="card product-men p-3">
                                    <div className="men-thumb-item">
                                        <img src="images/fs80.jpg" alt="img" className="card-img-top" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="xemsach.html" className="link-product-add-cart">Chi tiết</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- card body --> */}
                                    <div className="card-body  py-3 px-2">
                                        <h5 className="card-title text-capitalize">Tâm lí học tội phạm</h5>
                                        <div className="card-text d-flex justify-content-between">
                                            <p className="text-dark font-weight-bold">$28.00</p>
                                            <p className="line-through">$35.99</p>
                                        </div>
                                    </div>
                                    {/* <!-- card footer --> */}
                                    <div className="card-footer d-flex justify-content-end">
                                        <form action="#" method="post">
                                            <input type="hidden" name="cmd" value="_cart" />
                                            <input type="hidden" name="add" value="1" />
                                            <input type="hidden" name="hub_item" value="Tâm lí học tội phạm" />
                                            <input type="hidden" name="amount" value="28.00" />
                                            <button type="submit" className="hub-cart phub-cart btn">
                                                <i className="fa fa-cart-plus" aria-hidden="true">Mua ngay</i>
                                            </button>
                                            {/* <a href="giohang.html" data-toggle="modal" data-target="#myModal1"></a> */}
                                        </form>
                                    </div>
                                <div>
                                        
                            </div>
                        </div>
                            </div>

                            {/* <!-- card --> */}
                            <div className="col-lg-3 col-sm-6 p-0">
                                <div className="card product-men p-3">
                                    <div className="men-thumb-item">
                                        <img src="images/fs81.jpg" alt="img" className="card-img-top" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="xemsach.html" className="link-product-add-cart">Chi tiết</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- card body --> */}
                                    <div className="card-body  py-3 px-2">
                                        <h5 className="card-title text-capitalize">Miki, cô bé nhí nhảnh</h5>
                                        <div className="card-text d-flex justify-content-between">
                                            <p className="text-dark font-weight-bold">$24.99</p>
                                            <p className="line-through">$29.99</p>
                                        </div>
                                    </div>
                                    {/* <!-- card footer --> */}
                                    <div className="card-footer d-flex justify-content-end">
                                        <form action="#" method="post">
                                            <input type="hidden" name="cmd" value="_cart" />
                                            <input type="hidden" name="add" value="1" />
                                            <input type="hidden" name="hub_item" value="Miki, cô bé nhí nhảnh" />
                                            <input type="hidden" name="amount" value="24.99" />
                                            <button type="submit" className="hub-cart phub-cart btn">
                                                <i className="fa fa-cart-plus" aria-hidden="true">Mua ngay</i>
                                            </button>
                                            {/* <a href="#" data-toggle="modal" data-target="#myModal1"></a> */}
                                        </form>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- card --> */}
                            <div className="col-lg-3 col-sm-6 p-0">
                                <div className="card product-men p-3">
                                    <div className="men-thumb-item">
                                        <img src="images/fs82.png" alt="img" className="card-img-top" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="xemsach.html" className="link-product-add-cart">Chi tiết</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- card body --> */}
                                    <div className="card-body  py-3 px-2">
                                        <h5 className="card-title text-capitalize">Giải mã siêu trí nhớ</h5>
                                        <div className="card-text d-flex justify-content-between">
                                            <p className="text-dark font-weight-bold">$20.99</p>
                                            <p className="line-through">$26.99</p>
                                        </div>
                                    </div>
                                    {/* <!-- card footer --> */}
                                    <div className="card-footer d-flex justify-content-end">
                                        <form action="#" method="post">
                                            <input type="hidden" name="cmd" value="_cart" />
                                            <input type="hidden" name="add" value="1" />
                                            <input type="hidden" name="hub_item" value="Giải mã siêu trí nhớ" />
                                            <input type="hidden" name="amount" value="20.99" />
                                            <button type="submit" className="hub-cart phub-cart btn">
                                                <i className="fa fa-cart-plus" aria-hidden="true">Mua ngay</i>
                                            </button>
                                            {/* <a href="#" data-toggle="modal" data-target="#myModal1"></a> */}
                                        </form>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- card --> */}
                            <div className="col-lg-3 col-sm-6 p-0">
                                <div className="card product-men p-3">
                                    <div className="men-thumb-item">
                                        <img src="images/fs83.jpg" alt="img" className="card-img-top" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="xemsach.html" className="link-product-add-cart">Chi tiết</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- card body --> */}
                                    <div className="card-body  py-3 px-2">
                                        <h5 className="card-title text-capitalize">Càng kỉ luật, càng tự do</h5>
                                        <div className="card-text d-flex justify-content-between">
                                            <p className="text-dark font-weight-bold">$14.99</p>
                                            <p className="line-through">$19.99</p>
                                        </div>
                                    </div>
                                    {/* <!-- card footer --> */}
                                    <div className="card-footer d-flex justify-content-end">
                                        <form action="#" method="post">
                                            <input type="hidden" name="cmd" value="_cart" />
                                            <input type="hidden" name="add" value="1" />
                                            <input type="hidden" name="hub_item" value="Càng kỉ luật, càng tự do" />
                                            <input type="hidden" name="amount" value="14.99" />
                                            <button type="submit" className="hub-cart phub-cart btn">
                                                <i className="fa fa-cart-plus" aria-hidden="true">Mua ngay</i>
                                            </button>
                                            {/* <a href="#" data-toggle="modal" data-target="#myModal1"></a> */}
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="cachgrp"></div>

                        {/* <!-- card group  0.5--> */}
                        <div className="card-group">
                            {/* <!-- card --> */}
                            <div className="col-lg-3 col-sm-6 p-0">
                                <div className="card product-men p-3">
                                    <div className="men-thumb-item">
                                        <img src="images/fs84.jpg" alt="img" className="card-img-top" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="xemsach.html" className="link-product-add-cart">Chi tiết</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- card body --> */}
                                    <div className="card-body  py-3 px-2">
                                        <h5 className="card-title text-capitalize">Để không có tiền vẫn tạo ra tiền</h5>
                                        <div className="card-text d-flex justify-content-between">
                                            <p className="text-dark font-weight-bold">$28.00</p>
                                            <p className="line-through">$35.99</p>
                                        </div>
                                    </div>
                                    {/* <!-- card footer --> */}
                                    <div className="card-footer d-flex justify-content-end">
                                        <form action="#" method="post">
                                            <input type="hidden" name="cmd" value="_cart" />
                                            <input type="hidden" name="add" value="1" />
                                            <input type="hidden" name="hub_item" value="Tạo ra tiền" />
                                            <input type="hidden" name="amount" value="28.00" />
                                            <button type="submit" className="hub-cart phub-cart btn">
                                                <i className="fa fa-cart-plus" aria-hidden="true">Mua ngay</i>
                                            </button>
                                            {/* <a href="#" data-toggle="modal" data-target="#myModal1"></a> */}
                                        </form>
                                    </div>
                                <div>                                        
                            </div>
                        </div>
                            </div>

                            {/* <!-- card --> */}
                            <div className="col-lg-3 col-sm-6 p-0">
                                <div className="card product-men p-3">
                                    <div className="men-thumb-item">
                                        <img src="images/fs85.jpg" alt="img" className="card-img-top" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="xemsach.html" className="link-product-add-cart">Chi tiết</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- card body --> */}
                                    <div className="card-body  py-3 px-2">
                                        <h5 className="card-title text-capitalize">MYM-tôi của tương lai</h5>
                                        <div className="card-text d-flex justify-content-between">
                                            <p className="text-dark font-weight-bold">$24.99</p>
                                            <p className="line-through">$29.99</p>
                                        </div>
                                    </div>
                                    {/* <!-- card footer --> */}
                                    <div className="card-footer d-flex justify-content-end">
                                        <form action="#" method="post">
                                            <input type="hidden" name="cmd" value="_cart" />
                                            <input type="hidden" name="add" value="1" />
                                            <input type="hidden" name="hub_item" value="MYM-tôi của tương lai" />
                                            <input type="hidden" name="amount" value="24.99" />
                                            <button type="submit" className="hub-cart phub-cart btn">
                                                <i className="fa fa-cart-plus" aria-hidden="true">Mua ngay</i>
                                            </button>
                                            {/* <a href="#" data-toggle="modal" data-target="#myModal1"></a> */}
                                        </form>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- card --> */}
                            <div className="col-lg-3 col-sm-6 p-0">
                                <div className="card product-men p-3">
                                    <div className="men-thumb-item">
                                        <img src="images/fs86.jpg" alt="img" className="card-img-top" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="xemsach.html" className="link-product-add-cart">Chi tiết</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- card body --> */}
                                    <div className="card-body  py-3 px-2">
                                        <h5 className="card-title text-capitalize">Nhà đầu tư thông minh</h5>
                                        <div className="card-text d-flex justify-content-between">
                                            <p className="text-dark font-weight-bold">$20.99</p>
                                            <p className="line-through">$26.99</p>
                                        </div>
                                    </div>
                                    {/* <!-- card footer --> */}
                                    <div className="card-footer d-flex justify-content-end">
                                        <form action="#" method="post">
                                            <input type="hidden" name="cmd" value="_cart" />
                                            <input type="hidden" name="add" value="1" />
                                            <input type="hidden" name="hub_item" value="Nhà đầu tư thông minh" />
                                            <input type="hidden" name="amount" value="20.99" />
                                            <button type="submit" className="hub-cart phub-cart btn">
                                                <i className="fa fa-cart-plus" aria-hidden="true">Mua ngay</i>
                                            </button>
                                            {/* <a href="#" data-toggle="modal" data-target="#myModal1"></a> */}
                                        </form>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- card --> */}
                            <div className="col-lg-3 col-sm-6 p-0">
                                <div className="card product-men p-3">
                                    <div className="men-thumb-item">
                                        <img src="images/fs87.png" alt="img" className="card-img-top" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="xemsach.html" className="link-product-add-cart">Chi tiết</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- card body --> */}
                                    <div className="card-body  py-3 px-2">
                                        <h5 className="card-title text-capitalize">Cuộc đời thịnh vượng</h5>
                                        <div className="card-text d-flex justify-content-between">
                                            <p className="text-dark font-weight-bold">$14.99</p>
                                            <p className="line-through">$19.99</p>
                                        </div>
                                    </div>
                                    {/* <!-- card footer --> */}
                                    <div className="card-footer d-flex justify-content-end">
                                        <form action="#" method="post">
                                            <input type="hidden" name="cmd" value="_cart" />
                                            <input type="hidden" name="add" value="1" />
                                            <input type="hidden" name="hub_item" value="Cuộc đời thịnh vượng" />
                                            <input type="hidden" name="amount" value="14.99" />
                                            <button type="submit" className="hub-cart phub-cart btn">
                                                <i className="fa fa-cart-plus" aria-hidden="true">Mua ngay</i>
                                            </button>
                                            {/* <a href="#" data-toggle="modal" data-target="#myModal1"></a> */}
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="cachgrp"></div>
                        
                        {/* <!-- card group  1--> */}
                        <div className="card-group">
                            {/* <!-- card --> */}
                            <div className="col-lg-3 col-sm-6 p-0">
                                <div className="card product-men p-3">
                                    <div className="men-thumb-item">
                                        <img src="images/fs1.jpg" alt="img" className="card-img-top" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="xemsach.html" className="link-product-add-cart">Chi tiết</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- card body --> */}
                                    <div className="card-body  py-3 px-2">
                                        <h5 className="card-title text-capitalize">Đừng để mất bò</h5>
                                        <div className="card-text d-flex justify-content-between">
                                            <p className="text-dark font-weight-bold">$28.00</p>
                                            <p className="line-through">$35.99</p>
                                        </div>
                                    </div>
                                    {/* <!-- card footer --> */}
                                    <div className="card-footer d-flex justify-content-end">
                                        <form action="#" method="post">
                                            <input type="hidden" name="cmd" value="_cart" />
                                            <input type="hidden" name="add" value="1" />
                                            <input type="hidden" name="hub_item" value="Đừng để mất bò" />
                                            <input type="hidden" name="amount" value="28.00" />
                                            <button type="submit" className="hub-cart phub-cart btn">
                                                <i className="fa fa-cart-plus" aria-hidden="true">Mua ngay</i>
                                            </button>
                                            {/* <a href="#" data-toggle="modal" data-target="#myModal1"></a> */}
                                        </form>
                                    </div>
                                <div>
                                        
                            </div>
                        </div>
                            </div>

                            {/* <!-- card --> */}
                            <div className="col-lg-3 col-sm-6 p-0">
                                <div className="card product-men p-3">
                                    <div className="men-thumb-item">
                                        <img src="images/fs2.jpg" alt="img" className="card-img-top" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="xemsach.html" className="link-product-add-cart">Chi tiết</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- card body --> */}
                                    <div className="card-body  py-3 px-2">
                                        <h5 className="card-title text-capitalize">Không quạu nha</h5>
                                        <div className="card-text d-flex justify-content-between">
                                            <p className="text-dark font-weight-bold">$24.99</p>
                                            <p className="line-through">$29.99</p>
                                        </div>
                                    </div>
                                    {/* <!-- card footer --> */}
                                    <div className="card-footer d-flex justify-content-end">
                                        <form action="#" method="post">
                                            <input type="hidden" name="cmd" value="_cart" />
                                            <input type="hidden" name="add" value="1" />
                                            <input type="hidden" name="hub_item" value="Không quạu nha" />
                                            <input type="hidden" name="amount" value="24.99" />
                                            <button type="submit" className="hub-cart phub-cart btn">
                                                <i className="fa fa-cart-plus" aria-hidden="true">Mua ngay</i>
                                            </button>
                                            {/* <a href="#" data-toggle="modal" data-target="#myModal1"></a> */}
                                        </form>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- card --> */}
                            <div className="col-lg-3 col-sm-6 p-0">
                                <div className="card product-men p-3">
                                    <div className="men-thumb-item">
                                        <img src="images/fs3.jpg" alt="img" className="card-img-top" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="xemsach.html" className="link-product-add-cart">Chi tiết</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- card body --> */}
                                    <div className="card-body  py-3 px-2">
                                        <h5 className="card-title text-capitalize">Ngày đòi nợ</h5>
                                        <div className="card-text d-flex justify-content-between">
                                            <p className="text-dark font-weight-bold">$20.99</p>
                                            <p className="line-through">$26.99</p>
                                        </div>
                                    </div>
                                    {/* <!-- card footer --> */}
                                    <div className="card-footer d-flex justify-content-end">
                                        <form action="#" method="post">
                                            <input type="hidden" name="cmd" value="_cart" />
                                            <input type="hidden" name="add" value="1" />
                                            <input type="hidden" name="hub_item" value="Ngày đòi nợ" />
                                            <input type="hidden" name="amount" value="20.99" />
                                            <button type="submit" className="hub-cart phub-cart btn">
                                                <i className="fa fa-cart-plus" aria-hidden="true">Mua ngay</i>
                                            </button>
                                            {/* <a href="#" data-toggle="modal" data-target="#myModal1"></a> */}
                                        </form>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- card --> */}
                            <div className="col-lg-3 col-sm-6 p-0">
                                <div className="card product-men p-3">
                                    <div className="men-thumb-item">
                                        <img src="images/fs4.jpg" alt="img" className="card-img-top" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="xemsach.html" className="link-product-add-cart">Chi tiết</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- card body --> */}
                                    <div className="card-body  py-3 px-2">
                                        <h5 className="card-title text-capitalize">Đắc nhân tâm</h5>
                                        <div className="card-text d-flex justify-content-between">
                                            <p className="text-dark font-weight-bold">$14.99</p>
                                            <p className="line-through">$19.99</p>
                                        </div>
                                    </div>
                                    {/* <!-- card footer --> */}
                                    <div className="card-footer d-flex justify-content-end">
                                        <form action="#" method="post">
                                            <input type="hidden" name="cmd" value="_cart" />
                                            <input type="hidden" name="add" value="1" />
                                            <input type="hidden" name="hub_item" value="Đắc nhân tâm(Khổ lớn)" />
                                            <input type="hidden" name="amount" value="14.99" />
                                            <button type="submit" className="hub-cart phub-cart btn">
                                                <i className="fa fa-cart-plus" aria-hidden="true">Mua ngay</i>
                                            </button>
                                            {/* <a href="#" data-toggle="modal" data-target="#myModal1"></a> */}
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- card group 2 --> */}
                        <div className="card-group my-5">
                            {/* <!-- row2 -->
                            <!-- card --> */}
                            <div className="col-lg-3 col-sm-6 p-0">
                                <div className="card product-men p-3 out_w3">
                                    <div className="men-thumb-item position-relative">
                                        <img src="images/fs5.jpg" alt="img" className="card-img-top" />
                                        <span className="px-2 position-absolute">out of stock</span>
                                    </div>
                                    {/* <!-- card body --> */}
                                    <div className="card-body  py-3 px-2">
                                        <h5 className="card-title text-capitalize">Đọc vị bất kì ai</h5>
                                        <div className="card-text d-flex justify-content-between">
                                            <p className="text-dark font-weight-bold">$27.00</p>
                                            <p className="line-through">$35.00</p>
                                        </div>
                                    </div>
                                    {/* <!-- card footer --> */}
                                    <div className="card-footer d-flex justify-content-end">
                                        <button type="submit" className="hub-cart phub-cart btn">
                                            <i className="fa fa-cart-plus" aria-hidden="true">Mua ngay</i>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- card --> */}
                            <div className="col-lg-3 col-sm-6 p-0">
                                <div className="card product-men p-3">
                                    <div className="men-thumb-item">
                                        <img src="images/fs6.jpg" alt="img" className="card-img-top" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="xemsach.html" className="link-product-add-cart">Chi tiết</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- card body --> */}
                                    <div className="card-body  py-3 px-2">
                                        <h5 className="card-title text-capitalize">Những tù nhân của địa lí</h5>
                                        <div className="card-text d-flex justify-content-between">
                                            <p className="text-dark font-weight-bold">$24.00</p>
                                            <p className="line-through">$30.00</p>
                                        </div>
                                    </div>
                                    {/* <!-- card footer --> */}
                                    <div className="card-footer d-flex justify-content-end">
                                        <form action="#" method="post">
                                            <input type="hidden" name="cmd" value="_cart" />
                                            <input type="hidden" name="add" value="1" />
                                            <input type="hidden" name="hub_item" value="Những tù nhân của địa lí" />
                                            <input type="hidden" name="amount" value="24.00" />
                                            <button type="submit" className="hub-cart phub-cart btn">
                                                <i className="fa fa-cart-plus" aria-hidden="true">Mua ngay</i>
                                            </button>
                                            {/* <a href="#" data-toggle="modal" data-target="#myModal1"></a> */}
                                        </form>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- card --> */}
                            <div className="col-lg-3 col-sm-6 p-0">
                                <div className="card product-men p-3">
                                    <div className="men-thumb-item">
                                        <img src="images/fs7.png" alt="img" className="card-img-top" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="xemsach.html" className="link-product-add-cart">Chi tiết</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- card body --> */}
                                    <div className="card-body  py-3 px-2">
                                        <h5 className="card-title text-capitalize">Ai rồi cũng qua để không hối hận</h5>
                                        <div className="card-text d-flex justify-content-between">
                                            <p className="text-dark font-weight-bold">$13.00</p>
                                            <p className="line-through">$20.99</p>
                                        </div>
                                    </div>
                                    {/* <!-- card footer --> */}
                                    <div className="card-footer d-flex justify-content-end">
                                        <form action="#" method="post">
                                            <input type="hidden" name="cmd" value="_cart" />
                                            <input type="hidden" name="add" value="1" />
                                            <input type="hidden" name="hub_item" value="Ai rồi cũng qua để không hối hận" />
                                            <input type="hidden" name="amount" value="13.00" />
                                            <button type="submit" className="hub-cart phub-cart btn">
                                                <i className="fa fa-cart-plus" aria-hidden="true">Mua ngay</i>
                                            </button>
                                            {/* <a href="#" data-toggle="modal" data-target="#myModal1"></a> */}
                                        </form>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- card --> */}
                            <div className="col-lg-3 col-sm-6 p-0">
                                <div className="card product-men p-3">
                                    <div className="men-thumb-item">
                                        <img src="images/fs8.jpg" alt="img" className="card-img-top" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="xemsach.html" className="link-product-add-cart">Chi tiết</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- card body --> */}
                                    <div className="card-body  py-3 px-2">
                                        <h5 className="card-title text-capitalize">Đại gia Gastby (Tặng poster)</h5>
                                        <div className="card-text d-flex justify-content-between">
                                            <p className="text-dark font-weight-bold">$19.00</p>
                                            <p className="line-through">$24.99</p>
                                        </div>
                                    </div>
                                    {/* <!-- card footer --> */}
                                    <div className="card-footer d-flex justify-content-end">
                                        <form action="#" method="post">
                                            <input type="hidden" name="cmd" value="_cart" />
                                            <input type="hidden" name="add" value="1" />
                                            <input type="hidden" name="hub_item" value="Đại gia Gastby (Tặng poster)" />
                                            <input type="hidden" name="amount" value="19.00" />
                                            <button type="submit" className="hub-cart phub-cart btn">
                                                <i className="fa fa-cart-plus" aria-hidden="true">Mua ngay</i>
                                            </button>
                                            {/* <a href="#" data-toggle="modal" data-target="#myModal1"></a> */}
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- card group  3--> */}
                        <div className="card-group my-5">
                            {/* <!-- row1-->
                            <!-- card --> */}
                            <div className="col-lg-3 col-sm-6 p-0">
                                <div className="card product-men p-3">
                                    <div className="men-thumb-item">
                                        <img src="images/fs19.jpg" alt="img" className="card-img-top" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="xemsach.html" className="link-product-add-cart">Chi tiết</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- card body --> */}
                                    <div className="card-body  py-3 px-2">
                                        <h5 className="card-title text-capitalize">Đàn bà sao hỏa, đàn ông sao kim...</h5>
                                        <div className="card-text d-flex justify-content-between">
                                            <p className="text-dark font-weight-bold">$19.99</p>
                                            <p className="line-through">$24.99</p>
                                        </div>
                                    </div>
                                    {/* <!-- card footer --> */}
                                    <div className="card-footer d-flex justify-content-end">
                                        <form action="#" method="post">
                                            <input type="hidden" name="cmd" value="_cart" />
                                            <input type="hidden" name="add" value="1" />
                                            <input type="hidden" name="hub_item" value="Đàn bà sao hỏa, đàn ông sao kim..." />
                                            <input type="hidden" name="amount" value="19.99" />
                                            <button type="submit" className="hub-cart phub-cart btn">
                                                <i className="fa fa-cart-plus" aria-hidden="true">Mua ngay</i>
                                            </button>
                                            {/* <a href="#" data-toggle="modal" data-target="#myModal1"></a> */}
                                        </form>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- card --> */}
                            <div className="col-lg-3 col-sm-6 p-0">
                                <div className="card product-men p-3">
                                    <div className="men-thumb-item">
                                        <img src="images/fs70.jpg" alt="img" className="card-img-top" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="xemsach.html" className="link-product-add-cart">Chi tiết</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- card body --> */}
                                    <div className="card-body  py-3 px-2">
                                        <h5 className="card-title text-capitalize">Combo sách trẻ em</h5>
                                        <div className="card-text d-flex justify-content-between">
                                            <p className="text-dark font-weight-bold">$24.99</p>
                                            <p className="line-through">$32.99</p>
                                        </div>
                                    </div>
                                    {/* <!-- card footer --> */}
                                    <div className="card-footer d-flex justify-content-end">
                                        <form action="#" method="post">
                                            <input type="hidden" name="cmd" value="_cart" />
                                            <input type="hidden" name="add" value="1" />
                                            <input type="hidden" name="hub_item" value="Combo sách trẻ em" />
                                            <input type="hidden" name="amount" value="24.99" />
                                            <button type="submit" className="hub-cart phub-cart btn">
                                                <i className="fa fa-cart-plus" aria-hidden="true">Mua ngay</i>
                                            </button>
                                            {/* <a href="#" data-toggle="modal" data-target="#myModal1"></a> */}
                                        </form>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- card --> */}
                            <div className="col-lg-3 col-sm-6 p-0">
                                <div className="card product-men p-3">
                                    <div className="men-thumb-item">
                                        <img src="images/fs71.png" alt="img" className="card-img-top" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="xemsach.html" className="link-product-add-cart">Chi tiết</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- card body --> */}
                                    <div className="card-body  py-3 px-2">
                                        <h5 className="card-title text-capitalize">Siêu cò(Tặng kèm bookmark)</h5>
                                        <div className="card-text d-flex justify-content-between">
                                            <p className="text-dark font-weight-bold">$14.99</p>
                                            <p className="line-through">$18.99</p>
                                        </div>
                                    </div>
                                    {/* <!-- card footer --> */}
                                    <div className="card-footer d-flex justify-content-end">
                                        <form action="#" method="post">
                                            <input type="hidden" name="cmd" value="_cart" />
                                            <input type="hidden" name="add" value="1" />
                                            <input type="hidden" name="hub_item" value="Siêu cò(2019)(Tặng kèm bookmark)" />
                                            <input type="hidden" name="amount" value="14.99" />
                                            <button type="submit" className="hub-cart phub-cart btn">
                                                <i className="fa fa-cart-plus" aria-hidden="true">Mua ngay</i>
                                            </button>
                                            {/* <a href="#" data-toggle="modal" data-target="#myModal1"></a> */}
                                        </form>
                                    </div>
                                </div>
                            </div>
                            
                            {/* <!-- card --> */}
                            <div className="col-lg-3 col-sm-6 p-0">
                                <div className="card product-men p-3">
                                    <div className="men-thumb-item">
                                        <img src="images/fs72.jpg" alt="img" className="card-img-top" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="xemsach.html" className="link-product-add-cart">Chi tiết</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- card body --> */}
                                    <div className="card-body  py-3 px-2">
                                        <h5 className="card-title text-capitalize">Muôn kiếp nhân sinh</h5>
                                        <div className="card-text d-flex justify-content-between">
                                            <p className="text-dark font-weight-bold">$16.99</p>
                                            <p className="line-through">$24.99</p>
                                        </div>
                                    </div>
                                    {/* <!-- card footer --> */}
                                    <div className="card-footer d-flex justify-content-end">
                                        <form action="#" method="post">
                                            <input type="hidden" name="cmd" value="_cart" />
                                            <input type="hidden" name="add" value="1" />
                                            <input type="hidden" name="hub_item" value="Muôn kiếp nhân sinh" />
                                            <input type="hidden" name="amount" value="16.99" />
                                            <button type="submit" className="hub-cart phub-cart btn">
                                                <i className="fa fa-cart-plus" aria-hidden="true">Mua ngay</i>
                                            </button>
                                            {/* <a href="#" data-toggle="modal" data-target="#myModal1"></a> */}
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- card group  4--> */}
                        <div className="card-group">
                            {/* <!-- row1-->
                            <!-- card --> */}
                            <div className="col-lg-3 col-sm-6 p-0">
                                <div className="card product-men p-3">
                                    <div className="men-thumb-item">
                                        <img src="images/fs17.jpg" alt="img" className="card-img-top" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="xemsach.html" className="link-product-add-cart">Chi tiết</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- card body --> */}
                                    <div className="card-body  py-3 px-2">
                                        <h5 className="card-title text-capitalize">Cảm xúc và bão giông</h5>
                                        <div className="card-text d-flex justify-content-between">
                                            <p className="text-dark font-weight-bold">$16.99</p>
                                            <p className="line-through">$20.99</p>
                                        </div>
                                    </div>
                                    {/* <!-- card footer --> */}
                                    <div className="card-footer d-flex justify-content-end">
                                        <form action="#" method="post">
                                            <input type="hidden" name="cmd" value="_cart" />
                                            <input type="hidden" name="add" value="1" />
                                            <input type="hidden" name="hub_item" value="Cảm xúc và bão giông" />
                                            <input type="hidden" name="amount" value="16.99" />
                                            <button type="submit" className="hub-cart phub-cart btn">
                                                <i className="fa fa-cart-plus" aria-hidden="true">Mua ngay</i>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            
                            {/* <!-- card --> */}
                            <div className="col-lg-3 col-sm-6 p-0">
                                <div className="card product-men p-3">
                                    <div className="men-thumb-item">
                                        <img src="images/fs73.jpg" alt="img" className="card-img-top" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="xemsach.html" className="link-product-add-cart">Chi tiết</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- card body --> */}
                                    <div className="card-body  py-3 px-2">
                                        <h5 className="card-title text-capitalize">Ngôi nhà nghìn hành lang</h5>
                                        <div className="card-text d-flex justify-content-between">
                                            <p className="text-dark font-weight-bold">$20.99</p>
                                            <p className="line-through">$31.99</p>
                                        </div>
                                    </div>
                                    {/* <!-- card footer --> */}
                                    <div className="card-footer d-flex justify-content-end">
                                        <form action="#" method="post">
                                            <input type="hidden" name="cmd" value="_cart" />
                                            <input type="hidden" name="add" value="1" />
                                            <input type="hidden" name="hub_item" value="Ngôi nhà nghìn hành lang" />
                                            <input type="hidden" name="amount" value="20.99" />
                                            <button type="submit" className="hub-cart phub-cart btn">
                                                <i className="fa fa-cart-plus" aria-hidden="true">Mua ngay</i>
                                            </button>
                                            {/* <a href="#" data-toggle="modal" data-target="#myModal1"></a> */}
                                        </form>
                                    </div>
                                </div>
                            </div>
                            
                            {/* <!-- card --> */}
                            <div className="col-lg-3 col-sm-6 p-0">
                                <div className="card product-men p-3">
                                    <div className="men-thumb-item">
                                        <img src="images/fs74.jpg" alt="img" className="card-img-top" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="xemsach.html" className="link-product-add-cart">Chi tiết</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- card body --> */}
                                    <div className="card-body  py-3 px-2">
                                        <h5 className="card-title text-capitalize">Trăm năm cô đơn(tái bản 2021)</h5>
                                        <div className="card-text d-flex justify-content-between">
                                            <p className="text-dark font-weight-bold">$12.99</p>
                                            <p className="line-through">$18.99</p>
                                        </div>
                                    </div>
                                    {/* <!-- card footer --> */}
                                    <div className="card-footer d-flex justify-content-end">
                                        <form action="#" method="post">
                                            <input type="hidden" name="cmd" value="_cart" />
                                            <input type="hidden" name="add" value="1" />
                                            <input type="hidden" name="hub_item" value="Trăm năm cô đơn" />
                                            <input type="hidden" name="amount" value="12.99" />
                                            <button type="submit" className="hub-cart phub-cart btn">
                                                <i className="fa fa-cart-plus" aria-hidden="true">Mua ngay</i>
                                            </button>
                                            {/* <a href="#" data-toggle="modal" data-target="#myModal1"></a> */}
                                        </form>
                                    </div>
                                </div>
                            </div>
                            
                            {/* <!-- card --> */}
                            <div className="col-lg-3 col-sm-6 p-0">
                                <div className="card product-men p-3">
                                    <div className="men-thumb-item">
                                        <img src="images/fs75.jpg" alt="img" className="card-img-top" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="xemsach.html" className="link-product-add-cart">Chi tiết</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- card body --> */}
                                    <div className="card-body  py-3 px-2">
                                        <h5 className="card-title text-capitalize">Slim Women's Beige Jeans</h5>
                                        <div className="card-text d-flex justify-content-between">
                                            <p className="text-dark font-weight-bold">$14.99</p>
                                            <p className="line-through">$18.99</p>
                                        </div>
                                    </div>
                                    {/* <!-- card footer --> */}
                                    <div className="card-footer d-flex justify-content-end">
                                        <form action="#" method="post">
                                            <input type="hidden" name="cmd" value="_cart" />
                                            <input type="hidden" name="add" value="1" />
                                            <input type="hidden" name="hub_item" value="Slim Women's Beige Jeans" />
                                            <input type="hidden" name="amount" value="14.99" />
                                            <button type="submit" className="hub-cart phub-cart btn">
                                                <i className="fa fa-cart-plus" aria-hidden="true">Mua ngay</i>
                                            </button>
                                            {/* <a href="#" data-toggle="modal" data-target="#myModal1"></a> */}
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="cachgrp"></div>

                        {/* <!-- card group  5--> */}
                        <div className="card-group">
                            {/* <!-- card --> */}
                            <div className="col-lg-3 col-sm-6 p-0">
                                <div className="card product-men p-3">
                                    <div className="men-thumb-item">
                                        <img src="images/fs1.jpg" alt="img" className="card-img-top" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="xemsach.html" className="link-product-add-cart">Chi tiết</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- card body --> */}
                                    <div className="card-body  py-3 px-2">
                                        <h5 className="card-title text-capitalize">Đừng để mất bò</h5>
                                        <div className="card-text d-flex justify-content-between">
                                            <p className="text-dark font-weight-bold">$28.00</p>
                                            <p className="line-through">$35.99</p>
                                        </div>
                                    </div>
                                    {/* <!-- card footer --> */}
                                    <div className="card-footer d-flex justify-content-end">
                                        <form action="#" method="post">
                                            <input type="hidden" name="cmd" value="_cart" />
                                            <input type="hidden" name="add" value="1" />
                                            <input type="hidden" name="hub_item" value="Đừng để mất bò" />
                                            <input type="hidden" name="amount" value="28.00" />
                                            <button type="submit" className="hub-cart phub-cart btn">
                                                <i className="fa fa-cart-plus" aria-hidden="true">Mua ngay</i>
                                            </button>
                                        </form>
                                    </div>
                                <div>
                                        
                            </div>
                        </div>
                            </div>

                            {/* <!-- card --> */}
                            <div className="col-lg-3 col-sm-6 p-0">
                                <div className="card product-men p-3">
                                    <div className="men-thumb-item">
                                        <img src="images/fs2.jpg" alt="img" className="card-img-top" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="xemsach.html" className="link-product-add-cart">Chi tiết</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- card body --> */}
                                    <div className="card-body  py-3 px-2">
                                        <h5 className="card-title text-capitalize">Không quạu nha</h5>
                                        <div className="card-text d-flex justify-content-between">
                                            <p className="text-dark font-weight-bold">$24.99</p>
                                            <p className="line-through">$29.99</p>
                                        </div>
                                    </div>
                                    {/* <!-- card footer --> */}
                                    <div className="card-footer d-flex justify-content-end">
                                        <form action="#" method="post">
                                            <input type="hidden" name="cmd" value="_cart" />
                                            <input type="hidden" name="add" value="1" />
                                            <input type="hidden" name="hub_item" value="Không quạu nha" />
                                            <input type="hidden" name="amount" value="24.99" />
                                            <button type="submit" className="hub-cart phub-cart btn">
                                                <i className="fa fa-cart-plus" aria-hidden="true">Mua ngay</i>
                                            </button>
                                            {/* <a href="#" data-toggle="modal" data-target="#myModal1"></a> */}
                                        </form>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- card --> */}
                            <div className="col-lg-3 col-sm-6 p-0">
                                <div className="card product-men p-3">
                                    <div className="men-thumb-item">
                                        <img src="images/fs3.jpg" alt="img" className="card-img-top" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="xemsach.html" className="link-product-add-cart">Chi tiết</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- card body --> */}
                                    <div className="card-body  py-3 px-2">
                                        <h5 className="card-title text-capitalize">Ngày đòi nợ</h5>
                                        <div className="card-text d-flex justify-content-between">
                                            <p className="text-dark font-weight-bold">$20.99</p>
                                            <p className="line-through">$26.99</p>
                                        </div>
                                    </div>
                                    {/* <!-- card footer --> */}
                                    <div className="card-footer d-flex justify-content-end">
                                        <form action="#" method="post">
                                            <input type="hidden" name="cmd" value="_cart" />
                                            <input type="hidden" name="add" value="1" />
                                            <input type="hidden" name="hub_item" value="Ngày đòi nợ" />
                                            <input type="hidden" name="amount" value="20.99" />
                                            <button type="submit" className="hub-cart phub-cart btn">
                                                <i className="fa fa-cart-plus" aria-hidden="true">Mua ngay</i>
                                            </button>
                                            {/* <a href="#" data-toggle="modal" data-target="#myModal1"></a> */}
                                        </form>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- card --> */}
                            <div className="col-lg-3 col-sm-6 p-0">
                                <div className="card product-men p-3">
                                    <div className="men-thumb-item">
                                        <img src="images/fs4.jpg" alt="img" className="card-img-top" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="xemsach.html" className="link-product-add-cart">Chi tiết</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- card body --> */}
                                    <div className="card-body  py-3 px-2">
                                        <h5 className="card-title text-capitalize">Đắc nhân tâm</h5>
                                        <div className="card-text d-flex justify-content-between">
                                            <p className="text-dark font-weight-bold">$14.99</p>
                                            <p className="line-through">$19.99</p>
                                        </div>
                                    </div>
                                    {/* <!-- card footer --> */}
                                    <div className="card-footer d-flex justify-content-end">
                                        <form action="#" method="post">
                                            <input type="hidden" name="cmd" value="_cart" />
                                            <input type="hidden" name="add" value="1" />
                                            <input type="hidden" name="hub_item" value="Đắc nhân tâm(Khổ lớn)" />
                                            <input type="hidden" name="amount" value="14.99" />
                                            <button type="submit" className="hub-cart phub-cart btn">
                                                <i className="fa fa-cart-plus" aria-hidden="true">Mua ngay</i>
                                            </button>
                                            {/* <a href="#" data-toggle="modal" data-target="#myModal1"></a> */}
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- card group 6 --> */}
                        <div className="card-group my-5">
                            {/* <!-- row2 -->
                            <!-- card --> */}
                            <div className="col-lg-3 col-sm-6 p-0">
                                <div className="card product-men p-3 out_w3">
                                    <div className="men-thumb-item position-relative">
                                        <img src="images/fs5.jpg" alt="img" className="card-img-top" />
                                        <span className="px-2 position-absolute">out of stock</span>
                                    </div>
                                    {/* <!-- card body --> */}
                                    <div className="card-body  py-3 px-2">
                                        <h5 className="card-title text-capitalize">Đọc vị bất kì ai</h5>
                                        <div className="card-text d-flex justify-content-between">
                                            <p className="text-dark font-weight-bold">$27.00</p>
                                            <p className="line-through">$35.00</p>
                                        </div>
                                    </div>
                                    {/* <!-- card footer --> */}
                                    <div className="card-footer d-flex justify-content-end">
                                        <button type="submit" className="hub-cart phub-cart btn">
                                            <i className="fa fa-cart-plus" aria-hidden="true">Mua ngay</i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                            {/* <!-- card --> */}
                            <div className="col-lg-3 col-sm-6 p-0">
                                <div className="card product-men p-3">
                                    <div className="men-thumb-item">
                                        <img src="images/fs6.jpg" alt="img" className="card-img-top" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="xemsach.html" className="link-product-add-cart">Chi tiết</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- card body --> */}
                                    <div className="card-body  py-3 px-2">
                                        <h5 className="card-title text-capitalize">Những tù nhân của địa lí</h5>
                                        <div className="card-text d-flex justify-content-between">
                                            <p className="text-dark font-weight-bold">$24.00</p>
                                            <p className="line-through">$30.00</p>
                                        </div>
                                    </div>
                                    {/* <!-- card footer --> */}
                                    <div className="card-footer d-flex justify-content-end">
                                        <form action="#" method="post">
                                            <input type="hidden" name="cmd" value="_cart" />
                                            <input type="hidden" name="add" value="1" />
                                            <input type="hidden" name="hub_item" value="Những tù nhân của địa lí" />
                                            <input type="hidden" name="amount" value="24.00" />
                                            <button type="submit" className="hub-cart phub-cart btn">
                                                <i className="fa fa-cart-plus" aria-hidden="true">Mua ngay</i>
                                            </button>
                                            {/* <a href="#" data-toggle="modal" data-target="#myModal1"></a> */}
                                        </form>
                                    </div>
                                </div>
                            </div>
                            
                            {/* <!-- card --> */}
                            <div className="col-lg-3 col-sm-6 p-0">
                                <div className="card product-men p-3">
                                    <div className="men-thumb-item">
                                        <img src="images/fs7.png" alt="img" className="card-img-top" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="xemsach.html" className="link-product-add-cart">Chi tiết</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- card body --> */}
                                    <div className="card-body  py-3 px-2">
                                        <h5 className="card-title text-capitalize">Ai rồi cũng qua để không hối hận</h5>
                                        <div className="card-text d-flex justify-content-between">
                                            <p className="text-dark font-weight-bold">$13.00</p>
                                            <p className="line-through">$20.99</p>
                                        </div>
                                    </div>
                                    {/* <!-- card footer --> */}
                                    <div className="card-footer d-flex justify-content-end">
                                        <form action="#" method="post">
                                            <input type="hidden" name="cmd" value="_cart" />
                                            <input type="hidden" name="add" value="1" />
                                            <input type="hidden" name="hub_item" value="Ai rồi cũng qua để không hối hận" />
                                            <input type="hidden" name="amount" value="13.00" />
                                            <button type="submit" className="hub-cart phub-cart btn">
                                                <i className="fa fa-cart-plus" aria-hidden="true">Mua ngay</i>
                                            </button>
                                            {/* <a href="#" data-toggle="modal" data-target="#myModal1"></a> */}
                                        </form>
                                    </div>
                                </div>
                            </div>
                            
                            {/* <!-- card --> */}
                            <div className="col-lg-3 col-sm-6 p-0">
                                <div className="card product-men p-3">
                                    <div className="men-thumb-item">
                                        <img src="images/fs8.jpg" alt="img" className="card-img-top" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="xemsach.html" className="link-product-add-cart">Chi tiết</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- card body --> */}
                                    <div className="card-body  py-3 px-2">
                                        <h5 className="card-title text-capitalize">Đại gia Gastby (Tặng poster)</h5>
                                        <div className="card-text d-flex justify-content-between">
                                            <p className="text-dark font-weight-bold">$19.00</p>
                                            <p className="line-through">$24.99</p>
                                        </div>
                                    </div>
                                    {/* <!-- card footer --> */}
                                    <div className="card-footer d-flex justify-content-end">
                                        <form action="#" method="post">
                                            <input type="hidden" name="cmd" value="_cart" />
                                            <input type="hidden" name="add" value="1" />
                                            <input type="hidden" name="hub_item" value="Đại gia Gastby (Tặng poster)" />
                                            <input type="hidden" name="amount" value="19.00" />
                                            <button type="submit" className="hub-cart phub-cart btn">
                                                <i className="fa fa-cart-plus" aria-hidden="true">Mua ngay</i>
                                            </button>
                                            {/* <a href="#" data-toggle="modal" data-target="#myModal1"></a> */}
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <ExamplePagination />

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shop;