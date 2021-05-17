<?php 
/*
Template Name: Для предприятий (Все услуги)
*/
?>
  <?php get_header(); ?>
    <div class="container">
      <div class="row">
        <div class="col col-lg-2"></div>
        <div class="col-lg-9">
          <?php
        if ( function_exists('yoast_breadcrumb') ) {
          yoast_breadcrumb( '<p id="breadcrumbs">','</p>' );
        }
        ?>
            <div class="page-content-all-services">
            <div class="picture-for-enterprises"></div>
              <div class="title-page">
                <h1 class="animate__animated animate__backInDown"><?php the_title(); ?></h1>
              </div>
              <div class="row">
                <?php
              // параметры по умолчанию
              $posts = get_posts( array(
                'numberposts' => 5,
                'category'    => 10,
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
                  <div class="col-md-12 col-lg-6 column">
                    <div class="all-services">
                      <?php the_post_thumbnail( 'post_thumb' ); ?>
                        <div class="title">
                          <a href="<?php the_permalink(); ?>">
                            <?php the_title(); ?>
                          </a>
                        </div>
                        <div class="text">
                          <?php the_field('object_work'); ?>
                            <div class="more-details">
                              <a href="<?php the_permalink(); ?>">Подробнее</a>
                            </div>
                        </div>
                    </div>
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