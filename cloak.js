(function () {
    function applySavedCloak() {
        const savedTitle = localStorage.getItem("cloakTitle");
        const savedIcon = localStorage.getItem("cloakIcon");

        if (savedTitle && document.title !== savedTitle) {
            document.title = savedTitle;
        }

        if (savedIcon !== null) {
            let link = document.querySelector("link[rel~='icon']");
            if (!link) {
                link = document.createElement("link");
                link.rel = "icon";
                document.head.appendChild(link);
            }
            if (link.href !== savedIcon) {
                link.href = savedIcon;
            }
        }
    }

    applySavedCloak();
    window.addEventListener("DOMContentLoaded", applySavedCloak);
    window.addEventListener("storage", applySavedCloak);

    const observer = new MutationObserver(applySavedCloak);
    const titleEl = document.querySelector("title");
    if (titleEl) {
        observer.observe(titleEl, { childList: true });
    }
})();
