import {createRoot} from 'react-dom/client';
import App from './App';
import './welcome.scss';

document.addEventListener('DOMContentLoaded', () => {
    const welcomePageWrapper = document.getElementById("welcomeSettingsWrapper");
    console.log('yah');
    
    if ( welcomePageWrapper ) {
        createRoot(welcomePageWrapper).render(<App />);
    }
});
