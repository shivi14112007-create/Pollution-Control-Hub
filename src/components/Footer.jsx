function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        {/* Left: Brand */}
        <div className="footer-brand">
          <h3>Pollution Control Hub</h3>
          <p>
            Monitor. Understand. Act. A community-driven platform turning air
            quality data into clear health guidance and local climate action.
          </p>
        </div>

        {/* Right: Two sections stacked vertically */}
        <div className="right-column">
          <div className="footer-links">
            <h4>PROJECT</h4>
            <ul>
              <li><a href="https://github.com/Aditya8369/Pollution-Control-Hub" target="_blank" rel="noreferrer">GitHub Repository</a></li>
              <li><a href="https://github.com/Aditya8369/Pollution-Control-Hub/issues" target="_blank" rel="noreferrer">Report an Issue</a></li>
              <li><a href="https://github.com/Aditya8369/Pollution-Control-Hub/blob/main/CONTRIBUTING.md" target="_blank" rel="noreferrer">Contributing Guide</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>DATA & SOURCES</h4>
            <ul>
              <li><a href="https://open-meteo.com/en/docs/air-quality-api" target="_blank" rel="noreferrer">Open-Meteo Air Quality API</a></li>
              <li><a href="https://github.com/Aditya8369/Pollution-Control-Hub/blob/main/LICENSE" target="_blank" rel="noreferrer">MIT License</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} Pollution Control Hub.</p>
        <p>From awareness to action — one city at a time. 🌱</p>
      </div>
    </footer>
  );
}

export default Footer;