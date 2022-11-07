import "./Navigation.css";

export default function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <img className="icons" src="/icons/home.png" alt="home icon" />
        </li>
        <li>
          <img
            className="icons"
            src="/icons/bookmark.png"
            alt="bookmark icon"
          />
        </li>
        <li>
          <img className="icons" src="/icons/add.png" alt="add icon" />
        </li>
        <li>
          <img className="icons" src="/icons/user.png" alt="profile icon" />
        </li>
      </ul>
    </nav>
  );
}
