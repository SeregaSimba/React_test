import "./header.css";

export function Header() {
  const cash = `$: ${1000}`;
  const name = "???";
  const currentDate = new Date();

  return (
    <div className="header-section">
      <div className="header-avatar-container">
        <img className="Header-Avatar" src="#" alt="Avatar" />
        <div className="header-cash-container">
          <div>{name}</div>
          <div>{cash}</div>
          <div>{}</div>
        </div>
      </div>
      <div className="header-control-container">
        <div className="header-currentDate">{currentDate.toDateString()}</div>
        <div className="header-search-container">
          <div className="header-search">?</div>
          <input className="header-search-input" />
        </div>
        <div className="header-navigation">@</div>
      </div>
    </div>
  );
}
