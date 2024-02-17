function Header() {
  return (
    <header className="yeeter-container">
      <h2 className="yeeter-title">Yeeter</h2>
      <p className="yeeter-description">Unruggable Crypto Crowdfunding</p>
      <p className="yeeter-subtitle">Empower Your Project</p>
      <div className="button-container">
        <a href="https://yeet-mvp.vercel.app/" className="yeeter-button">
          Explore
        </a>
        <a
          href="https://yeet-mvp.vercel.app/#/launch"
          className="yeeter-button"
        >
          Launch
        </a>
      </div>
    </header>
  );
}

export default Header;
