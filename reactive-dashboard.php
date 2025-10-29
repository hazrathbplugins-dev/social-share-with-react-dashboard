<?php
/**
 * Plugin Name: Reactive Dashboard
 * Plugin URI:  https://example.com/plugins/reactive-dashboard
 * Description: A lightweight reactive dashboard plugin for WordPress.
 * Version:     0.1.0
 * Author:      Hazrath Ali
 * Author URI:  https://github.com/Hazrath15/
 * Text Domain: reactive-dashboard
 * Domain Path: /languages
 * License:     GPLv2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 *
 * @package ReactiveDashboard
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

require_once plugin_dir_path( __FILE__ ) . 'adminmenupage.php';
require_once plugin_dir_path(__FILE__) . 'dashboard.php';

// Handle saving settings
add_action('wp_ajax_save_social_share_settings', 'social_share_save_settings');
function social_share_save_settings() {
    check_ajax_referer('social_share_nonce', 'nonce');

    if (!current_user_can('manage_options')) {
        wp_send_json_error('Unauthorized');
    }

    $settings = isset($_POST['settings']) ? json_decode(stripslashes($_POST['settings']), true) : [];
    update_option('social_share_settings', $settings);

    wp_send_json_success();
}

// Handle retrieving settings
add_action('wp_ajax_get_social_share_settings', 'social_share_get_settings');
function social_share_get_settings() {
    check_ajax_referer('social_share_nonce', 'nonce');

    $settings = get_option('social_share_settings', [
        'platforms' => ['facebook', 'twitter', 'linkedin'],
        'buttonStyle' => 'square',
        'buttonColor' => '#007bff',
        'buttonSize' => 'medium',
    ]);

    wp_send_json_success($settings);
}

require_once plugin_dir_path( __FILE__ ) . 'class-social-share.php';

add_action('wp_head', function() {
    if (is_singular('post') && has_post_thumbnail()) {
        global $post;
        $image_url = get_the_post_thumbnail_url($post->ID, 'full');  // Use 'full' for better quality
        $image_id = get_post_thumbnail_id($post->ID);
        $image_meta = wp_get_attachment_metadata($image_id);
        $image_width = isset($image_meta['width']) ? $image_meta['width'] : 1200;
        $image_height = isset($image_meta['height']) ? $image_meta['height'] : 630;
        $title = get_the_title($post->ID);
        $description = wp_strip_all_tags(get_the_excerpt($post->ID) ?: $post->post_content);
        $url = get_permalink($post->ID);
        $site_handle = '@ewrtwertwe95589';  // Replace with your site's X username
        ?>
        <!-- Twitter Card Tags -->
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:site" content="<?php echo esc_attr($site_handle); ?>">
        <meta name="twitter:title" content="<?php echo esc_attr($title); ?>">
        <meta name="twitter:description" content="<?php echo esc_attr($description); ?>">
        <meta name="twitter:image" content="<?php echo esc_url($image_url); ?>">
        <meta name="twitter:image:width" content="<?php echo esc_attr($image_width); ?>">
        <meta name="twitter:image:height" content="<?php echo esc_attr($image_height); ?>">
        
        <!-- Open Graph Fallback -->
        <meta property="og:title" content="<?php echo esc_attr($title); ?>">
        <meta property="og:description" content="<?php echo esc_attr($description); ?>">
        <meta property="og:image" content="<?php echo esc_url($image_url); ?>">
        <meta property="og:image:width" content="<?php echo esc_attr($image_width); ?>">
        <meta property="og:image:height" content="<?php echo esc_attr($image_height); ?>">
        <meta property="og:url" content="<?php echo esc_url($url); ?>">
        <meta property="og:type" content="article">
        <?php
    }
});
