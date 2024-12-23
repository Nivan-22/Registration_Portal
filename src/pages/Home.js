import React from 'react';
import './Pages.css';

function Home() {
  return (
    <div className="container">
      <div className="header">
        <div className="user-info">
          <div className="user-icon">
            <span className="nb">NB</span>
          </div>
          <div className="user-name">
            Welcome back,
            <br />
            NAVIN K B
          </div>
        </div>
      </div>
      <div className="content">
        <div className="card">
          <h3>Student Dashboard</h3>
          <p>Login: <a href="#">Student dashboard</a> to view your individual performance.</p>
        </div>
        <div className="card">
          <h3>For Any Support,</h3>
          <p>(Academic/Non-Academic/Personal)</p>
          <p>Login: <a href="https://supportdesk.bitsathy.ac.in">https://supportdesk.bitsathy.ac.in</a></p>
        </div>
      </div>
      <div className="footer">
        <p>BIT Information Portal v4.31.3 (Silver Surfer). © 2024 IT - Operations, Bannari Amman Institute of Technology</p>
      </div>
      <div className="windows-activation">
        <p>Activate Windows</p>
        <p>Go to Settings to activate Windows.</p>
      </div>
    </div>
  );
}

export default Home;