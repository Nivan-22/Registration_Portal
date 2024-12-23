import React from 'react';

function Products() {
  return (
    <div className="app">
      <div className="header">
        <div className="profile">
          <div className="profile-icon">
            <span>NB</span>
          </div>
          <div className="profile-info">
            <p>Welcome back,</p>
            <h3>NAVIN K B</h3>
          </div>
        </div>
        <div className="options">
          <div className="option">
            <h3>Student Dashboard</h3>
            <p>Login: Student dashboard to view your individual performance.</p>
          </div>
          <div className="option">
            <h3>For Any Support,</h3>
            <p>(Academic/Non-Academic/Personal)</p>
            <p>Login: <a href="https://supportdesk.bitsathy.ac.in">https://supportdesk.bitsathy.ac.in</a></p>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>BIT Information Portal v4.31.3 (Silver Surfer). © 2024 IT - Operations, Bannari Amman Institute of Technology</p>
      </div>
      <div className="activation-message">
        <p>Activate Windows</p>
        <p>Go to Settings to activate Windows.</p>
      </div>
    </div>
  );
}

export default Products;