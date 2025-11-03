import { useState } from 'react';
import Customization from './Customization';
import '../assets/style.scss';
import Preview from './Preview';

function App() {
  const [settings, setSettings] = useState({
    buttonType: 'text',
    platforms: ['facebook', 'twitter', 'linkedin'],
    buttonStyle: 'square',
    buttonBgColor: '#007bff',
    buttonColor: '#ffffff',
    buttonSize: 'medium',
    iconSize: '30px',
    buttonLayout: 'horizontal',
  });
  console.log(settings);
  
  return (
    <div className="App wrap">
      <div className='dashboard-wrapper'>
        <div className='dashboard-header'>
          <div className='icon-wrapper'><i class="fa-solid fa-share"></i></div>
          <h2>Social Share Dashboard</h2>
        </div>
        <div className='container-area'>
          <div className='customization-area'>
            <Customization settings={settings} setSettings={setSettings} />
          </div>
          <div className='preview-area'>
            <Preview settings={settings} setSettings={setSettings} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;