(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) return;
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) processPreload(link);
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") continue;
      for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
    }
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep) return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
function initApp() {
  setupMobileMenu();
}
function setupMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const sidebar = document.getElementById("sidebar");
  if (mobileMenuBtn && sidebar) {
    mobileMenuBtn.addEventListener("click", () => {
      sidebar.classList.toggle("-translate-x-full");
    });
    document.addEventListener("click", (e) => {
      if (!sidebar.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        if (!sidebar.classList.contains("-translate-x-full")) {
          sidebar.classList.add("-translate-x-full");
        }
      }
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        sidebar.classList.add("-translate-x-full");
      }
    });
  }
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}
//# sourceMappingURL=main-DuAhTmAG.js.map
