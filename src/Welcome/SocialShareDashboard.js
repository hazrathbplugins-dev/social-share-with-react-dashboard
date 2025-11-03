import { __ } from '@wordpress/i18n';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
    Flex,
    FlexItem,
} from '@wordpress/components';

const SocialShareDashboard = () => {
    const previewButtons = [
        { platform: 'facebook',   color: '#1877F2', icon: 'facebook-f' },
        { platform: 'twitter',    color: '#1DA1F2', icon: 'twitter' },
        { platform: 'linkedin',   color: '#0A66C2', icon: 'linkedin-in' },
        { platform: 'pinterest',  color: '#E60023', icon: 'pinterest-p' },
    ];

    return (
        <div className="social-share-dashboard wrap">
            <header className="dashboard-header">
                <h1>
                    <i className="fas fa-share-alt" style={{ marginRight: 12, color: '#0073aa', fontSize: '32px' }}></i>
                    { __( 'Social Share Pro', 'social-share' ) }
                </h1>
                <p className="description">
                    { __( 'Boost engagement by letting visitors share your content instantly.', 'social-share' ) }
                </p>
            </header>

            {/* 3-Step Guide */}
            <Card size="large" elevation={2} style={{ marginBottom: '2rem' }}>
                <CardHeader>
                    <h2>{ __( 'Get Started in 3 Steps', 'social-share' ) }</h2>
                </CardHeader>
                <CardBody>
                    <Flex gap="6" align="start">
                        {[
                            { num: 1, title: __( 'Choose Platforms', 'social-share' ), desc: __( 'Enable Facebook, X, LinkedIn, Pinterest, etc.', 'social-share' ), icon: 'fas fa-check-circle' },
                            { num: 2, title: __( 'Customize Style', 'social-share' ), desc: __( 'Pick colors, size, icons, and display location.', 'social-share' ), icon: 'fas fa-palette' },
                            { num: 3, title: __( 'Auto-Share on Publish', 'social-share' ), desc: __( 'Automatically post new content to your accounts.', 'social-share' ), icon: 'fas fa-paper-plane' },
                        ].map( (step, i) => (
                            <FlexItem key={i}>
                                <div className="step">
                                    <div className="step-number">
                                        <i className={step.icon} style={{ color: '#fff', fontSize: '18px' }}></i>
                                    </div>
                                    <h3>{step.title}</h3>
                                    <p>{step.desc}</p>
                                </div>
                            </FlexItem>
                        ) )}
                    </Flex>
                </CardBody>
                <CardFooter>
                    <Button
                        variant="primary"
                        href={ socialShareData.adminUrl + 'admin.php?page=social-share-style' }
                    >
                        { __( 'Configure Style', 'social-share' ) }
                    </Button>
                </CardFooter>
            </Card>

            {/* Live Preview */}
            <Card size="large" elevation={1} style={{ marginBottom: '2rem' }}>
                <CardHeader>
                    <h3>{ __( 'Live Preview', 'social-share' ) }</h3>
                </CardHeader>
                <CardBody>
                    <div style={{ padding:20, background:'#f9f9f9', borderRadius:8, textAlign:'center' }}>
                        <p style={{ marginBottom:15, color:'#555' }}>
                            { __( 'This is how your share buttons will look:', 'social-share' ) }
                        </p>
                        <div style={{ display:'inline-flex', gap:10, flexWrap:'wrap', justifyContent:'center' }}>
                            {previewButtons.map( btn => (
                                <a
                                    key={btn.platform}
                                    href="#"
                                    style={{
                                        backgroundColor: btn.color,
                                        color: 'white',
                                        padding: '10px 16px',
                                        borderRadius: 6,
                                        textDecoration: 'none',
                                        fontSize: 14,
                                        fontWeight: 500,
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: 6,
                                    }}
                                >
                                    <i className={`fab fa-${btn.icon}`}></i>
                                    { btn.platform.charAt(0).toUpperCase() + btn.platform.slice(1) }
                                </a>
                            ) )}
                        </div>
                    </div>
                </CardBody>
            </Card>

            {/* Quick Links */}
            <div style={{ marginTop:'2rem', display:'flex', gap:12, flexWrap:'wrap' }}>
                <Button
                    variant="secondary"
                    icon={<i className="fas fa-cog"></i>}
                    href={ socialShareData.adminUrl + 'admin.php?page=social-share-style' }
                >
                    { __( 'Style Controls', 'social-share' ) }
                </Button>
                <Button
                    variant="secondary"
                    icon={<i className="fas fa-book"></i>}
                    href="https://yourplugin.com/docs"
                    target="_blank"
                >
                    { __( 'Documentation', 'social-share' ) }
                </Button>
                <Button
                    variant="secondary"
                    icon={<i className="fas fa-life-ring"></i>}
                    href="https://yourplugin.com/support"
                    target="_blank"
                >
                    { __( 'Get Support', 'social-share' ) }
                </Button>
            </div>

            <p style={{ marginTop:'3rem', textAlign:'center', color:'#666', fontSize:13 }}>
                { __( 'Social Share Pro', 'social-share' ) } v1.0.0 • Built with
                <span style={{ color:'#d63638', margin:'0 4px' }}>heart</span>
                for WordPress
            </p>

            <style>{`
                .dashboard-header h1 { 
                    font-size:2.5rem; margin:0 0 8px; display:flex; align-items:center; 
                }
                .dashboard-header .description { 
                    font-size:1.1rem; color:#555; margin:0; 
                }
                .step { 
                    text-align:center; max-width:200px; 
                }
                .step-number { 
                    display:inline-flex; align-items:center; justify-content:center;
                    width:48px; height:48px; background:#0073aa; color:#fff; border-radius:50%;
                    font-weight:bold; margin:0 auto 12px; font-size:16px;
                }
                .step h3 { margin:0 0 8px; font-size:1.1rem; }
                .step p { margin:0; font-size:0.9rem; color:#555; }
            `}</style>
        </div>
    );
};

export default SocialShareDashboard;