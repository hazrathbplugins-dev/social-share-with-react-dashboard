<?php
class SocialShare {
    public function __construct() {
        $this->init();
    }
    public function init() {
        // add_action('wp_footer', [$this, 'render_frontend_buttons']);
        add_action('init', [$this, 'init_social_share_hooks']);
        add_shortcode('social_share_buttons', [$this, 'social_share_shortcode']);
        add_action('wp_enqueue_scripts', [$this, 'enqueue_frontend_scripts']);
    }

    public function init_social_share_hooks() {

        $settings = social_share_get_display_default_settings();
        $position = $settings['display_position'];
        $enabled_post_types = $settings['post_types'];

        // Only run on selected post types + singular pages
        // if (!is_singular($enabled_post_types)) {
        //     return;
        // }
        switch ($position) {
            case 'before_title':
                add_action( 'the_post', [ $this, 'render_before_title' ], 10 );
                break;

            case 'after_title':
                add_filter( 'the_title', [ $this, 'wrap_title_with_buttons' ], 999, 2 );
                break;
            case 'before_content':
                add_filter('the_content', [$this, 'inject_before_content'], 1);
                break;
            case 'after_content':
                add_filter('the_content', [$this, 'inject_after_content'], 99);
                break;
            case 'footer':
                add_action('wp_footer', [$this, 'render_in_footer']);
                break;
            case 'stick':
                add_action('wp_footer', [$this, 'render_sticky_buttons']);
                break;
        }

        // Optional: Add alignment class
        add_filter('social_share_wrapper_class', function($classes) use ($settings) {
            $classes[] = 'align-' . esc_attr($settings['alignment']);
            return $classes;
        });
    }

    private function render_buttons() {
        $classes = apply_filters('social_share_wrapper_class', ['social-share-buttons']);
        echo '<div class="' . esc_attr(implode(' ', $classes)) . '">';
        echo do_shortcode('[social_share_buttons]');
        echo '</div>';
    }

    // BEFORE TITLE – Best method
    public function render_before_title() {
        // Only on single posts/pages + main query + correct post type
        if ( ! is_singular() || ! in_the_loop() || ! is_main_query() ) {
            return;
        }

        $settings = social_share_get_display_default_settings();
        $enabled_post_types = (array) $settings['post_types'];

        if ( ! is_singular( $enabled_post_types ) ) {
            return;
        }

        // Prevent running multiple times
        static $done = false;
        if ( $done ) return;
        $done = true;

        echo '<div class="social-share-buttons social-before-title">';
        echo do_shortcode( '[social_share_buttons]' );
        echo '</div>';
    }

    // AFTER TITLE – Best method
    public function wrap_title_with_buttons( $title, $id ) {
        if ( ! is_singular() || ! in_the_loop() || ! is_main_query() ) {
            return $title;
        }

        $settings = social_share_get_display_default_settings();
        $enabled_post_types = (array) $settings['post_types'];

        if ( ! is_singular( $enabled_post_types ) ) {
            return;
        }

        static $done = false;
        if ( $done ) return $title;
        $done = true;

        echo '<div class="social-share-buttons social-after-title">';
        echo do_shortcode( '[social_share_buttons]' );
        echo '</div>';

        return $title;
    }

    public function inject_before_content( $content ) {
        // 1. Only on main query + correct post type
        if ( ! is_singular() || ! in_the_loop() || ! is_main_query() ) {
            return $content;
        }

        // 2. Prevent infinite loop
        static $already_run = false;
        if ( $already_run ) {
            return $content;
        }
        $already_run = true;

        // 3. Temporarily remove the filter
        remove_filter( 'the_content', [ $this, 'inject_before_content' ], 1 );

        $buttons = '<div class="social-share-buttons social-before-content">';
        $buttons .= do_shortcode( '[social_share_buttons]' );
        $buttons .= '</div>';

        // 4. Re-add filter (safe for multiple content calls)
        add_filter( 'the_content', [ $this, 'inject_before_content' ], 1 );

        $already_run = false; // Reset for next post

        return $buttons . $content;
    }

    public function inject_after_content( $content ) {
        if ( ! is_singular() || ! in_the_loop() || ! is_main_query() ) {
            return $content;
        }

        static $already_run = false;
        if ( $already_run ) {
            return $content;
        }
        $already_run = true;

        remove_filter( 'the_content', [ $this, 'inject_after_content' ], 99 );

        $buttons = '<div class="social-share-buttons social-after-content">';
        $buttons .= do_shortcode( '[social_share_buttons]' );
        $buttons .= '</div>';

        add_filter( 'the_content', [ $this, 'inject_after_content' ], 99 );

        $already_run = false;

        return $content . $buttons;
    }

    public function render_in_footer() {
        if (is_singular()) $this->render_buttons();
    }

