/**
 * NextMerch Global - Navigation & Dynamic Tab Routing Handler
 */
document.addEventListener("DOMContentLoaded", () => {
    // 1. Mobile Menu / Burger Toggle Logic
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinksContainer = document.querySelector(".nav-links");

    if (menuToggle && navLinksContainer) {
        menuToggle.addEventListener("click", () => {
            navLinksContainer.classList.toggle("active");
            menuToggle.classList.toggle("is-active");
        });
    }

    // 2. Dropdown Interaction and Blank Tab Enforcement
    // Target both standard layout dropdowns and nested industry selections
    const targetDropdowns = document.querySelectorAll(".dropdown-menu a, .dropdown a, [data-dynamic-link]");
    
    targetDropdowns.forEach(link => {
        const hrefValue = link.getAttribute("href");
        
        // Skip placeholders or page-hash anchors
        if (!hrefValue || hrefValue === "#" || hrefValue.startsWith("#")) {
            return;
        }

        // If the link belongs to industries or divisions sub-folders, open in a new tab
        if (hrefValue.includes("/industries/") || hrefValue.includes("/divisions/")) {
            link.setAttribute("target", "_blank");
            link.setAttribute("rel", "noopener noreferrer");
        }
    });

    console.log("NextMerch Navigation System successfully mounted.");
});
