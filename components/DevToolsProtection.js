"use client";

import { useEffect } from "react";

export default function DevToolsProtection() {
  useEffect(() => {
    // Disable right-click
    const disableRightClick = (e) => {
      e.preventDefault();
      showWarning();
    };

    // Disable F12, Ctrl+Shift+I, Ctrl+U, Ctrl+Shift+C
    const disableKeys = (e) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && e.key === "I") ||
        (e.ctrlKey && e.key === "u") ||
        (e.ctrlKey && e.shiftKey && e.key === "C") ||
        (e.ctrlKey && e.shiftKey && e.key === "J")
      ) {
        e.preventDefault();
        showWarning();
      }
    };

    // Show warning message
    const showWarning = () => {
      alert("🚫 Developer tools are disabled for security reasons!");
    };

    // Detect DevTools
    const detectDevTools = () => {
      const threshold = 160;
      setInterval(() => {
        if (
          window.outerHeight - window.innerHeight > threshold ||
          window.outerWidth - window.innerWidth > threshold
        ) {
          showWarning();
          document.body.innerHTML = `
            <div style="
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              display: flex;
              align-items: center;
              justify-content: center;
              z-index: 9999;
              font-family: Arial, sans-serif;
            ">
              <div style="
                text-align: center;
                color: white;
                padding: 40px;
                border-radius: 20px;
                background: rgba(255,255,255,0.1);
                backdrop-filter: blur(10px);
                border: 1px solid rgba(255,255,255,0.2);
              ">
                <h1 style="font-size: 3rem; margin-bottom: 20px;">🚫</h1>
                <h2 style="font-size: 2rem; margin-bottom: 15px;">Access Denied</h2>
                <p style="font-size: 1.2rem; margin-bottom: 20px;">Developer tools are disabled for security reasons.</p>
                <p style="font-size: 1rem; opacity: 0.8;">Please close developer tools to continue.</p>
              </div>
            </div>
          `;
        }
      }, 500);
    };

    // Disable text selection
    document.body.style.userSelect = "none";
    document.body.style.webkitUserSelect = "none";
    document.body.style.mozUserSelect = "none";
    document.body.style.msUserSelect = "none";

    // Add event listeners
    document.addEventListener("contextmenu", disableRightClick);
    document.addEventListener("keydown", disableKeys);

    // Start detection
    detectDevTools();

    // Cleanup
    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
      document.removeEventListener("keydown", disableKeys);
      document.body.style.userSelect = "";
      document.body.style.webkitUserSelect = "";
      document.body.style.mozUserSelect = "";
      document.body.style.msUserSelect = "";
    };
  }, []);

  return null;
}