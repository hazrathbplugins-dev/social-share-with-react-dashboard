import { createRoot } from "react-dom/client";
<<<<<<< HEAD
import App from "./App";
=======
>>>>>>> fa84eb57c53eeb797adaa44c5e58d7df90c2fbb3

document.addEventListener("DOMContentLoaded", () => {
    const settingPageWrapper = document.getElementById("reactiveAdminDashboardSubMenuPageWrapper");
    if (settingPageWrapper) {
<<<<<<< HEAD
        createRoot(settingPageWrapper).render(<App />);
=======
        createRoot(settingPageWrapper).render(<h1>Reactive Dashboard Settings Page</h1>);
>>>>>>> fa84eb57c53eeb797adaa44c5e58d7df90c2fbb3
    }
});