<?php 
/*
Template Name: Страница Наши клиенты
*/
?>
  <?php get_header(); ?>
    <div class="container">
      <div class="row">
        <div class="col-lg-9">
        <?php
        if ( function_exists('yoast_breadcrumb') ) {
          yoast_breadcrumb( '<p id="breadcrumbs">','</p>' );
        }
        ?>
            <div class="page-content">
              <div class="picture-for-our-clients"></div>
              <div class="title-page-our-clients">
                <h1 class="animate__animated animate__backInDown"><?php the_title(); ?></h1>
              </div>
            <?php the_content(); ?>
            <div class="btn-order-services">
                  <a class="btn" data-toggle="modal" data-target="#myModal">Консультация</a>
                </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="aside">
            <div class="heading-aside">Полезная информация</div>
            <?php
              // параметры по умолчанию
              $posts = get_posts( array(
                'numberposts' => 8,
                'category'    => 11,
                'orderby'     => 'date',
                'order'       => 'DESC',
                'include'     => array(),
                'exclude'     => array(),
                'meta_key'    => '',
                'meta_value'  =>'',
                'post_type'   => 'post',
                'suppress_filters' => true,
              ) );

              foreach( $posts as $post ){ setup_postdata($post);
               ?>
              <div class="title">
                <a href="<?php the_permalink(); ?>">
                  <?php the_title(); ?>
                </a>
              </div>
              <?php
              }

              wp_reset_postdata(); // сброс
              ?>
          </div>
        </div>
      </div>
    </div>
    </div>
    <?php get_footer(); ?>