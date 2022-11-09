import "./Navigation.css";

export default function Navigation({ currentPage, onNavChange }) {
  return (
    <footer>
      <nav className="navigation">
        <ul>
          <li>
            <div>
              <img
                src="/icons/home.png"
                alt="home icon"
                className={currentPage === "home" ? "current-page" : "icon"}
                onClick={() => onNavChange("home")}
              />
            </div>
          </li>
          <li>
            <div>
              <img
                src="/icons/bookmark.png"
                alt="bookmark icon"
                className={
                  currentPage === "bookmarks" ? "current-page" : "icon"
                }
                onClick={() => onNavChange("bookmarks")}
              />
            </div>
          </li>
          <li>
            <div>
              <img
                src="/icons/add.png"
                alt="add icon"
                className={currentPage === "addcards" ? "current-page" : "icon"}
                onClick={() => onNavChange("addcards")}
              />
            </div>
          </li>
          <li>
            <div>
              <img
                src="/icons/user.png"
                alt="profile icon"
                className={
                  currentPage === "profilepage" ? "current-page" : "icon"
                }
                onClick={() => onNavChange("profilepage")}
              />
            </div>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
