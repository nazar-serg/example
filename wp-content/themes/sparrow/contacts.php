<?php 
/*
Template Name: Страница Контакты
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
            <div class="page-content">
              <div class="our-contacts"></div>
              <div class="title-page-other">
                <h1 class="animate__animated animate__backInDown"><?php the_title(); ?></h1>
              </div>
            </div>
            <div class="contacts-content">
            <div class="row">
              <div class="col-lg-12">
                <div class="contact-offer">
                <?php the_field('kontakty_tekst'); ?>
              </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 col-lg-6">
                <div class="contact-text">
              <?php the_field('kontakty_telefon'); ?>
            </div>
              </div>
              <div class="col-md-12 col-lg-6">
                <div class="bg-contact">
                  <?php echo do_shortcode( '[contact-form-7 id="77" title="Контактная форма 1"]' ); ?>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <?php get_footer(); ?>