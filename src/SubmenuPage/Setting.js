import { createRoot } from "react-dom/client";
import App from "./App";

document.addEventListener("DOMContentLoaded", () => {
    const settingPageWrapper = document.getElementById("reactiveAdminDashboardSubMenuPageWrapper");
    if (settingPageWrapper) {
        createRoot(settingPageWrapper).render(<App />);
    }
});