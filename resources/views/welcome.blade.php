<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <title>Mufap</title>
    <!-- ================== Favicon ================== -->
    <link rel="shortcut icon" href="/assets/images/favicon.ico" type="image/x-icon">
    <link rel="icon" href="/favicon.ico" type="image/x-icon">
    <!-- ================== Required meta tags ================== -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- ================== Bootstrap CSS ================== -->
    <link rel="stylesheet" href="/assets/css/bootstrap.min.css">
    <!-- ================== Slick Slider CSS ================== -->
    <link rel="stylesheet" href="/assets/css/slick.css">
    <link rel="stylesheet" href="/assets/css/slick-theme.css">
    <!-- ================== Font Family ================== -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <!-- ================== Font Awesome and Icons ================== -->
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
    <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">
    <!-- ================== Custom Css ================== -->
    <link rel="stylesheet" href="/assets/css/style.css">
</head>
<body class="inner-body">
    <div id="root"></div>

<!-- ================== Scripting ================== -->
<script type="text/javascript" src="/assets/js/jquery.min.js"></script>
<script type="text/javascript" src="/assets/js/popper.min.js"></script>
<script type="text/javascript" src="/assets/js/bootstrap.min.js"></script>
<script type="text/javascript" src="/assets/js/slick.min.js"></script>
<script type="text/javascript" src="/assets/js/function.js"></script>
<script defer src="/js/app.js"></script>

<script>
    $(document).ready(function(){
        $('.hero-slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            dots:false,
            arrows:true,
            swipe:false
        });

    });
</script>
</body>
</html>