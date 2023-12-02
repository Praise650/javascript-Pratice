const breakpoints = {
    670: 'index-mobile.css',
    1024: 'index.css',
  };
  
  function loadCSSForBreakpoints() {
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  
    // let cssToLoad = '';
  
    // Find the appropriate CSS to load based on the viewport width
    // for (const breakpoint in breakpoints) {
    //   if (viewportWidth <= parseInt(breakpoint)) {
    //     cssToLoad = breakpoints[breakpoint];
    //     break;
    //   }
    // }

    if (viewportWidth <= 670) {
        const cssToLoad = breakpoints[670];
        loadCSS(cssToLoad);
      } else{
        const cssToLoad = breakpoints[1024];
        loadCSS(cssToLoad);
      }
  
    // Load the CSS file if a valid one is found
    // if (cssToLoad) {
    //   loadCSS(cssToLoad);
    // }
  }
  
  function loadCSS(cssPath) {
    const cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    cssLink.type ='text/css';
    cssLink.href = cssPath;
    document.head.appendChild(cssLink);
  }
  
  // Load CSS initially on page load
  window.addEventListener('DOMContentLoaded', loadCSSForBreakpoints);
  
  // Load CSS when the window is resized
  window.addEventListener('resize', loadCSSForBreakpoints);
  