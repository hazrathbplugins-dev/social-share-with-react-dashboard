import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const Customization = ({ settings, setSettings }) => {

    const availablePlatforms = ['facebook', 'twitter', 'linkedin', 'pinterest'].filter(
        (platform) => !settings.platforms.includes(platform)
    );

    // Handle drag end for both selection and reordering
    const onDragEnd = (result) => {
        const { source, destination } = result;

        // Exit if dropped outside a droppable area
        if (!destination) return;

        // Moving within the same list (reordering selected platforms)
        if (source.droppableId === destination.droppableId && source.droppableId === 'selected-platforms') {
            const reorderedPlatforms = Array.from(settings.platforms);
            const [movedPlatform] = reorderedPlatforms.splice(source.index, 1);
            reorderedPlatforms.splice(destination.index, 0, movedPlatform);
            setSettings((prev) => ({ ...prev, platforms: reorderedPlatforms }));
        }

        // Moving from available to selected
        if (source.droppableId === 'available-platforms' && destination.droppableId === 'selected-platforms') {
            const movedPlatform = availablePlatforms[source.index];
            const updatedPlatforms = [...settings.platforms];
            updatedPlatforms.splice(destination.index, 0, movedPlatform);
            setSettings((prev) => ({ ...prev, platforms: updatedPlatforms }));
        }

        // Moving from selected to available
        if (source.droppableId === 'selected-platforms' && destination.droppableId === 'available-platforms') {
            const updatedPlatforms = Array.from(settings.platforms);
            updatedPlatforms.splice(source.index, 1);
            setSettings((prev) => ({ ...prev, platforms: updatedPlatforms }));
        }
    };

    const handleStyleChange = (e) => {
        setSettings((prev) => ({ ...prev, buttonStyle: e.target.value }));
    };

    const handleBgColorChange = (e) => {
        setSettings((prev) => ({ ...prev, buttonBgColor: e.target.value }));
    };

    const handleColorChange = (e) => {
        setSettings((prev) => ({ ...prev, buttonColor: e.target.value }));
    }

    const handleSizeChange = (e) => {
        setSettings((prev) => ({ ...prev, buttonSize: e.target.value }));
    };

    const handleButtonTypeChange = (type) => {
        setSettings((prev) => ({ ...prev, buttonType: type }));
    };

    const handleButtonLayoutChange = (type) => {
        setSettings((prev) => ({ ...prev, buttonLayout: type }));
    };

    const saveSettings = () => {
        // Make an AJAX call to save settings to WordPress
        fetch(ajaxurl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                action: 'save_social_share_settings',
                nonce: window.socialShareSettings.nonce,
                settings: JSON.stringify(settings),
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    alert('Settings saved successfully!');
                } else {
                    alert('Error saving settings.');
                }
            });
    };

    return (
        <div className="customization">
            <div className="card-header">
                <h2><i class="fa-regular fa-pen-to-square"></i>Customize Social Share Buttons</h2>
            </div>
            <div className="customizatiom-form-area">
                <div className="form-group">
                    <label>Drag Platforms to Select and Reorder:</label>
                    <DragDropContext onDragEnd={onDragEnd}>
                        <div className="platforms-container">
                            {/* Available Platforms */}
                            <div className="platform-list">
                                <h4>Available Platforms</h4>
                                <Droppable droppableId="available-platforms">
                                    {(provided) => (
                                        <div
                                            {...provided.droppableProps}
                                            ref={provided.innerRef}
                                            className="droppable-area"
                                        >
                                            {availablePlatforms.map((platform, index) => (
                                                <Draggable key={platform} draggableId={platform} index={index}>
                                                    {(provided) => (
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            className="platform-item"
                                                        >
                                                            {platform.charAt(0).toUpperCase() + platform.slice(1)}
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Droppable>
                            </div>
                            {/* Selected Platforms */}
                            <div className="platform-list">
                                <h4>Selected Platforms</h4>
                                <Droppable droppableId="selected-platforms">
                                    {(provided) => (
                                        <div
                                            {...provided.droppableProps}
                                            ref={provided.innerRef}
                                            className="droppable-area"
                                        >
                                            {settings.platforms.map((platform, index) => (
                                                <Draggable key={platform} draggableId={platform} index={index}>
                                                    {(provided) => (
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            className="platform-item"
                                                        >
                                                            {platform.charAt(0).toUpperCase() + platform.slice(1)}
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Droppable>
                            </div>
                        </div>
                    </DragDropContext>
                </div>
                <div className="grid-column-wrapper">
                    <div className="form-group">
                        <label>Button Type:</label>
                        <div className="button-type-options">
                            {['text', 'icon-text', 'icon'].map((type) => (
                                <div
                                    key={type}
                                    className={`button-type-option ${settings.buttonType === type ? 'selected' : ''}`}
                                    onClick={() => handleButtonTypeChange(type)}
                                >
                                    {type === 'text' && 'Text'}
                                    {type === 'icon-text' && (
                                        <>
                                            <span className="button-icon">
                                                <i className="fab fa-facebook-f"></i>
                                            </span>
                                            Text
                                        </>
                                    )}
                                    {type === 'icon' && (
                                        <span className="button-icon">
                                            <i className="fab fa-facebook-f"></i>
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Button Layout:</label>
                        <div className="button-type-options">
                            {['horizontal', 'vertical',].map((type) => (
                                <div
                                    key={type}
                                    className={`button-type-option ${settings.buttonLayout === type ? 'selected' : ''}`}
                                    onClick={() => handleButtonLayoutChange(type)}
                                >
                                    {type === 'horizontal' && (
                                        <>
                                            <span className="button-icon">
                                                <i class="fa-solid fa-ellipsis"></i>
                                            </span>
                                        </>
                                    )}
                                    {type === 'vertical' && (
                                        <span className="button-icon">
                                            <i class="fa-solid fa-ellipsis-vertical"></i>
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Button Style:</label>
                        <select value={settings.buttonStyle} onChange={handleStyleChange}>
                            <option value="square">Square</option>
                            <option value="rounded">Rounded</option>
                            <option value="circle">Circle</option>
                        </select>
                    </div>
                </div>
                <div className="grid-column-wrapper">
                    <div className="form-group">
                        <label>Button Background Color:</label>
                        <input
                            type="color"
                            value={settings.buttonBgColor}
                            onChange={handleBgColorChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Button Color:</label>
                        <input
                            type="color"
                            value={settings.buttonColor}
                            onChange={handleColorChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Button Size:</label>
                        <select value={settings.buttonSize} onChange={handleSizeChange}>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                        </select>
                    </div>
                </div>
                <button onClick={saveSettings}>Save Settings</button>
            </div>
        </div>
    );
};

export default Customization;