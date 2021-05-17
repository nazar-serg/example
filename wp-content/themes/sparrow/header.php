<!DOCTYPE html>
<html lang="ru">

<head>
  <meta charset="utf-8">
  <meta name="description" content="">
  <meta name="author" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
  <link rel="shortcut icon" href="favicon.ico">
  <meta name="robots" content="noindex, nofollow" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

  <?php wp_head(); ?>
    <!-- The Modal -->
    <div class="modal fade" id="myModal">
      <div class="modal-dialog">
        <div class="modal-content">

          <!-- Modal Header -->
          <div class="modal-header">
            <p>Оставьте заявку и мы Вам перевзоним в течении 10 минут.</p>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
            <?php echo do_shortcode( '[contact-form-7 id="78" title="Контактная форма в pop up"]' ); ?>
          </div>
        </div>
      </div>
    </div>
</head>

<body>
  <header>
    <div class="container">
      <div class="header-top">
        <div class="row">
          <div class="col-md-12 col-lg logo column">
            <a href="<?php echo get_home_url(); ?>"><img src="<?php get_template_directory_uri(); ?>/scss/images/logo.png" alt="Логотип"></a>
          </div>
          <div class="col-md-12 col-lg time column">
            <p><i class="fa fa-clock-o" aria-hidden="true"></i> Время работы:</p>
            <p class="indent">ПН-ВС: 07-00 до 22-00</p>
          </div>
          <div class="col-md-12 col-lg phone column">
            <p><i class="fa fa-phone" aria-hidden="true"></i>
              <a href="tel:+375295604710">+375 29 560-47-10 (MTS)</a></p>
            <p><i class="fa fa-phone" aria-hidden="true"></i>
              <a href="tel:+375291444247">+375 29 144-42-47 (VELCOM)</a></p>
              <div class="btn-order-header">
                    <a class="btn" data-toggle="modal" data-target="#myModal">Заказать звонок</a>
                  </div>
          </div>
          <div class="col-md-12 col-lg address column">
            <p><i class="fa fa-map-marker" aria-hidden="true"></i> 220034, г. Минск,</p>
            <p class="indent">ул. З.Бядули, д. 11</p>
            <p><i class="fa fa-envelope-open" aria-hidden="true"></i>
              <a href="mailto:teplovizion-by@mail.ru">teplovizion-by@mail.ru</a></p>
          </div>
        </div>
      </div>
    </div>
    <nav class="navbar navbar-expand-md navbar-light bg-light menu-top" role="navigation">
      <div class="container">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-controls="bs-example-navbar-collapse-1" aria-expanded="false" aria-label="<?php esc_attr_e( 'Toggle navigation', 'your-theme-slug' ); ?>">
          <span class="navbar-toggler-icon"></span>
        </button>
        <?php 
      wp_nav_menu( array(
         'theme_location'  => 'top',
         'depth'           => 2, // 1 = no dropdowns, 2 = with dropdowns.
         'container'       => 'div',
         'container_class' => 'collapse navbar-collapse',
         'container_id'    => 'bs-example-navbar-collapse-1',
         'menu_class'      => 'navbar-nav mr-auto',
         'fallback_cb'     => 'WP_Bootstrap_Navwalker::fallback',
         'walker'          => new WP_Bootstrap_Navwalker(),
      ) );
    ?>
      </div>
    </nav>
  </header>