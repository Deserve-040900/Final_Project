import React from 'react';

const ListUpdate = () => {
    return (
        <div className="container" id="list-index">
            <div className="row text-center"></div>
            <div className="hide" id="history-holder"></div>
            <div className="list list-truyen list-new col-xs-12 col-sm-12 col-md-8 col-truyen-main">
                <div className="title-list">
                    <h2><a href="https://truyenfull.vn/danh-sach/truyen-moi/" title="Truyện mới">Truyện mới cập nhật</a></h2><a href="https://truyenfull.vn/danh-sach/truyen-moi/" title="Truyện mới"><span className="glyphicon glyphicon-menu-right"></span></a>
                    <select id="new-select" className="form-control new-select" aria-label="Chọn thể loại">
                        <option value="all">Tất cả</option>
                        <option value="1">Tiên Hiệp</option>
                        <option value="2">Kiếm Hiệp</option>
                        <option value="3">Ngôn Tình</option>
                        <option value="4">Đô Thị</option>
                        <option value="20">Quan Trường</option>
                        <option value="6">Võng Du</option>
                        <option value="5">Khoa Huyễn</option>
                        <option value="39">Hệ Thống</option>
                        <option value="8">Huyền Huyễn</option>
                        <option value="7">Dị Giới</option>
                        <option value="19">Dị Năng</option>
                        <option value="10">Quân Sự</option>
                        <option value="11">Lịch Sử</option>
                        <option value="15">Xuyên Không</option>
                        <option value="38">Xuyên Nhanh</option>
                        <option value="17">Trọng Sinh</option>
                        <option value="18">Trinh Thám</option>
                        <option value="16">Thám Hiểm</option>
                        <option value="9">Linh Dị</option>
                        <option value="12">Sắc</option>
                        <option value="30">Ngược</option>
                        <option value="36">Sủng</option>
                        <option value="21">Cung Đấu</option>
                        <option value="22">Nữ Cường</option>
                        <option value="24">Gia Đấu</option>
                        <option value="23">Đông Phương</option>
                        <option value="13">Đam Mỹ</option>
                        <option value="14">Bách Hợp</option>
                        <option value="25">Hài Hước</option>
                        <option value="27">Điền Văn</option>
                        <option value="28">Cổ Đại</option>
                        <option value="29">Mạt Thế</option>
                        <option value="26">Truyện Teen</option>
                        <option value="32">Phương Tây</option>
                        <option value="33">Nữ Phụ</option>
                        <option value="34">Light Novel</option>
                        <option value="35">Việt Nam</option>
                        <option value="37">Đoản Văn</option>
                        <option value="31">Khác</option>
                    </select>
                </div>
                <div className="row" itemscope itemtype="https://schema.org/Book">
                    <div className="col-xs-9 col-sm-6 col-md-5 col-title"><span className="glyphicon glyphicon-chevron-right"></span>
                        <h3 itemprop="name"><a href="https://truyenfull.vn/cam-cung/" title="Cấm Cung" itemprop="url">Cấm Cung</a></h3><span className="label-title label-full"></span>
                    </div>
                    <div className="hidden-xs col-sm-3 col-md-3 col-cat text-888"><a itemprop="genre" href="https://truyenfull.vn/the-loai/dam-my/" title="Đam Mỹ">Đam Mỹ</a>, <a itemprop="genre" href="https://truyenfull.vn/the-loai/co-dai/" title="Cổ Đại">Cổ Đại</a></div>
                    <div className="col-xs-3 col-sm-3 col-md-2 col-chap text-info"><a href="https://truyenfull.vn/cam-cung/chuong-26/" title="Cấm Cung - Chương 26"><span className="chapter-text"><span>Chương </span></span>26</a></div>
                    <div className="hidden-xs hidden-sm col-md-2 col-time text-888">3 phút trước </div>
                </div>
                <div className="row" itemscope itemtype="https://schema.org/Book">
                    <div className="col-xs-9 col-sm-6 col-md-5 col-title"><span className="glyphicon glyphicon-chevron-right"></span>
                        <h3 itemprop="name"><a href="https://truyenfull.vn/tuyet-doi-xam-chiem/" title="Tuyệt Đối Xâm Chiếm" itemprop="url">Tuyệt Đối Xâm Chiếm</a></h3><span className="label-title label-full"></span>
                    </div>
                    <div className="hidden-xs col-sm-3 col-md-3 col-cat text-888"><a itemprop="genre" href="https://truyenfull.vn/the-loai/do-thi/" title="Đô Thị">Đô Thị</a>, <a itemprop="genre" href="https://truyenfull.vn/the-loai/sac/" title="Sắc">Sắc</a></div>
                    <div className="col-xs-3 col-sm-3 col-md-2 col-chap text-info"><a href="https://truyenfull.vn/tuyet-doi-xam-chiem/chuong-11/" title="Tuyệt Đối Xâm Chiếm - Chương 11"><span className="chapter-text"><span>Chương </span></span>11</a></div>
                    <div className="hidden-xs hidden-sm col-md-2 col-time text-888">5 phút trước </div>
                </div>
                <div className="row" itemscope itemtype="https://schema.org/Book">
                    <div className="col-xs-9 col-sm-6 col-md-5 col-title"><span className="glyphicon glyphicon-chevron-right"></span>
                        <h3 itemprop="name"><a href="https://truyenfull.vn/tung-duc/" title="Túng Dục" itemprop="url">Túng Dục</a></h3><span className="label-title label-full"></span>
                    </div>
                    <div className="hidden-xs col-sm-3 col-md-3 col-cat text-888"><a itemprop="genre" href="https://truyenfull.vn/the-loai/dam-my/" title="Đam Mỹ">Đam Mỹ</a></div>
                    <div className="col-xs-3 col-sm-3 col-md-2 col-chap text-info"><a href="https://truyenfull.vn/tung-duc/chuong-10/" title="Túng Dục - Chương 10"><span className="chapter-text"><span>Chương </span></span>10</a></div>
                    <div className="hidden-xs hidden-sm col-md-2 col-time text-888">6 phút trước </div>
                </div>
                <div className="row" itemscope itemtype="https://schema.org/Book">
                    <div className="col-xs-9 col-sm-6 col-md-5 col-title"><span className="glyphicon glyphicon-chevron-right"></span>
                        <h3 itemprop="name"><a href="https://truyenfull.vn/quai-ban-cua-toi-thanh-tinh-roi/" title="Quái Bàn Của Tôi Thành Tinh Rồi" itemprop="url">Quái Bàn Của Tôi Thành Tinh Rồi</a></h3><span className="label-title label-new"></span>
                    </div>
                    <div className="hidden-xs col-sm-3 col-md-3 col-cat text-888"><a itemprop="genre" href="https://truyenfull.vn/the-loai/linh-di/" title="Linh Dị">Linh Dị</a>, <a itemprop="genre" href="https://truyenfull.vn/the-loai/dam-my/" title="Đam Mỹ">Đam Mỹ</a></div>
                    <div className="col-xs-3 col-sm-3 col-md-2 col-chap text-info"><a href="https://truyenfull.vn/quai-ban-cua-toi-thanh-tinh-roi/chuong-60/" title="Quái Bàn Của Tôi Thành Tinh Rồi - Chương 60"><span className="chapter-text"><span>Chương </span></span>60</a></div>
                    <div className="hidden-xs hidden-sm col-md-2 col-time text-888">9 phút trước </div>
                </div>
                <div className="row" itemscope itemtype="https://schema.org/Book">
                    <div className="col-xs-9 col-sm-6 col-md-5 col-title"><span className="glyphicon glyphicon-chevron-right"></span>
                        <h3 itemprop="name"><a href="https://truyenfull.vn/tap-canh/" title="Tập Cảnh" itemprop="url">Tập Cảnh</a></h3><span className="label-title label-full"></span>
                    </div>
                    <div className="hidden-xs col-sm-3 col-md-3 col-cat text-888"><a itemprop="genre" href="https://truyenfull.vn/the-loai/dam-my/" title="Đam Mỹ">Đam Mỹ</a></div>
                    <div className="col-xs-3 col-sm-3 col-md-2 col-chap text-info"><a href="https://truyenfull.vn/tap-canh/chuong-23/" title="Tập Cảnh - Chương 23"><span className="chapter-text"><span>Chương </span></span>23</a></div>
                    <div className="hidden-xs hidden-sm col-md-2 col-time text-888">16 phút trước </div>
                </div>
                <div className="row" itemscope itemtype="https://schema.org/Book">
                    <div className="col-xs-9 col-sm-6 col-md-5 col-title"><span className="glyphicon glyphicon-chevron-right"></span>
                        <h3 itemprop="name"><a href="https://truyenfull.vn/toi-cuong-cuu-am-chan-kinh-he-thong/" title="Tối Cường Cửu Âm Chân Kinh Hệ Thống" itemprop="url">Tối Cường Cửu Âm Chân Kinh Hệ Thống</a></h3><span className="label-title label-hot"></span>
                    </div>
                    <div className="hidden-xs col-sm-3 col-md-3 col-cat text-888"><a itemprop="genre" href="https://truyenfull.vn/the-loai/kiem-hiep/" title="Kiếm Hiệp">Kiếm Hiệp</a>, <a itemprop="genre" href="https://truyenfull.vn/the-loai/di-gioi/" title="Dị Giới">Dị Giới</a></div>
                    <div className="col-xs-3 col-sm-3 col-md-2 col-chap text-info"><a href="https://truyenfull.vn/toi-cuong-cuu-am-chan-kinh-he-thong/chuong-284/" title="Tối Cường Cửu Âm Chân Kinh Hệ Thống - Chương 284"><span className="chapter-text"><span>Chương </span></span>284</a></div>
                    <div className="hidden-xs hidden-sm col-md-2 col-time text-888">51 phút trước </div>
                </div>
                <div className="row" itemscope itemtype="https://schema.org/Book">
                    <div className="col-xs-9 col-sm-6 col-md-5 col-title"><span className="glyphicon glyphicon-chevron-right"></span>
                        <h3 itemprop="name"><a href="https://truyenfull.vn/tong-giam-doc-bac-ty-khong-de-choc-572628/" title="Tổng Giám Đốc Bạc Tỷ Không Dễ Chọc" itemprop="url">Tổng Giám Đốc Bạc Tỷ Không Dễ Chọc</a></h3><span className="label-title label-hot"></span>
                    </div>
                    <div className="hidden-xs col-sm-3 col-md-3 col-cat text-888"><a itemprop="genre" href="https://truyenfull.vn/the-loai/ngon-tinh/" title="Ngôn Tình">Ngôn Tình</a>, <a itemprop="genre" href="https://truyenfull.vn/the-loai/do-thi/" title="Đô Thị">Đô Thị</a></div>
                    <div className="col-xs-3 col-sm-3 col-md-2 col-chap text-info"><a href="https://truyenfull.vn/tong-giam-doc-bac-ty-khong-de-choc-572628/chuong-273/" title="Tổng Giám Đốc Bạc Tỷ Không Dễ Chọc - Chương 273"><span className="chapter-text"><span>Chương </span></span>273</a></div>
                    <div className="hidden-xs hidden-sm col-md-2 col-time text-888">52 phút trước </div>
                </div>
                <div className="row" itemscope itemtype="https://schema.org/Book">
                    <div className="col-xs-9 col-sm-6 col-md-5 col-title"><span className="glyphicon glyphicon-chevron-right"></span>
                        <h3 itemprop="name"><a href="https://truyenfull.vn/dau-pha-thuong-khung-chi-co-huyen-trong-sinh/" title="Đấu Phá Thương Khung Chi Cơ Huyền Trọng Sinh" itemprop="url">Đấu Phá Thương Khung Chi Cơ Huyền Trọng Sinh</a></h3>
                    </div>
                    <div className="hidden-xs col-sm-3 col-md-3 col-cat text-888"><a itemprop="genre" href="https://truyenfull.vn/the-loai/huyen-huyen/" title="Huyền Huyễn">Huyền Huyễn</a>, <a itemprop="genre" href="https://truyenfull.vn/the-loai/he-thong/" title="Hệ Thống">Hệ Thống</a></div>
                    <div className="col-xs-3 col-sm-3 col-md-2 col-chap text-info"><a href="https://truyenfull.vn/dau-pha-thuong-khung-chi-co-huyen-trong-sinh/chuong-245/" title="Đấu Phá Thương Khung Chi Cơ Huyền Trọng Sinh - Chương 245"><span className="chapter-text"><span>Chương </span></span>245</a></div>
                    <div className="hidden-xs hidden-sm col-md-2 col-time text-888">52 phút trước </div>
                </div>
                <div className="row" itemscope itemtype="https://schema.org/Book">
                    <div className="col-xs-9 col-sm-6 col-md-5 col-title"><span className="glyphicon glyphicon-chevron-right"></span>
                        <h3 itemprop="name"><a href="https://truyenfull.vn/vo-tan-trung-sinh/" title="Vô Tận Trùng Sinh" itemprop="url">Vô Tận Trùng Sinh</a></h3>
                    </div>
                    <div className="hidden-xs col-sm-3 col-md-3 col-cat text-888"><a itemprop="genre" href="https://truyenfull.vn/the-loai/do-thi/" title="Đô Thị">Đô Thị</a>, <a itemprop="genre" href="https://truyenfull.vn/the-loai/huyen-huyen/" title="Huyền Huyễn">Huyền Huyễn</a></div>
                    <div className="col-xs-3 col-sm-3 col-md-2 col-chap text-info"><a href="https://truyenfull.vn/vo-tan-trung-sinh/chuong-259/" title="Vô Tận Trùng Sinh - Chương 259"><span className="chapter-text"><span>Chương </span></span>259</a></div>
                    <div className="hidden-xs hidden-sm col-md-2 col-time text-888">53 phút trước </div>
                </div>
                <div className="row" itemscope itemtype="https://schema.org/Book">
                    <div className="col-xs-9 col-sm-6 col-md-5 col-title"><span className="glyphicon glyphicon-chevron-right"></span>
                        <h3 itemprop="name"><a href="https://truyenfull.vn/con-duong-tro-thanh-thien-hau/" title="Con Đường Trở Thành Thiên Hậu" itemprop="url">Con Đường Trở Thành Thiên Hậu</a></h3><span className="label-title label-hot"></span>
                    </div>
                    <div className="hidden-xs col-sm-3 col-md-3 col-cat text-888"><a itemprop="genre" href="https://truyenfull.vn/the-loai/ngon-tinh/" title="Ngôn Tình">Ngôn Tình</a>, <a itemprop="genre" href="https://truyenfull.vn/the-loai/do-thi/" title="Đô Thị">Đô Thị</a></div>
                    <div className="col-xs-3 col-sm-3 col-md-2 col-chap text-info"><a href="https://truyenfull.vn/con-duong-tro-thanh-thien-hau/chuong-317/" title="Con Đường Trở Thành Thiên Hậu - Chương 317"><span className="chapter-text"><span>Chương </span></span>317</a></div>
                    <div className="hidden-xs hidden-sm col-md-2 col-time text-888">54 phút trước </div>
                </div>
                <div className="row" itemscope itemtype="https://schema.org/Book">
                    <div className="col-xs-9 col-sm-6 col-md-5 col-title"><span className="glyphicon glyphicon-chevron-right"></span>
                        <h3 itemprop="name"><a href="https://truyenfull.vn/chac-chang-co-ai-cam-thay-tu-tien-kho/" title="Chắc Chẳng Có Ai Cảm Thấy Tu Tiên Khó" itemprop="url">Chắc Chẳng Có Ai Cảm Thấy Tu Tiên Khó</a></h3><span className="label-title label-hot"></span>
                    </div>
                    <div className="hidden-xs col-sm-3 col-md-3 col-cat text-888"><a itemprop="genre" href="https://truyenfull.vn/the-loai/tien-hiep/" title="Tiên Hiệp">Tiên Hiệp</a>, <a itemprop="genre" href="https://truyenfull.vn/the-loai/kiem-hiep/" title="Kiếm Hiệp">Kiếm Hiệp</a></div>
                    <div className="col-xs-3 col-sm-3 col-md-2 col-chap text-info"><a href="https://truyenfull.vn/chac-chang-co-ai-cam-thay-tu-tien-kho/chuong-165/" title="Chắc Chẳng Có Ai Cảm Thấy Tu Tiên Khó - Chương 165"><span className="chapter-text"><span>Chương </span></span>165</a></div>
                    <div className="hidden-xs hidden-sm col-md-2 col-time text-888">57 phút trước </div>
                </div>
                <div className="row" itemscope itemtype="https://schema.org/Book">
                    <div className="col-xs-9 col-sm-6 col-md-5 col-title"><span className="glyphicon glyphicon-chevron-right"></span>
                        <h3 itemprop="name"><a href="https://truyenfull.vn/ta-that-khong-muon-trong-sinh-a/" title="Ta Thật Không Muốn Trọng Sinh A" itemprop="url">Ta Thật Không Muốn Trọng Sinh A</a></h3>
                    </div>
                    <div className="hidden-xs col-sm-3 col-md-3 col-cat text-888"><a itemprop="genre" href="https://truyenfull.vn/the-loai/do-thi/" title="Đô Thị">Đô Thị</a>, <a itemprop="genre" href="https://truyenfull.vn/the-loai/khoa-huyen/" title="Khoa Huyễn">Khoa Huyễn</a></div>
                    <div className="col-xs-3 col-sm-3 col-md-2 col-chap text-info"><a href="https://truyenfull.vn/ta-that-khong-muon-trong-sinh-a/chuong-202/" title="Ta Thật Không Muốn Trọng Sinh A - Chương 202"><span className="chapter-text"><span>Chương </span></span>202</a></div>
                    <div className="hidden-xs hidden-sm col-md-2 col-time text-888">59 phút trước </div>
                </div>
                <div className="row" itemscope itemtype="https://schema.org/Book">
                    <div className="col-xs-9 col-sm-6 col-md-5 col-title"><span className="glyphicon glyphicon-chevron-right"></span>
                        <h3 itemprop="name"><a href="https://truyenfull.vn/ngon-tinh-tong-tai-lang-lo-tinh-yeu-xau/" title="Tổng Tài Lẳng Lơ, Tình Yêu Xấu" itemprop="url">Tổng Tài Lẳng Lơ, Tình Yêu Xấu</a></h3><span className="label-title label-full"></span><span className="label-title label-hot"></span>
                    </div>
                    <div className="hidden-xs col-sm-3 col-md-3 col-cat text-888"><a itemprop="genre" href="https://truyenfull.vn/the-loai/ngon-tinh/" title="Ngôn Tình">Ngôn Tình</a>, <a itemprop="genre" href="https://truyenfull.vn/the-loai/do-thi/" title="Đô Thị">Đô Thị</a></div>
                    <div className="col-xs-3 col-sm-3 col-md-2 col-chap text-info"><a href="https://truyenfull.vn/ngon-tinh-tong-tai-lang-lo-tinh-yeu-xau/chuong-477/" title="Tổng Tài Lẳng Lơ, Tình Yêu Xấu - Chương 477"><span className="chapter-text"><span>Chương </span></span>477</a></div>
                    <div className="hidden-xs hidden-sm col-md-2 col-time text-888">1 giờ trước </div>
                </div>
                <div className="row" itemscope itemtype="https://schema.org/Book">
                    <div className="col-xs-9 col-sm-6 col-md-5 col-title"><span className="glyphicon glyphicon-chevron-right"></span>
                        <h3 itemprop="name"><a href="https://truyenfull.vn/tony-cung-binh-doan-sung-vat/" title="Tony Cùng Binh Đoàn Sủng Vật" itemprop="url">Tony Cùng Binh Đoàn Sủng Vật</a></h3>
                    </div>
                    <div className="hidden-xs col-sm-3 col-md-3 col-cat text-888"><a itemprop="genre" href="https://truyenfull.vn/the-loai/do-thi/" title="Đô Thị">Đô Thị</a>, <a itemprop="genre" href="https://truyenfull.vn/the-loai/he-thong/" title="Hệ Thống">Hệ Thống</a></div>
                    <div className="col-xs-3 col-sm-3 col-md-2 col-chap text-info"><a href="https://truyenfull.vn/tony-cung-binh-doan-sung-vat/chuong-134/" title="Tony Cùng Binh Đoàn Sủng Vật - Chương 134"><span className="chapter-text"><span>Chương </span></span>134</a></div>
                    <div className="hidden-xs hidden-sm col-md-2 col-time text-888">2 giờ trước </div>
                </div>
                <div className="row" itemscope itemtype="https://schema.org/Book">
                    <div className="col-xs-9 col-sm-6 col-md-5 col-title"><span className="glyphicon glyphicon-chevron-right"></span>
                        <h3 itemprop="name"><a href="https://truyenfull.vn/chung-cuc-toan-nang-he-thong/" title="Chung Cực Toàn Năng Hệ Thống" itemprop="url">Chung Cực Toàn Năng Hệ Thống</a></h3>
                    </div>
                    <div className="hidden-xs col-sm-3 col-md-3 col-cat text-888"><a itemprop="genre" href="https://truyenfull.vn/the-loai/tien-hiep/" title="Tiên Hiệp">Tiên Hiệp</a>, <a itemprop="genre" href="https://truyenfull.vn/the-loai/ngon-tinh/" title="Ngôn Tình">Ngôn Tình</a></div>
                    <div className="col-xs-3 col-sm-3 col-md-2 col-chap text-info"><a href="https://truyenfull.vn/chung-cuc-toan-nang-he-thong/chuong-104/" title="Chung Cực Toàn Năng Hệ Thống - Chương 104"><span className="chapter-text"><span>Chương </span></span>104</a></div>
                    <div className="hidden-xs hidden-sm col-md-2 col-time text-888">2 giờ trước </div>
                </div>
                <div className="row" itemscope itemtype="https://schema.org/Book">
                    <div className="col-xs-9 col-sm-6 col-md-5 col-title"><span className="glyphicon glyphicon-chevron-right"></span>
                        <h3 itemprop="name"><a href="https://truyenfull.vn/xuyen-nhanh-ta-la-dam-de/" title="Xuyên Nhanh: Ta Là Dâm Đế" itemprop="url">Xuyên Nhanh: Ta Là Dâm Đế</a></h3>
                    </div>
                    <div className="hidden-xs col-sm-3 col-md-3 col-cat text-888"><a itemprop="genre" href="https://truyenfull.vn/the-loai/tien-hiep/" title="Tiên Hiệp">Tiên Hiệp</a>, <a itemprop="genre" href="https://truyenfull.vn/the-loai/kiem-hiep/" title="Kiếm Hiệp">Kiếm Hiệp</a></div>
                    <div className="col-xs-3 col-sm-3 col-md-2 col-chap text-info"><a href="https://truyenfull.vn/xuyen-nhanh-ta-la-dam-de/chuong-67/" title="Xuyên Nhanh: Ta Là Dâm Đế - Chương 67"><span className="chapter-text"><span>Chương </span></span>67</a></div>
                    <div className="hidden-xs hidden-sm col-md-2 col-time text-888">2 giờ trước </div>
                </div>
                <div className="row" itemscope itemtype="https://schema.org/Book">
                    <div className="col-xs-9 col-sm-6 col-md-5 col-title"><span className="glyphicon glyphicon-chevron-right"></span>
                        <h3 itemprop="name"><a href="https://truyenfull.vn/do-thi-truy-my-ky/" title="Đô Thị Truy Mỹ Ký" itemprop="url">Đô Thị Truy Mỹ Ký</a></h3>
                    </div>
                    <div className="hidden-xs col-sm-3 col-md-3 col-cat text-888"><a itemprop="genre" href="https://truyenfull.vn/the-loai/kiem-hiep/" title="Kiếm Hiệp">Kiếm Hiệp</a>, <a itemprop="genre" href="https://truyenfull.vn/the-loai/do-thi/" title="Đô Thị">Đô Thị</a></div>
                    <div className="col-xs-3 col-sm-3 col-md-2 col-chap text-info"><a href="https://truyenfull.vn/do-thi-truy-my-ky/chuong-79/" title="Đô Thị Truy Mỹ Ký - Chương 79"><span className="chapter-text"><span>Chương </span></span>79</a></div>
                    <div className="hidden-xs hidden-sm col-md-2 col-time text-888">2 giờ trước </div>
                </div>
                <div className="row" itemscope itemtype="https://schema.org/Book">
                    <div className="col-xs-9 col-sm-6 col-md-5 col-title"><span className="glyphicon glyphicon-chevron-right"></span>
                        <h3 itemprop="name"><a href="https://truyenfull.vn/vo-thuong-than-truc/" title="Vô Thượng Thần Trúc" itemprop="url">Vô Thượng Thần Trúc</a></h3>
                    </div>
                    <div className="hidden-xs col-sm-3 col-md-3 col-cat text-888"><a itemprop="genre" href="https://truyenfull.vn/the-loai/kiem-hiep/" title="Kiếm Hiệp">Kiếm Hiệp</a>, <a itemprop="genre" href="https://truyenfull.vn/the-loai/huyen-huyen/" title="Huyền Huyễn">Huyền Huyễn</a></div>
                    <div className="col-xs-3 col-sm-3 col-md-2 col-chap text-info"><a href="https://truyenfull.vn/vo-thuong-than-truc/chuong-47/" title="Vô Thượng Thần Trúc - Chương 47"><span className="chapter-text"><span>Chương </span></span>47</a></div>
                    <div className="hidden-xs hidden-sm col-md-2 col-time text-888">2 giờ trước </div>
                </div>
                <div className="row" itemscope itemtype="https://schema.org/Book">
                    <div className="col-xs-9 col-sm-6 col-md-5 col-title"><span className="glyphicon glyphicon-chevron-right"></span>
                        <h3 itemprop="name"><a href="https://truyenfull.vn/tuyet-sac-nu-than/" title="Tuyệt Sắc Nữ Thần" itemprop="url">Tuyệt Sắc Nữ Thần</a></h3>
                    </div>
                    <div className="hidden-xs col-sm-3 col-md-3 col-cat text-888"><a itemprop="genre" href="https://truyenfull.vn/the-loai/do-thi/" title="Đô Thị">Đô Thị</a>, <a itemprop="genre" href="https://truyenfull.vn/the-loai/di-nang/" title="Dị Năng">Dị Năng</a></div>
                    <div className="col-xs-3 col-sm-3 col-md-2 col-chap text-info"><a href="https://truyenfull.vn/tuyet-sac-nu-than/chuong-16/" title="Tuyệt Sắc Nữ Thần - Chương 16"><span className="chapter-text"><span>Chương </span></span>16</a></div>
                    <div className="hidden-xs hidden-sm col-md-2 col-time text-888">2 giờ trước </div>
                </div>
                <div className="row" itemscope itemtype="https://schema.org/Book">
                    <div className="col-xs-9 col-sm-6 col-md-5 col-title"><span className="glyphicon glyphicon-chevron-right"></span>
                        <h3 itemprop="name"><a href="https://truyenfull.vn/truong-cong-chua-trung-sinh/" title="Trưởng Công Chúa Trùng Sinh" itemprop="url">Trưởng Công Chúa Trùng Sinh</a></h3><span className="label-title label-full"></span>
                    </div>
                    <div className="hidden-xs col-sm-3 col-md-3 col-cat text-888"><a itemprop="genre" href="https://truyenfull.vn/the-loai/sac/" title="Sắc">Sắc</a>, <a itemprop="genre" href="https://truyenfull.vn/the-loai/trong-sinh/" title="Trọng Sinh">Trọng Sinh</a></div>
                    <div className="col-xs-3 col-sm-3 col-md-2 col-chap text-info"><a href="https://truyenfull.vn/truong-cong-chua-trung-sinh/chuong-89/" title="Trưởng Công Chúa Trùng Sinh - Chương 89"><span className="chapter-text"><span>Chương </span></span>89</a></div>
                    <div className="hidden-xs hidden-sm col-md-2 col-time text-888">2 giờ trước </div>
                </div>
                <div className="row" itemscope itemtype="https://schema.org/Book">
                    <div className="col-xs-9 col-sm-6 col-md-5 col-title"><span className="glyphicon glyphicon-chevron-right"></span>
                        <h3 itemprop="name"><a href="https://truyenfull.vn/day-dua-cung-nguoi-ben-nhau-tron-doi/" title="Dây Dưa Cùng Người Bên Nhau Trọn Đời" itemprop="url">Dây Dưa Cùng Người Bên Nhau Trọn Đời</a></h3><span className="label-title label-full"></span>
                    </div>
                    <div className="hidden-xs col-sm-3 col-md-3 col-cat text-888"><a itemprop="genre" href="https://truyenfull.vn/the-loai/sac/" title="Sắc">Sắc</a>, <a itemprop="genre" href="https://truyenfull.vn/the-loai/bach-hop/" title="Bách Hợp">Bách Hợp</a></div>
                    <div className="col-xs-3 col-sm-3 col-md-2 col-chap text-info"><a href="https://truyenfull.vn/day-dua-cung-nguoi-ben-nhau-tron-doi/chuong-30/" title="Dây Dưa Cùng Người Bên Nhau Trọn Đời - Chương 30"><span className="chapter-text"><span>Chương </span></span>30</a></div>
                    <div className="hidden-xs hidden-sm col-md-2 col-time text-888">2 giờ trước </div>
                </div>
            </div>
            <div className="visible-md-block visible-lg-block col-md-4 text-center col-truyen-side">
                <div className="hide" id="history-holder-side"></div>
                <div className="list list-truyen list-cat col-xs-12">
                    <div className="title-list">
                        <h4>Thể loại truyện</h4>
                    </div>
                    <div className="row">
                        <div className="col-xs-6"><a href="https://truyenfull.vn/the-loai/tien-hiep/" title="Truyện Tiên Hiệp">Tiên Hiệp</a></div>
                        <div className="col-xs-6"><a href="https://truyenfull.vn/the-loai/kiem-hiep/" title="Truyện Kiếm Hiệp">Kiếm Hiệp</a></div>
                        <div className="col-xs-6"><a href="https://truyenfull.vn/the-loai/ngon-tinh/" title="Truyện Ngôn Tình">Ngôn Tình</a></div>
                        <div className="col-xs-6"><a href="https://truyenfull.vn/the-loai/do-thi/" title="Truyện Đô Thị">Đô Thị</a></div>
                        <div className="col-xs-6"><a href="https://truyenfull.vn/the-loai/quan-truong/" title="Truyện Quan Trường">Quan Trường</a></div>
                        <div className="col-xs-6"><a href="https://truyenfull.vn/the-loai/vong-du/" title="Truyện Võng Du">Võng Du</a></div>
                        <div className="col-xs-6"><a href="https://truyenfull.vn/the-loai/khoa-huyen/" title="Truyện Khoa Huyễn">Khoa Huyễn</a></div>
                        <div className="col-xs-6"><a href="https://truyenfull.vn/the-loai/he-thong/" title="Truyện Hệ Thống">Hệ Thống</a></div>
                        <div className="col-xs-6"><a href="https://truyenfull.vn/the-loai/huyen-huyen/" title="Truyện Huyền Huyễn">Huyền Huyễn</a></div>
                        <div className="col-xs-6"><a href="https://truyenfull.vn/the-loai/di-gioi/" title="Truyện Dị Giới">Dị Giới</a></div>
                        <div className="col-xs-6"><a href="https://truyenfull.vn/the-loai/di-nang/" title="Truyện Dị Năng">Dị Năng</a></div>
                        <div className="col-xs-6"><a href="https://truyenfull.vn/the-loai/quan-su/" title="Truyện Quân Sự">Quân Sự</a></div>
                        <div className="col-xs-6"><a href="https://truyenfull.vn/the-loai/lich-su/" title="Truyện Lịch Sử">Lịch Sử</a></div>
                        <div className="col-xs-6"><a href="https://truyenfull.vn/the-loai/xuyen-khong/" title="Truyện Xuyên Không">Xuyên Không</a></div>
                        <div className="col-xs-6"><a href="https://truyenfull.vn/the-loai/xuyen-nhanh/" title="Truyện Xuyên Nhanh">Xuyên Nhanh</a></div>
                        <div className="col-xs-6"><a href="https://truyenfull.vn/the-loai/trong-sinh/" title="Truyện Trọng Sinh">Trọng Sinh</a></div>
                        <div className="col-xs-6"><a href="https://truyenfull.vn/the-loai/trinh-tham/" title="Truyện Trinh Thám">Trinh Thám</a></div>
                        <div className="col-xs-6"><a href="https://truyenfull.vn/the-loai/tham-hiem/" title="Truyện Thám Hiểm">Thám Hiểm</a></div>
                        <div className="col-xs-6"><a href="https://truyenfull.vn/the-loai/linh-di/" title="Truyện Linh Dị">Linh Dị</a></div>
                        <div className="col-xs-6"><a href="https://truyenfull.vn/the-loai/nguoc/" title="Truyện Ngược">Ngược</a></div>
                        <div className="col-xs-6"><a href="https://truyenfull.vn/the-loai/sung/" title="Truyện Sủng">Sủng</a></div>
                        <div className="col-xs-6"><a href="https://truyenfull.vn/the-loai/cung-dau/" title="Truyện Cung Đấu">Cung Đấu</a></div>
                        <div className="col-xs-6"><a href="https://truyenfull.vn/the-loai/nu-cuong/" title="Truyện Nữ Cường">Nữ Cường</a></div>
                        <div className="col-xs-6"><a href="https://truyenfull.vn/the-loai/gia-dau/" title="Truyện Gia Đấu">Gia Đấu</a></div>
                        <div className="col-xs-6"><a href="https://truyenfull.vn/the-loai/dong-phuong/" title="Truyện Đông Phương">Đông Phương</a></div>
                        <div className="col-xs-6"><a href="https://truyenfull.vn/the-loai/dam-my/" title="Truyện Đam Mỹ">Đam Mỹ</a></div>
                        <div className="col-xs-6"><a href="https://truyenfull.vn/the-loai/bach-hop/" title="Truyện Bách Hợp">Bách Hợp</a></div>
                        <div className="col-xs-6"><a href="https://truyenfull.vn/the-loai/hai-huoc/" title="Truyện Hài Hước">Hài Hước</a></div>
                        <div className="col-xs-6"><a href="https://truyenfull.vn/the-loai/dien-van/" title="Truyện Điền Văn">Điền Văn</a></div>
                        <div className="col-xs-6"><a href="https://truyenfull.vn/the-loai/co-dai/" title="Truyện Cổ Đại">Cổ Đại</a></div>
                        <div className="col-xs-6"><a href="https://truyenfull.vn/the-loai/mat-the/" title="Truyện Mạt Thế">Mạt Thế</a></div>
                        <div className="col-xs-6"><a href="https://truyenfull.vn/the-loai/truyen-teen/" title="Truyện Truyện Teen">Truyện Teen</a></div>
                        <div className="col-xs-6"><a href="https://truyenfull.vn/the-loai/phuong-tay/" title="Truyện Phương Tây">Phương Tây</a></div>
                        <div className="col-xs-6"><a href="https://truyenfull.vn/the-loai/nu-phu/" title="Truyện Nữ Phụ">Nữ Phụ</a></div>
                        <div className="col-xs-6"><a href="https://truyenfull.vn/the-loai/light-novel/" title="Truyện Light Novel">Light Novel</a></div>
                        <div className="col-xs-6"><a href="https://truyenfull.vn/the-loai/viet-nam/" title="Truyện Việt Nam">Việt Nam</a></div>
                        <div className="col-xs-6"><a href="https://truyenfull.vn/the-loai/doan-van/" title="Truyện Đoản Văn">Đoản Văn</a></div>
                        <div className="col-xs-6"><a href="https://truyenfull.vn/the-loai/khac/" title="Truyện Khác">Khác</a></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListUpdate;