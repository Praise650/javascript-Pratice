const breakpoints = {
    670: 'path/to/your-670.css',
    1024: 'path/to/your-1024.css',
    // Add more breakpoints as needed
  };
  
  function loadCSSForBreakpoints() {
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  
    for (const breakpoint in breakpoints) {
      if (viewportWidth >= parseInt(breakpoint)) {
        loadCSS(breakpoints[breakpoint]);
      }
    }
  }
  
  function loadCSS(cssPath) {
    const cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    cssLink.href = cssPath;
    document.head.appendChild(cssLink);
  }
  
  window.addEventListener('resize', loadCSSForBreakpoints);
  window.addEventListener('DOMContentLoaded', loadCSSForBreakpoints);
  