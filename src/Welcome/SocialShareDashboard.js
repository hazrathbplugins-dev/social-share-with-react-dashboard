// src/dashboard/Dashboard.js
import { __ } from '@wordpress/i18n';
import {
    Card,
    CardBody,
    CardFooter,
    Button,
    Flex,
    FlexItem,
} from '@wordpress/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faPinterestP, faShare, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { post, settings, external, seen } from '@wordpress/icons';

const SocialShareDashboard = () => {
    const previewButtons = [
        { platform: 'facebook', color: '#006A67', icon: faFacebookF },
        { platform: 'twitter', color: '#006A67', icon: faTwitter },
        { platform: 'linkedin', color: '#006A67', icon: faLinkedinIn },
        { platform: 'pinterest', color: '#006A67', icon: faPinterestP },
    ];

    return (
        <div className="social-share-dashboard">
            <div className='container-area'>
                <div className='customization-area'>
                    {/* 3-Step Guide */}
                    <Card size="large" elevation={2}>
                        <div className='card-header'><h2>{__('Get Started', 'social-share')}</h2></div>
                        <CardBody>
                            <Flex gap="6" align="start">
                                {[
                                    { num: 1, title: __('Choose Platforms', 'social-share'), desc: __('Enable Facebook, X, LinkedIn, Pinterest, etc.', 'social-share') },
                                    { num: 2, title: __('Customize Style', 'social-share'), desc: __('Pick colors, size, icons, and display location.', 'social-share') },
                                    { num: 3, title: __('Auto-Share on Publish', 'social-share'), desc: __('Automatically post new content to your accounts.', 'social-share') },
                                ].map(step => (
                                    <FlexItem key={step.num}>
                                        <div className="step">
                                            <div className="step-number">{step.num}</div>
                                            <h3>{step.title}</h3>
                                            <p>{step.desc}</p>
                                        </div>
                                    </FlexItem>
                                ))}
                            </Flex>
                        </CardBody>
                        <CardFooter>
                            <Button
                                variant="primary"
                            // href={ socialShareData.adminUrl + 'admin.php?page=social-share-style' }
                            >
                                {__('Configure Style', 'social-share')}
                            </Button>
                        </CardFooter>
                    </Card>
                </div>

                <div className='preview-area'>
                    {/* Live Preview */}
                    <Card size="large" elevation={1} style={{ marginBottom: '20px' }}>
                        <div className='card-header'> <h2><i class="fa-solid fa-layer-group"></i> {__('Button Preview', 'social-share')}</h2></div>
                        <CardBody>
                            <div style={{ padding: 20, background: '#f9f9f9', borderRadius: 8, textAlign: 'center' }}>
                                <p style={{ marginBottom: 15, color: '#555' }}>
                                    {__('This is how your share buttons will look:', 'social-share')}
                                </p>
                                <div style={{ display: 'inline-flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
                                    {previewButtons.map(btn => (
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
                                            <FontAwesomeIcon icon={btn.icon} />
                                            {btn.platform.charAt(0).toUpperCase() + btn.platform.slice(1)}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                    <Card size="large" elevation={1} style={{ marginBottom: '2rem' }}>
                        <div className='card-header'><h2><i class="fa-solid fa-code"></i> {__('Shortcode', 'social-share')}</h2></div>
                        <CardBody>
                            <div style={{ padding: 20, background: '#f9f9f9', borderRadius: 8, textAlign: 'center' }}>
                                <p style={{ marginBottom: 15, color: '#555' }}>
                                    {__('This is how your share buttons Shortcode:', 'social-share')}
                                </p>
                                <div style={{ display: 'inline-flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </div>

            </div>
            <div className='dashboard-footer-area'>
                {/* Quick Links */}
                <div className='quick-links'>
                    <Button
                        variant="secondary"
                        icon={external}
                        href="https://yourplugin.com/docs"
                        target="_blank"
                    >
                        {__('Documentation', 'social-share')}
                    </Button>
                    <Button
                        variant="secondary"
                        icon={seen}
                        href="https://yourplugin.com/support"
                        target="_blank"
                    >
                        {__('Get Support', 'social-share')}
                    </Button>
                </div>

                <p>
                    {__('Social Share', 'social-share')} v1.0.0 • Built with
                    <span style={{ color: '#d63638', margin: '0 4px' }}>heart</span>
                    for WordPress
                </p>
                <div className="footer-icon">
                    <div className='iconList'>
                        <FontAwesomeIcon icon={faFacebookF} />
                    </div>
                    <div className='iconList'>
                        <FontAwesomeIcon icon={faTwitter} />
                    </div>
                    <div className='iconList'>
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </div>
                    <div className='iconList'>
                        <FontAwesomeIcon icon={faPinterestP} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialShareDashboard;