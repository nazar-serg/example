<?php
require_once get_template_directory() . '/assets/inc/class-wp-bootstrap-navwalker.php';

add_action( 'wp_enqueue_scripts', 'style_theme' );
add_action( 'wp_footer', 'scripts_theme' );
add_action( 'after_setup_theme', 'myMenu' );    

function myMenu() {
    register_nav_menu( 'top', 'Меню в шапке' );
    register_nav_menu( 'bottom', 'Меню в подвале' );
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails', array( 'post' ) );
    add_theme_support( 'post-thumbnails', array( 'page' ) ); 
    add_image_size( 'post_thumb', 400, 300, true );
    add_image_size( 'photo_article', 966, 450, true );

    add_filter( 'excerpt_more', 'new_excerpt_more' );
    function new_excerpt_more( $more ){
        global $post;
        return '<a href="'. get_permalink($post) . '">Читать дальше...</a>';
    }
}

function style_theme() {
    wp_enqueue_style( 'style', get_stylesheet_uri() );
    wp_enqueue_style( 'bootstrap-css', get_template_directory_uri() . '/assets/css/bootstrap.min.css' );
    wp_enqueue_style( 'style-main', '/css/main.css' );
    wp_enqueue_style( 'animate', get_template_directory_uri() . '/assets/css/animate.min.css' );
    wp_enqueue_style('theme-main', '/scss/main.scss');
}

function scripts_theme() {
    wp_enqueue_script( 'jquery' );
    wp_enqueue_script( 'bootstrap', get_template_directory_uri() . '/assets/js/bootstrap.min.js' );
    wp_enqueue_script( 'index', get_template_directory_uri() . '/assets/js/index.js' );
}

add_filter( 'excerpt_length', function(){
	return 20;
} );

