<?php 
/*
Template name: Главная
*/
?>

  <?php get_header(); ?>
    <div class="home-content container">
      <div class="hello">
        <div class="hello__container">
          <div class="hello__content">
            <div class="hello__text text">
              <h1 class="hello__title title"><?php the_title(); ?></h1>
              <?php the_content(); ?>
            </div>
            <a href="#" class="hello__btn btn">Download Resume</a>
          </div>
          <div class="hello__avatar">
            <?php the_post_thumbnail( 'post_thumb' ); ?>
          </div>
        </div>
      </div>
    </div>
    <div class="recent-posts">
      <div class="recent-posts__container container">
        <div class="recent-posts__header">
          <div class="recent-posts__title">Recent posts</div>
          <a href="#" class="recent-posts__view-all">View all</a>
        </div>
        <div class="recent-posts__items">
          <?php
              // параметры по умолчанию
              $posts = get_posts( array(
                'numberposts' => 8,
                'category'    => 4,
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
            <div class="recent-posts__column">
              <div class="recent-posts__item">
                <div class="recent-posts__title-post post-title">
                  <a href="<?php the_permalink(); ?>">
                    <?php the_title(); ?>
                  </a>
                </div>
                <div class="recent-posts__info">
                  <?php the_time('F jS, Y'); ?>
                    <span>|</span>
                    <?php
                    if (get_the_tag_list()) { // есть ли вообще тэги
                      $tags = get_the_terms( $post->ID, 'post_tag'); // получаем все тэги
                      foreach ($tags as $tag) {
                        echo $tag->name; // рисуем как нужно
                      }
                    }
                  ?>
                </div>
                <div class="recent-posts__text text">
                  <?php the_content( "plugin_myContentFilter" ); ?>
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
      <div class="featured-works">
        <div class="featured-works__container container">
          <div class="featured-works__title post-title">Featured works</div>
          <div class="works">
            <div class="works__item">
              <?php
              // параметры по умолчанию
              $posts = get_posts( array(
                'numberposts' => 8,
                'category'    => '10, 11, 12',
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
               <div class="works__image">
                  <a href="<?php the_permalink(); ?>">
                    <?php the_post_thumbnail( "photo_article_home" ); ?>
                  </a>
                  </div>
                <div class="works__body">
                  <div class="works__title">
                    <a href="<?php the_permalink(); ?>">
                        <?php the_title(); ?>
                    </a>
                  </div>
                  <div class="works__info">
                    <div class="works__year">
                    <?php
                    if (get_the_tag_list()) { // есть ли вообще тэги
                      $tags = get_the_terms( $post->ID, 'post_tag'); // получаем все тэги
                      foreach ($tags as $tag) {
                        echo $tag->name; // рисуем как нужно
                      }
                    }
                  ?>
                </div>
                    </div>
                    <div class="works__category">
                    <?php
                      foreach ( get_the_category() as $category ) {
                        printf(
                          '<a href="%s" class="link link_text">%s</a>', // Шаблон вывода ссылки
                          esc_url( get_category_link( $category ) ), // Ссылка на рубрику
                          esc_html( $category->name ) // Название рубрики
                        );
                      }
                    ?>
                    </div>
                  </div>
                  <div class="works__text">
                      <?php the_content( "plugin_myContentFilter" ); ?>
                  </div>
                <?php
              }

              wp_reset_postdata(); // сброс
              ?>
                </div>
              </div>
            </div>
            </div>

            <?php get_footer(); ?>