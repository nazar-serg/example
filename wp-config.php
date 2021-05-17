<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе
 * установки. Необязательно использовать веб-интерфейс, можно
 * скопировать файл в "wp-config.php" и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://ru.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define('WP_CACHE', true);
define( 'WPCACHEHOME', 'C:\OpenServer\domains\wp\wp-content\plugins\wp-super-cache/' );
define( 'DB_NAME', 'wp' );

/** Имя пользователя MySQL */
define( 'DB_USER', 'root' );

/** Пароль к базе данных MySQL */
define( 'DB_PASSWORD', 'root' );

/** Имя сервера MySQL */
define( 'DB_HOST', 'localhost' );

/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '~[l?OB}v]_VLk Mn]OOaAHetNDp]<b8E&YF]h k}p4[q|Oa]wegLG/e0c|b.=`0E' );
define( 'SECURE_AUTH_KEY',  'p5V4Yga8xp%U#dKE%rzaABMfSc=2rxG<=y+*fsK:@#i+V9ZcuS5wROTmx#b]souB' );
define( 'LOGGED_IN_KEY',    '} s:I#V.yP63)Dj?<ejp}xh$2Q5>OhA(qP&$!dr+[t~i@WBuV0-)ul#!;LgK)vJf' );
define( 'NONCE_KEY',        '; =LTa>b(%0?gNoB(Yyz,Daj=+GXNa%-N@;([L0*PI_Zha1%BXzdx=f~3]T+e]zm' );
define( 'AUTH_SALT',        '#,$1XItR}6YC*X3=G8,n)~2oiHx8p#W :`-h_PV-{@8])g?JFst.5J)Vp`EL?HlZ' );
define( 'SECURE_AUTH_SALT', 'gNb|(X,IVJfWLmy24:v/2}S]QrD}Z~[`vvYDM7XDj6hhTiF*SZpeCd*cB<EVuZEN' );
define( 'LOGGED_IN_SALT',   '_(Q4CUA!$gQ}6e&NfmfI/%*Sjs*ybw!y?$wf7p]|OW7|p1NQ{^}E5pUk~Cl+tYT[' );
define( 'NONCE_SALT',       '/FkZ}9EBX9vu{TbBJPk_/&WbO{`0p5~}bHA8AhCI2fN|t7 mPqpufjey%UuMv|HN' );

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в документации.
 *
 * @link https://ru.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once ABSPATH . 'wp-settings.php';
