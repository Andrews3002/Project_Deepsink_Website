import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

function adjustRootFontSize() {
    const baseWidth = 1920; // your design width (change as needed)
    const baseFontSize = 15; // default root font size

    // scale proportionally with width
    let newFontSize = (window.innerWidth / baseWidth) * baseFontSize;

    // set a minimum and maximum size if you want
    // newFontSize = Math.max(12, Math.min(newFontSize, 20));

    document.documentElement.style.fontSize = newFontSize + "px";
    // document.documentElement.style.fontSize = baseFontSize + "px"; // set to base font size for now
}

// Run on page load
window.addEventListener("DOMContentLoaded", adjustRootFontSize);

// Run on resize
window.addEventListener("resize", adjustRootFontSize);