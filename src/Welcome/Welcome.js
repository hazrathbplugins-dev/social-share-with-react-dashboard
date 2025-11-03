import {createRoot} from 'react-dom/client';
import App from './App';
import './welcome.scss';

document.addEventListener('DOMContentLoaded', () => {
    const welcomePageWrapper = document.getElementById("welcomeSettingsWrapper");
    
    if ( welcomePageWrapper ) {
        createRoot(welcomePageWrapper).render(<App />);
    }
});
