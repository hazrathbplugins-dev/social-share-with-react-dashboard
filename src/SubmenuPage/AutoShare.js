import { useState } from "react";

const AutoShare = () => {
    const [autoShareEnabled, setAutoShareEnabled] = useState(false);

    const [fbAppId, setFbAppId] = useState('');
    const [fbAppSecret, setFbAppSecret] = useState('');
    const [fbAccessToken, setFbAccessToken] = useState('');
    const [fbPageId, setFbPageId] = useState('');
    const [autoShareFacebook, setAutoShareFacebook] = useState(false);

    const [xApiKey, setXApiKey] = useState('');
    const [xApiSecret, setXApiSecret] = useState('');
    const [xAccessToken, setXAccessToken] = useState('');
    const [xAccessSecret, setXAccessSecret] = useState('');
    const [bearerToken, setBearerToken] = useState('');
    const [xAutoShareTwitter, setXAutoShareTwitter] = useState(false);

    // LinkedIn Settings
    const [linkedinClientId, setLinkedinClientId] = useState('');
    const [linkedinClientSecret, setLinkedinClientSecret] = useState('');
    const [linkedinAccessToken, setLinkedinAccessToken] = useState('');
    const [linkedinCompanyId, setLinkedinCompanyId] = useState('');
    const [linkedinAutoShare, setLinkedinAutoShare] = useState(false);

    // Pinterest Settings
    const [pinterestAppId, setPinterestAppId] = useState('');
    const [pinterestAppSecret, setPinterestAppSecret] = useState('');
    const [pinterestAccessToken, setPinterestAccessToken] = useState('');
    const [pinterestBoardId, setPinterestBoardId] = useState('');
    const [pinterestAutoShare, setPinterestAutoShare] = useState(false);

    const handleAutoShareSettingOption = (e) => {
        setAutoShareEnabled(e.target.checked)
    }
    return (
        <>
            <div className="card-header">
                <h2><i class="fa-solid fa-arrow-up-from-bracket"></i>Auto Social Share</h2>
            </div>
            <div className="auto-share-setting-area">
                <div className="form-group" style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <input
                            type="checkbox"
                            checked={autoShareEnabled}
                            onChange={handleAutoShareSettingOption}
                        />
                        Enable Auto Share
                    </label>
                    <small style={{ color: '#666' }}>
                        Automatically share posts to connected social accounts when published.
                    </small>
                </div>
                <div className="form-group">
                    <h3>Facebook Auto Share Settings</h3>

                    <label>Facebook App ID:</label>
                    <input
                        type="text"
                        value={fbAppId}
                        onChange={(e) => setFbAppId(e.target.value)}
                        placeholder="Enter your Facebook App ID"
                    />

                    <label>Facebook App Secret:</label>
                    <input
                        type="password"
                        value={fbAppSecret}
                        onChange={(e) => setFbAppSecret(e.target.value)}
                        placeholder="Enter your Facebook App Secret"
                    />

                    <label>Access Token:</label>
                    <input
                        type="text"
                        value={fbAccessToken}
                        onChange={(e) => setFbAccessToken(e.target.value)}
                        placeholder="Enter a valid Access Token"
                    />

                    <label>Page ID (optional):</label>
                    <input
                        type="text"
                        value={fbPageId}
                        onChange={(e) => setFbPageId(e.target.value)}
                        placeholder="Enter Facebook Page ID"
                    />

                    <div style={{ marginTop: '10px' }}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <input
                                type="checkbox"
                                checked={autoShareFacebook}
                                onChange={(e) => setAutoShareFacebook(e.target.checked)}
                            />
                            Enable Auto Share to Facebook
                        </label>
                    </div>
                </div>
                <div className="form-group">
                    <h3>Twitter (X) Auto Share Settings</h3>

                    <label>API Key (Consumer Key):</label>
                    <input
                        type="text"
                        value={xApiKey}
                        onChange={(e) => setXApiKey(e.target.value)}
                        placeholder="Enter your Twitter API Key"
                    />

                    <label>API Secret Key (Consumer Secret):</label>
                    <input
                        type="password"
                        value={xApiSecret}
                        onChange={(e) => setXApiSecret(e.target.value)}
                        placeholder="Enter your API Secret Key"
                    />

                    <label>Access Token:</label>
                    <input
                        type="text"
                        value={xAccessToken}
                        onChange={(e) => setXAccessToken(e.target.value)}
                        placeholder="Enter Access Token"
                    />

                    <label>Access Token Secret:</label>
                    <input
                        type="password"
                        value={xAccessSecret}
                        onChange={(e) => setXAccessSecret(e.target.value)}
                        placeholder="Enter Access Token Secret"
                    />

                    <label>Bearer Token (optional):</label>
                    <input
                        type="text"
                        value={bearerToken}
                        onChange={(e) => setBearerToken(e.target.value)}
                        placeholder="Enter Bearer Token"
                    />

                    <div style={{ marginTop: '10px' }}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <input
                                type="checkbox"
                                checked={xAutoShareTwitter}
                                onChange={(e) => setXAutoShareTwitter(e.target.checked)}
                            />
                            Enable Auto Share to Twitter
                        </label>
                    </div>
                </div>
                <h3>Linkedin Auto Share Settings</h3>
                <label>LinkedIn Client ID:</label>
                <input type="text" value={linkedinClientId} onChange={e => setLinkedinClientId(e.target.value)} />

                <label>LinkedIn Client Secret:</label>
                <input type="password" value={linkedinClientSecret} onChange={e => setLinkedinClientSecret(e.target.value)} />

                <label>Access Token:</label>
                <input type="text" value={linkedinAccessToken} onChange={e => setLinkedinAccessToken(e.target.value)} />

                <label>Company Page ID (optional):</label>
                <input type="text" value={linkedinCompanyId} onChange={e => setLinkedinCompanyId(e.target.value)} />

                <label>
                    <input type="checkbox" checked={linkedinAutoShare} onChange={e => setLinkedinAutoShare(e.target.checked)} />
                    Enable Auto Share
                </label>
                <h3>Pinterest Auto Share Settings</h3>
                <label>Pinterest App ID:</label>
                <input type="text" value={pinterestAppId} onChange={e => setPinterestAppId(e.target.value)} />

                <label>Pinterest App Secret:</label>
                <input type="password" value={pinterestAppSecret} onChange={e => setPinterestAppSecret(e.target.value)} />

                <label>Access Token:</label>
                <input type="text" value={pinterestAccessToken} onChange={e => setPinterestAccessToken(e.target.value)} />

                <label>Board ID:</label>
                <input type="text" value={pinterestBoardId} onChange={e => setPinterestBoardId(e.target.value)} />

                <label>
                    <input type="checkbox" checked={pinterestAutoShare} onChange={e => setPinterestAutoShare(e.target.checked)} />
                    Enable Auto Share
                </label>
                <button className="btn btn-primary" style={{ marginTop: '15px' }}>
                    Save Settings
                </button>
            </div>
        </>
    )
}
export default AutoShare;