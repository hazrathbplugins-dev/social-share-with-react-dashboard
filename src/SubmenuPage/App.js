import { useState } from 'react';
import '../assets/style.scss';
import './main.scss';
import DisplaySetting from './DisplaySetting';
import AutoShare from './AutoShare';
function App() {
  
  return (
    <div className="App">
      <div className='dashboard-wrapper'>
        <div className='dashboard-header'>
          <div className='icon-wrapper'><i class="fa-solid fa-wrench"></i></div>
          <h2>Social Share Settings</h2>
        </div>
        <div className='container-area'>
            <div className='social-share-display-setting setting-page-wrapper'>
                <DisplaySetting />
            </div>
            <div className='auto-social-share-setting setting-page-wrapper'>
                <AutoShare />
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;