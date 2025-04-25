function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
        || window.innerWidth <= 768;
}

function redirectToAppropriateVersion() {
    const currentPath = window.location.pathname;
    const isMobileDevice = isMobile();
    
    if (isMobileDevice && !currentPath.includes('/mobile/')) {
        window.location.href = '/mobile/';
    } else if (!isMobileDevice && currentPath.includes('/mobile/')) {
        window.location.href = '/';
    }
}

// Run on page load
redirectToAppropriateVersion();
