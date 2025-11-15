import { useEffect, useState } from "react";

const DisplaySetting = () => {
    const [postTypes, setPostTypes] = useState(['post']);
    const [selectedPostType, setSelectedPostType] = useState([]);
    const [displayCondition, setDisplayCondition] = useState('');
    const [buttonAlignment, setButtonAlignment] = useState('left');
    const [saving, setSaving] = useState(false);

    const availableCondition = [
        { value: 'before_title', label: 'Before Title' },
        { value: 'after_title', label: 'After Title' },
        { value: 'before_content', label: 'Before Post Content' },
        { value: 'after_content', label: 'After Post Content' },
        { value: 'footer', label: 'Footer' },
        { value: 'stick', label: 'Sticky' },
    ];

    useEffect(() => {
        fetch(ajaxurl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
                action: 'social_share_get_display_settings',
                nonce: window.socialShareOptionSettings.nonce,
            })
        })
        .then(r => r.json())
        .then(data => {
            if (data.success) {
                setSelectedPostType(data.data.post_types || []);
                setDisplayCondition(data.data.display_position || 'after_content');
                setButtonAlignment(data.data.alignment || 'center');
            }
        });
        fetch(
            ajaxurl,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    action: 'get_current_active_post_type',
                    nonce: window.socialShareOptionSettings.nonce,
                })
            }
        ).then((response) => response.json())
            .then((data) => {
                console.log('Response:', data.success);
                if (data.success && Array.isArray(data.data)) {
                    const filtered = data.data.filter(
                        (type) =>
                            !['attachment', 'e-floating-buttons', 'elementor_library'].includes(type)
                    );
                    setPostTypes(filtered);
                }
            })
    }, [])

    const handlePostTypeChange = (e) => {
        const selected = Array.from(e.target.selectedOptions, (option) => option.value);
        setSelectedPostType(selected);
    };

    const handleDisplayPositionChange = (e) => {
        setDisplayCondition(e.target.value);
        console.log('Selected display Condition:', e.target.value);
    };

    // Save Settings Function
    const handleSave = () => {
        setSaving(true);

        fetch(ajaxurl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
                action: 'social_share_save_display_settings',
                nonce: window.socialShareOptionSettings.nonce,
                post_types: JSON.stringify(selectedPostType),
                display_position: displayCondition,
                alignment: buttonAlignment,
            })
        })
            .then(r => r.json())
            .then(data => {
                setSaving(false);
            })
            .catch(() => {
                setSaving(false);
            });
    };

    return (
        <>
            <div className="card-header">
                <h2><i class="fa-regular fa-thumbs-up"></i>Social Share Display</h2>
            </div>
            <div className="display-setting-are">
                <div className="form-group">
                    <label>Select Post Type:</label>
                    <select value={selectedPostType} onChange={handlePostTypeChange} multiple style={{ height: '120px' }}>
                        {postTypes.length > 0 ? (
                            postTypes.map((type) => (
                                <option key={type} value={type}>
                                    {type.replace(/_/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
                                </option>
                            ))
                        ) : (
                            <option>Loading...</option>
                        )}
                    </select>
                </div>
                <div className="form-group" style={{ marginTop: '20px' }}>
                    <label>Select Display Position(s):</label>
                    <select
                        value={displayCondition}
                        onChange={handleDisplayPositionChange}
                    >
                        {availableCondition.map((pos) => (
                            <option key={pos.value} value={pos.value}>
                                {pos.label}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group" style={{ marginTop: '20px' }}>
                    <label>Button Alignment:</label>
                    <div style={{ display: 'flex', gap: '20px', marginTop: '8px' }}>
                        {['left', 'center', 'right'].map((align) => (
                            <label key={align} style={{ textTransform: 'capitalize' }}>
                                <input
                                    type="radio"
                                    name="buttonAlignment"
                                    value={align}
                                    checked={buttonAlignment === align}
                                    onChange={(e) => setButtonAlignment(e.target.value)}
                                />
                                {' '}{align}
                            </label>
                        ))}
                    </div>
                </div>
                <button
                    className="btn btn-primary"
                    onClick={handleSave}
                    disabled={saving}
                    style={{ marginTop: '15px' }}
                >
                    {saving ? 'Saving...' : 'Save Settings'}
                </button>
            </div>

        </>
    )
}
export default DisplaySetting;