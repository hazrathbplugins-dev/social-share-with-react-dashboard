import {createRoot} from 'react-dom/client';
import App from './Components/App';

document.addEventListener('DOMContentLoaded', () => {
    const elementWrapper = document.getElementById('reactiveAdminDashboardPageWrapper');
    if (elementWrapper) {
        createRoot(elementWrapper).render(<App />);
    }
})