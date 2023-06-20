import "./index.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo_div">
        <img className="logo_img" src="talky_cropped.png" />
      </div>

      <section className="headerButtons_section">
        <button className="menu_button">
          <img className="menuIcon_img" src="menu_black.png" />
        </button>
      </section>
    </header>
  );
}
