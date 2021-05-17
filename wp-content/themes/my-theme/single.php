<?php get_header('page'); ?>
<?php the_post(); ?>
<div class="container">
    <div class="row">
        <div class="col-md-9">
        <?php get_template_part( 'post-templates/post', get_post_format() ); ?>
        </div>
        <div class="col-md-3">
            <?php get_sidebar( ); ?>
        </div>
    </div>
</div>
<?php get_footer(); ?>