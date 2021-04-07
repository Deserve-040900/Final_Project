<?php

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Demo web read book</title>
    
    <!-- Latest compiled and minified CSS & JS -->
    <link rel="stylesheet" media="screen" href="//netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
    <script src="//code.jquery.com/jquery.js"></script>
    <script src="//netdna.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>

    <link rel="stylesheet" href="../SASS/Style.css">
</head>
<body>
    <!-- header -->
    <div class="container" id="main">
        <nav class="navbar navbar-default navbar-fixed-top">
			<div class="container-fluid">
				<div class="navbar-header">
					<a class="navbar-brand"><img src="../Image/Logo.png" alt="logo C.P.SEEDS" id="logo"></a>
						<button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#myNavbar" aria-expanded="false">
							<span class="sr-only"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
                </div>
                
				<div class="collapse navbar-collapse" id="myNavbar">
					<ul class="nav navbar-nav navbar-right">
						<li class="active"><a href="#home">Trang chủ<span class="sr-only">(current)</span></a></li>
						<li><a href="#service">giới thiệu</a></li>
						<li><a href="#menu">thực đơn</a></li>
						<li><a href="#special">món đặc biệt</a></li>
						<li><a href="#contact"><i class="fas fa-phone" style="color: #2B04F0; font-size: 15px"></i>liên hệ</a></li>
					</ul>
				</div>
			</div>
		</nav>
    </div>

    <!-- slider -->
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="1" class="active"></li>  
			<li data-target="#myCarousel" data-slide-to="2"></li>
			<li data-target="#myCarousel" data-slide-to="3"></li>
			<li data-target="#myCarousel" data-slide-to="4"></li>
        </ol>

        <div class="carousel-inner">
            <div class="item active">
				<img src="../Image/1.jpg" alt="slider 1">
				<div class="carousel-caption">
					<h3>Chi nhánh chính</h3>
                    <p>357 Lê Hồng Phong, Quận 10</p>
                    <p><a class="btn btn-lg btn-primary" href="#" role="button">Thông Tin CTy</a></p>
				</div>
			</div>
			<div class="item">
			    <img src="../Image/2.jpg" alt="slider 2">
				<div class="carousel-caption">
					<h3>Chi nhánh 1</h3>
					<p>227 Nguyễn Văn Cừ, Quận 5</p>
				</div>
			</div>
			<div class="item">
			    <img src="../Image/3.jpg" alt="slider 3">
				<div class="carousel-caption" id="left">
					<h3>Chi nhánh 2</h3>
					<p>801 Quang Trung, Quận Gò Vấp</p>
				</div>
			</div>
			<div class="item">
			    <img src="../Image/4.jpg" alt="slider 4">
				<div class="carousel-caption" id="right">
					<h3>Chi nhánh 3</h3>
					<p>101 Sư Vạn Hạnh, Quận 10</p>
				</div>
			</div>
        </div>

        <!-- Previous -->
        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span></a>
        <!-- Next -->
        <a class="right carousel-control" href="#myCarousel" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span></a>
    </div>
    
    <!-- footer -->
    <div class="container-fluid" id="footer">
		<div class="row">
			<div class="col-xs-12 col-md-4">
				<h3>NHÀ HÀNG CỦA CHÚNG TÔI</h3>
				<p>Chuyên phục vụ các món ăn chay. Với các món ăn thích hợp cho các buổi sáng, trưa, chiều, tối <span>mở cửa từ 7h30 đến 21h</span></p>
			</div>
			<div class="col-xs-12 col-md-4">
				<h3>Thông tin liên lạc</h3>
				<ul>
					<li><i class="glyphicon glyphicon-map-marker"></i>137B Nguyễn Chí Thanh Q.5 <span>TP. Hồ Chí Minh</span></li>
					<li><i class="fas fa-envelope"></i><a href="mailto:nkoxkiu2k@gmail.com"> chay.resturant@gmail.com</a></li> 
					<li><i class="fas fa-phone"></i> 028 715 1866</li>
				</ul>
			</div>
			<div class="col-xs-12 col-md-4">
				<h3>Chuyển hướng đến</h3>
				<ul>
					<li><i class="fas fa-arrow-circle-right"></i><a href="#special">Món Đặc Biệt</a></li>
					<li><i class="fas fa-arrow-circle-left"></i><a href="#service">Dịch Vụ</a></li>
					<li><i class="fas fa-arrow-circle-up"></i><a href="#menu">Thực Đơn Hàng Ngày</a></li>
					<li><i class="fas fa-arrow-circle-down"></i><a href="#contact">Liên Hệ Với Chúng Tôi</a></li>
				</ul>
			</div>
			<div class="clearfix"></div>
		</div>
		<div class="row">
			<div class="col-md-6">
				<p>&copy;Bài thi cuối khóa 04042020. Design by Nguyen Thi Ha Xuan <i class="fas fa-dragon"></i></p>
			</div>
			<div class="col-md-6">
				<ul>
					<li><a href="#"><i class="fab fa-facebook"></i></a></li>
					<li><a href="#"><i class="fab fa-twitter"></i></a></li>
					<li><a href="#"><i class="fab fa-google-plus"></i></a></li>
				</ul>
			</div>
		</div>
    </div>
</body>
</html>