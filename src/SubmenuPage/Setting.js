import { createRoot } from "react-dom/client";

document.addEventListener("DOMContentLoaded", () => {
    const settingPageWrapper = document.getElementById("reactiveAdminDashboardSubMenuPageWrapper");
    if (settingPageWrapper) {
        createRoot(settingPageWrapper).render(<h1>Reactive Dashboard Settings Page</h1>);
    }
});