    public function render_sticky_buttons() {
        if (!is_singular()) return;
        ?>
        <div class="social-share-sticky align-<?php echo esc_attr($settings['alignment']); ?>">
            <div class="sticky-inner">
                <?php echo do_shortcode('[social_share_buttons]'); ?>
            </div>
        </div>
        <style>
            .social-share-sticky {
                position: fixed;
                bottom: 20px;
                left: 20px;
                z-index: 9999;
                background: white;
                padding: 12px;
                border-radius: 12px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.15);
                border: 1px solid #e5e7eb;
            }
            .sticky-inner { display: flex; gap: 10px; align-items: center; }
            .align-left { text-align: left; }
            .align-center { text-align: center; justify-content: center; }
            .align-right { text-align: right; justify-content: flex-end; }
        </style>
        <?php
    }

    public function render_frontend_buttons() {
        if (is_single()) {
            echo do_shortcode('[social_share_buttons]');
        }
    }

    public function enqueue_frontend_scripts() {
        wp_enqueue_style(
            'font-awesome-frontend',
            'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
            [],
            '6.4.0'
        );
    }
    // includes/class-social-share.php
    public function social_share_shortcode() {
        $settings = get_option('social_share_settings', [
            'platforms' => ['facebook', 'twitter', 'linkedin'],
            'buttonStyle' => 'square',
            'buttonBgColor' => '#007bff',
            'buttonColor'=> '#ffffff',
            'buttonSize' => 'medium',
            'buttonType' => 'text',
            'buttonLayout'=> 'horizontal'
        ]);

        $styles = '';
        switch ($settings['buttonStyle']) {
            case 'rounded':
                $styles .= 'border-radius: 10px;';
                break;
            case 'circle':
                $styles .= 'border-radius: 50%;';
                break;
            default:
                $styles .= 'border-radius: 0;';
        }

        switch ($settings['buttonSize']) {
            case 'small':
                $styles .= 'padding: 5px 10px; font-size: 14px;';
                break;
            case 'large':
                $styles .= 'padding: 15px 30px; font-size: 18px;';
                break;
            default:
                $styles .= 'padding: 10px 20px; font-size: 16px;';
        }
        $dir_style ='';
        switch ($settings['buttonLayout']) {
            case 'horizontal':
                $dir_style .= 'flex-direction: row;';
                break;
            case 'vertical':
                $dir_style .= 'flex-direction: column;';
                break;
            default:
                $dir_style .= 'flex-direction: row;';
        }

        // Map platforms to icons (replace with real icons in production)
        $icons = [
            'facebook' => '<i class="fa-brands fa-facebook-f"></i>',
            'twitter' => '<i class="fa-brands fa-twitter"></i></i>',
            'linkedin' => '<i class="fa-brands fa-linkedin-in"></i>',
            'pinterest' => '<i class="fa-brands fa-pinterest"></i>',
        ];

        $output = '<div class="social-share-buttons" style="display: flex; gap: 10px;' . $dir_style. '">';
        foreach ($settings['platforms'] as $platform) {
           $url = esc_url(get_permalink());
        $share_url = '';
        $extra_params = '';
        if (has_post_thumbnail()) {
            $image_url = esc_url(get_the_post_thumbnail_url(get_the_ID(), 'large'));
            $title = esc_attr(get_the_title());
            $description = esc_attr(wp_strip_all_tags(get_the_excerpt()));
            switch ($platform) {
                case 'facebook':
                    $share_url = "https://www.facebook.com/sharer/sharer.php?u=$url";
                    break;
                case 'twitter':
                    $share_url = "https://twitter.com/intent/tweet?url=$url&text=$title";
                    break;
                case 'linkedin':
                    $share_url = "https://www.linkedin.com/shareArticle?mini=true&url=$url&title=$title&summary=$description";
                    break;
                case 'pinterest':
                    $share_url = "https://pinterest.com/pin/create/button/?url=$url&media=$image_url&description=$description";
                    break;
            }
        } else {
            // Fallback without thumbnail-specific params
            switch ($platform) {
                case 'facebook':
                    $share_url = "https://www.facebook.com/sharer/sharer.php?u=$url";
                    break;
                case 'twitter':
                    $share_url = "https://twitter.com/intent/tweet?url=$url";
                    break;
                case 'linkedin':
                    $share_url = "https://www.linkedin.com/shareArticle?mini=true&url=$url";
                    break;
                case 'pinterest':
                    $share_url = "https://pinterest.com/pin/create/button/?url=$url";
                    break;
            }
        }

        // Build full share URL with any extra params
        $share_url = $share_url . $extra_params;

        $text = 'Share on ' . ucfirst($platform);
        $icon = isset($icons[$platform]) ? $icons[$platform] : '';
        $content = '';
        switch ($settings['buttonType']) {
            case 'icon-text':
                $content = "<span style='margin-right: 8px;'>$icon</span><span>$text</span>";
                break;
            case 'icon':
                $content = "<span>$icon</span>";
                break;
            case 'text':
            default:
                $content = $text;
                break;
        }

            $output .= "<a href='$share_url' target='_blank' style='background-color: {$settings['buttonBgColor']}; color: {$settings['buttonColor']}; $styles width: fit-content; margin: 5px; display: inline-flex; align-items: center; text-decoration: none;'>$content</a>";
        }
        $output .= '</div>';

        return $output;
    }
}
new SocialShare();
?>