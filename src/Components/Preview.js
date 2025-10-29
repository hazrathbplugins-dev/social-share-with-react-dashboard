import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faPinterestP } from '@fortawesome/free-brands-svg-icons';

const Preview = ({ settings, setSettings }) => {

  useEffect(() => {
    // Fetch initial settings from WordPress (optional)
    fetch(ajaxurl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        action: 'get_social_share_settings',
        nonce: window.socialShareSettings.nonce,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success && data.data) {
          setSettings(data.data);
        }
      });
  }, []);

  const getButtonStyle = () => {
    switch (settings.buttonStyle) {
      case 'rounded':
        return { borderRadius: '10px' };
      case 'circle':
        return { borderRadius: '50%' };
      default:
        return { borderRadius: '0' };
    }
  };

  const getButtonSize = () => {
    switch (settings.buttonSize) {
      case 'small':
        return { padding: '5px 10px', fontSize: '14px' };
      case 'large':
        return { padding: '15px 30px', fontSize: '18px' };
      default:
        return { padding: '10px 20px', fontSize: '16px' };
    }
  };

  const getIconButtonSize = () => {
    switch (settings.buttonSize) {
      case 'small':
        return { padding: '10px', fontSize: '14px' };
      case 'large':
        return { padding: '30px', fontSize: '18px' };
      default:
        return { padding: '20px', fontSize: '16px' };
    }
  }

  const getPlatformIcon = (platform) => {
    switch (platform) {
      case 'facebook':
        return <FontAwesomeIcon icon={faFacebookF} />;
      case 'twitter':
        return <FontAwesomeIcon icon={faTwitter} />;
      case 'linkedin':
        return <FontAwesomeIcon icon={faLinkedinIn} />;
      case 'pinterest':
        return <FontAwesomeIcon icon={faPinterestP} />;
      default:
        return null;
    }
  };

  const getButtonContent = (platform) => {
    const text = `Share on ${platform.charAt(0).toUpperCase() + platform.slice(1)}`;
    const icon = getPlatformIcon(platform);

    switch (settings.buttonType) {
      case 'icon-text':
        return (
          <>
            <span className="button-icon button-icon-text">{icon}</span>
            <span>{text}</span>
          </>
        );
      case 'icon':
        return <span className="button-icon">{icon}</span>;
      case 'text':
      default:
        return text;
    }
  };

  return (
    <div className="live-preview">
      <div className='card-header'>
        <h2><i class="fa-solid fa-eye"></i>Live Preview</h2>
      </div>
      <div className={`button-preview ${settings.buttonLayout === 'horizontal'? 'dir-row' : 'dir-column'}`}>
        {settings.platforms.map((platform) => (
          <button
            className = { settings.buttonType == 'icon' ? 'icon-only':'text-button'}
            key={platform}
            style={{
              backgroundColor: settings.buttonBgColor,
              color: settings.buttonColor,
              margin: '5px',
              ...getButtonStyle(),
              ...(settings?.buttonType == 'icon') ? getIconButtonSize() : getButtonSize(),
            }}
          >
            {getButtonContent(platform)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Preview;