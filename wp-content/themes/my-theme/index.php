<?php get_header(); ?>
<div class="container">
    <div class="content">
        <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.</p>
    </div>
    <?php
    // параметры по умолчанию
$posts = get_posts( array(
	'numberposts' => 3,
	'post_type'   => 'post',
    'order'       => 'DESC',
	'suppress_filters' => true, // подавление работы фильтров изменения SQL запроса
) );

foreach( $posts as $post ){
	setup_postdata($post);
    ?>
    <ul>
        <li>
            <?php the_time('j F Y'); ?>
            <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
            <?php the_excerpt(); ?>
        </li>
    </ul>
    <?php
}

wp_reset_postdata(); // сброс
    ?>
</div>
<?php get_footer(); ?>