<?php

add_action( 'wp_enqueue_scripts', 'style_theme' );
add_action( 'wp_footer', 'scripts_theme' );
add_action( 'after_setup_theme', 'myMenu' );
add_action( 'widgets_init', 'register_my_widgets' );
add_filter( 'excerpt_more', 'new_excerpt_more' );

function new_excerpt_more( $more ){
	global $post;
	return '<a href="'. get_permalink($post) . '">Читать дальше...</a>';
}

function register_my_widgets(){

	register_sidebar( array(
		'name'          => 'Left Sidebar',
		'id'            => "left_sidebar",
		'description'   => 'Описание sidebara',
		'before_widget' => '<div class="widget %2$s">',
		'after_widget'  => "</div>\n",
		'before_title'  => '<h2 class="widgettitle">',
		'after_title'   => "</h2>\n"
	) );
}

function myMenu() {
    register_nav_menu( 'top', 'Меню в шапке' );
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails', array( 'post' ) ); 
	add_theme_support( 'post-formats', array( 'video', 'aside', 'gallery', 'chat' ) );
	add_image_size( 'post_thumb', 750, 400, true );
	add_image_size( 'post_thumb_single', 750, 400, true );
}

function style_theme() {
    wp_enqueue_style( 'style', get_stylesheet_uri() );
    wp_enqueue_style( 'bootstrap', get_template_directory_uri() . '/assets/css/bootstrap.min.css' );
}

function scripts_theme() {
    wp_enqueue_script( 'jquery' );
    wp_enqueue_script( 'bootstrap', get_template_directory_uri() . '/assets/js/bootstrap.min.js' );
    wp_enqueue_style( 'style-main', '/css/main.css' );
    wp_enqueue_style('theme-main', '/scss/main.scss');
}

add_shortcode( 'my_short', 'short_function' );

function short_function() {
	return 'Я шорткод';
}

add_action('my_action', 'action_function');

function action_function() {
	echo 'Я тут';
}