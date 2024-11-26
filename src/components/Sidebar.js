import React, { useEffect } from 'react';
import '../styles/Sidebar.css';

function Sidebar() {
  const openNav = () => {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  };

  const closeNav = () => {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebar = document.getElementById("mySidebar");
      if (sidebar && !sidebar.contains(event.target) && sidebar.style.width === "250px") {
        closeNav();
      }
    };

    // Add event listener for clicks outside
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* Open Sidebar Button */}
      <button className="w3-button w3-xlarge" onClick={openNav}>
        ☰
      </button>

      {/* Sidebar */}
      <div className="w3-sidebar w3-bar-block w3-light-grey" id="mySidebar" style={{ width: '0' }}>
        <button className="w3-bar-item w3-button w3-large" onClick={closeNav}>
          &times;
        </button>
        <a href="#" className="w3-bar-item w3-button">Home</a>
        <a href="#" className="w3-bar-item w3-button">Services</a>
        <a href="#" className="w3-bar-item w3-button">About</a>
        <a href="#" className="w3-bar-item w3-button">Contact</a>
      </div>

      {/* Main Content */}
      <div id="main" style={{ marginLeft: '0', transition: 'margin-left 0.3s' }}>
      </div>
    </div>
  );
}

export default Sidebar;
