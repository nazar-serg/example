<?php 
/*
Template name: Главная
*/
?>
  <?php get_header(); ?>
    <div class="banner">
      <div class="bg-banner">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="col-md-6">
                <div class="text">
                  <h1 class="animate__animated animate__backInDown">Тепловизионное обследование</h1>
                  <p>Проводится квалифицированными инженерами</p>
                  <div class="btn-order">
                    <a class="btn btn-primary" data-toggle="modal" data-target="#myModal">Заказать</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col col-lg-1"></div>
        <div class="col-lg-10">
          <div class="page-content home-page">
            <?php the_content(); ?>
          </div>
        </div>
        <div class="col col-lg-2"></div>
      </div>
    </div>
    <div class="why-thermal-imager">
      <div class="container">
        <div class="row">
          <h2>Почему исследования Teplovizion</h2>
          <div class="col-md-4">
            <i class="fa fa-graduation-cap" aria-hidden="true"></i>
            <div class="title">Образование</div>
            <p>Наши специалисты имеют высшее строительное образование</p>
          </div>
          <div class="col-md-4">
            <i class="fa fa-hourglass-start" aria-hidden="true"></i>
            <div class="title">Оперативность</div>
            <p>Наши специалисты всегда оперативно, профессионально и без задержек выполняют свою работу</p>
          </div>
          <div class="col-md-4">
            <i class="fa fa-laptop" aria-hidden="true"></i>
            <div class="title">Профессиональное оборудование</div>
            <p>Наше оборудование официально аккредитовано Федеральной службой государственной регистрации</p>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div class="contact-us">
      <div class="container">
        <div class="row">
          <h2>Связаться с нами</h2>
          <div class="title">Рады принять заказ и ответить на все вопросы</div>
          <p>Телефон:
            <a href="tel:+375295604710">+375 29 560-47-10</a></p>
          <p class="indent"><a href="tel:+375291444247">+375 29 144-42-47</a></p>
          <p>E-mail: <a href="mailto:teplovizion-by@mail.ru">teplovizion-by@mail.ru</a></p>
        </div>
      </div>
    </div>
    <div class="we-are-located">
      <div class="container">
        <div class="row">
          <h2>Мы находимся</h2>
          <p>220034, г. Минск, ул. З.Бядули, д. 11.</p>
          <p><a href="tel:+375295604710">+375 29 560-47-10</a></p>
          <p><a href="tel:+375291444247">+375 29 144-42-47</a></p>
        </div>
      </div>
    </div>
    <?php get_footer(); ?>