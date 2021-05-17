<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<?php wp_head(); ?>
</head>
<body>
<header>
<div class="container">
    <div class="logo">
    <a href="<?php echo home_url(); ?>">
        <?php bloginfo( 'name' ); ?>
    </a>
    </div>
    <?php wp_nav_menu(array(
        'theme_location'  => 'top',
        'container'       => null,
        'menu_class'      => 'nav-menu', 
	    'menu_id'         => 'nav-menu',
    )); ?>
</div>
<div class="header-page-banner"></div>
</header>