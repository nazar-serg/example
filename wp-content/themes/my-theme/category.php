<?php get_header('page'); ?>
<div class="container">
    <div class="row">
        <h1>Категория</h1>
        <div class="col-md-9">
            <?php if (have_posts()) { while (have_posts()) { the_post(); ?>
                <article>
                    <div><?php the_time('j F Y'); ?></div>
                    <h1><?php the_title(); ?></h1>
                    <a href="<?php the_permalink(); ?>">
                        <?php the_post_thumbnail( 'post_thumb' ); ?>
                    </a>
                    <?php the_excerpt(); ?>
                </article>
            <?php }
           } ?>
        </div>
        <div class="col-md-3">
            <?php get_sidebar( ); ?>
        </div>
    </div>
</div>
<?php get_footer(); ?>