<!doctype html>
<html class="no-js" lang="">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="apple-touch-icon" href="apple-touch-icon.png">
    <!-- Place favicon.ico in the root directory -->

    <link rel="stylesheet" href="style.css">
    <script src="js/vendor/modernizr.min.js"></script>

    <!-- typekit -->
    <script src="https://use.typekit.net/hda8wft.js"></script>
    <script>try{Typekit.load({ async: false });}catch(e){}</script>

    <!-- favicons -->
    <link rel="apple-touch-icon" sizes="180x180" href="favicons/apple-touch-icon.png">
    <link rel="icon" type="image/png" href="favicons/favicon-32x32.png" sizes="32x32">
    <link rel="icon" type="image/png" href="favicons/favicon-16x16.png" sizes="16x16">
    <link rel="manifest" href="favicons/manifest.json">
    <link rel="mask-icon" href="favicons/safari-pinned-tab.svg" color="#404fb5">
    <link rel="shortcut icon" href="favicons/favicon.ico">
    <meta name="msapplication-config" content="favicons/browserconfig.xml">
    <meta name="theme-color" content="#404fb5">
  </head>
  <body class="page-home">
    <!--[if lt IE 8]>
      <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->

    <div class="intro section-padding" id="js-intro-section">
      <div class="container">
      <h2 id="js-header-animation1">Cool places</h2>
      <h2 id="js-header-animation2"><em>10 things</em></h2>
      <h2 id="js-header-animation3">Done<span></span></h2>
      </div><!-- .container -->
    </div>

    <?php include_once('template-parts/color-pattern.php'); ?>
    <?php include_once('template-parts/nav.php'); ?>

    <header id="header" class="site-header" role="banner">
      <div class="container">
        <h1 class="site-logo"><a href="/">List Ten</a></h1>
      </div><!-- .container -->
    </header>

    <div class="site-wrapper" id="js-site-wrapper">
      <?php include_once('template-parts/choose-a-city-block.php'); ?>
      <?php include_once('template-parts/about-block.php'); ?>
      <?php include_once('template-parts/contact-block.php'); ?>
    </div><!-- .site-wrapper -->

    <?php include_once('footer.php'); ?>
