<footer>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-3">
          <a href="<?php echo get_home_url(); ?>"><img src="<?php get_template_directory_uri(); ?>/scss/images/logo.png" alt="Логотип"></a>
        </div>
        <div class="col-12 col-lg-6 column">
          <?php
            wp_nav_menu( [
               'theme_location'  => 'bottom',
               'menu'            => '', 
               'container'       => 'div', 
               'container_class' => '', 
               'container_id'    => '',
               'menu_class'      => 'nav-footer', 
               'menu_id'         => '',
               'echo'            => true,
               'fallback_cb'     => 'wp_page_menu',
               'before'          => '',
               'after'           => '',
               'link_before'     => '',
               'link_after'      => '',
               'items_wrap'      => '<ul id="%1$s" class="%2$s">%3$s</ul>',
               'depth'           => 0,
               'walker'          => '',
            ] );
            ?>
        </div>
        <div class="col-12 col-lg-3 column">
          <ul class="social-networks">
            <li><a href="https://vk.com/teplo_blr" target="_blank"><i class="fa fa-vk" aria-hidden="true"></i></a></li>
            <li><a href="https://www.youtube.com/channel/UCY2oANXf3z6q4fIIO72shMg" target="_blank"><i class="fa fa-youtube" aria-hidden="true"></i></a></li>
            <li><a href="https://www.facebook.com/Teplovizionby-1291836960944457/" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
            <li><a href="https://www.instagram.com/teplovizor.minsk/" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class=" col-12 col-lg-3"></div>
        <div class="col-12 col-lg-6 contacts">
          <p>Телефон:
            <a href="tel:+375295604710">+375 29 560-47-10</a></p>
          <p class="indent"><a href="tel:+375291444247">+375 29 144-42-47</a></p>
          <p>E-mail: <a href="mailto:teplovizion-by@mail.ru">teplovizion-by@mail.ru</a></p>
          <p>Заявки принимаются без выходных: с 07-00 до 22-00</p>
        </div>
        <div class="col-12 col-lg-3">
          <div class="copyright-sign">
            <p>Teplovizion ©
              <?php echo date('Y'); ?>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <?php wp_footer(); ?>
    </body>
    </html>