<?php
/**
 * Plugin Name: Reactive Dashboard
 * Plugin URI:  https://example.com/plugins/reactive-dashboard
 * Description: A lightweight reactive dashboard plugin for WordPress.
 * Version:     0.1.0
 * Author:      Your Name
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