<?php
if ( ! defined( 'ABSPATH' ) ) exit;

class AdminVoiceFeedback {

    public function __construct() {
        add_action('admin_menu', [$this, 'register_admin_menu']);
    }
    
 
    public function register_admin_menu() {
        // Top-level menu: Feedbacks
        add_menu_page(
            'Reactive Dashboard',
            'Reactive Dashboard',             
            'manage_options',                
            'reactive-dashboard',               
            [$this, 'render_users_feedbacks_page'], 
            'dashicons-microphone',          
            25    
        );

        // Submenu: Dashboard
        add_submenu_page(
            'reactive-dashboard',
            'Settings',
            'Settings',
            'manage_options',
            'reactive-dashboard-settings',
            [$this,'render_dashboard_page']
        );
        
        // // Submenu: Settings
        // add_submenu_page(
        //     'voice-feedback',
        //     'Voice Settings',
        //     'Voice Feedbacks Shortcodes',
        //     'manage_options',
        //     'all-voice-feedback',
        //     [$this, 'render_all_voice_feedback_page']
        // );

        // Submenu: Global Settings
        add_submenu_page(
            'reactive-dashboard',
            'Welcome',
            'Welcome',
            'manage_options',
            'global-welcome-settings',
            [$this, 'render_welcome_settings_page'],
            0
        );
    }

    public function render_dashboard_page() {
        ?>
        <div id="reactiveAdminDashboardSubMenuPageWrapper"
        data-info='<?php echo esc_attr( wp_json_encode( [
                    // 'version' => BPLVF_VERSION,
                    // 'isPremium' => esc_attr(bplvf()->can_use_premium_code() ?? false),
                    'adminUrl' => admin_url()
                ] ) ); ?>'
        ></div>
        <?php
    }

    // Users Feedback Page
    public function render_users_feedbacks_page() {
    ?>
        <div
           class="reactive-settings-page-wrapper" id="reactiveAdminDashboardPageWrapper"
            data-is-premium="<?php //echo esc_attr(bplvf()->can_use_premium_code() ?? false); ?>"
           data-user="https://www.gravatar.com/avatar/<?php echo md5(strtolower(trim(get_userdata(get_current_user_id())->user_email))); ?>?s=32"
        >
        </div>
    <?php
    }

    // Start Welcome Settings Page
    public function render_welcome_settings_page() {
      ?>
        <div class="welcome-settings-page-wrapper" 
           id="welcomeSettingsWrapper"
           data-info='<?php echo esc_attr( wp_json_encode( [
                // 'isPremium' => esc_attr(bplvf()->can_use_premium_code() ?? false),
                'adminUrl' => admin_url(),
            ] ) ); ?>'>
        </div>
      <?php
    }
    
    // All Voice Feedback
    public function render_all_voice_feedback_page() {
        ?>
        <div
           id="allFeedbackPageWrapper" 
           data-info='<?php echo esc_attr( wp_json_encode( [
                // 'isPremium' => esc_attr(bplvf()->can_use_premium_code() ?? false),
                'adminUrl' => admin_url(),
            ] ) ); ?>'>
        </div>
        <?php
    }

    // Getting Started Page
    // public static function render_getting_started_page() {
    //     <div id="vfdGettingStartedWrapper"></div> -->
    // }

}


new AdminVoiceFeedback();
