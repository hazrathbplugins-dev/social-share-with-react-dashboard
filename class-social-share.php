<?php
class SocialShare {
    public function __construct() {
        $this->init();
    }
    public function init() {
        add_action('wp_footer', [$this, 'render_frontend_buttons']);
        add_shortcode('social_share', [$this, 'social_share_shortcode']);
        add_action('wp_enqueue_scripts', [$this, 'enqueue_frontend_scripts']);
    }

    public function render_frontend_buttons() {
        if (is_single()) {
            echo do_shortcode('[social_share]');
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
            'buttonColor' => '#007bff',
            'buttonSize' => 'medium',
            'buttonType' => 'text', // New default
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

        // Map platforms to icons (replace with real icons in production)
        $icons = [
            'facebook' => '<i class="fa-brands fa-facebook-f"></i>',
            'twitter' => '<i class="fa-brands fa-twitter"></i></i>',
            'linkedin' => '<i class="fa-brands fa-linkedin-in"></i>',
            'pinterest' => '<i class="fa-brands fa-pinterest"></i>',
        ];

        $output = '<div class="social-share-buttons" style="display: flex; gap: 10px;">';
        foreach ($settings['platforms'] as $platform) {
            $url = esc_url(get_permalink());
            $share_url = '';
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

            $output .= "<a href='$share_url' style='background-color: {$settings['buttonColor']}; $styles margin: 5px; display: inline-flex; align-items: center; color: white; text-decoration: none;'>$content</a>";
        }
        $output .= '</div>';

        return $output;
    }
}
new SocialShare();
?>