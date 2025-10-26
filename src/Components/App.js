import { useState } from 'react';
import Customization from './Customization';
import '../assets/style.scss';
import Preview from './Preview';

function App() {
  const [settings, setSettings] = useState({
    buttonType: 'text',
    platforms: ['facebook', 'twitter', 'linkedin'],
    buttonStyle: 'square',
    buttonColor: '#007bff',
    buttonSize: 'medium',
  });
  console.log(settings);
  
  return (
    <div className="App">
      <div className='container-area'>
        <div className='customization-area'>
          <Customization settings={settings} setSettings={setSettings} />
        </div>
        <div className='preview-area'>
          <Preview settings={settings} setSettings={setSettings} />
        </div>
      </div>
    </div>
  );
}

export default App;