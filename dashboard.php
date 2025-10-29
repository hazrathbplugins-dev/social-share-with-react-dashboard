<?php
class DashboardFunction {
    public function __construct() {
        add_action( 'admin_enqueue_scripts', [ $this, 'enqueue_dashboard_scripts' ] );
    }

    public function enqueue_dashboard_scripts( $screen ) {
        if( $screen === 'toplevel_page_reactive-dashboard') {
            wp_enqueue_script( 'bptb-admin-dashboard', plugin_dir_url( __FILE__ ) . 'build/gettingStart.js', [ 'react', 'react-dom','wp-util' ], '1.0.0', true );
            wp_enqueue_style( 'bptb-admin-style', plugin_dir_url( __FILE__ ) . 'build/style-gettingStart.css', [], '1.0.0' );
            wp_localize_script(
                'bptb-admin-dashboard',
                'socialShareSettings',
                [
                    'ajax_url' => admin_url('ajax.php'),
                    'nonce' => wp_create_nonce('social_share_nonce'),
                ]
            );
            wp_enqueue_style(
                'font-awesome',
                'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
                [],
                '6.4.0'
            );
        }
        if( $screen === 'reactive-dashboard_page_reactive-dashboard-settings') {
            wp_enqueue_script( 'bptb-admin-setting', plugin_dir_url( __FILE__ ) . 'build/settingPage.js', [ 'react', 'react-dom','wp-util' ], '1.0.0', true );
            wp_enqueue_style( 'bptb-admin-style', plugin_dir_url( __FILE__ ) . 'build/style-gettingStart.css', [], '1.0.0' );
            wp_enqueue_style( 'bptb-main-style', plugin_dir_url( __FILE__ ) . 'build/settingPage.css', [], '1.0.0' );
            wp_enqueue_style(
                'font-awesome',
                'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
                [],
                '6.4.0'
            );
        }
        
    }
}
new DashboardFunction();
?>