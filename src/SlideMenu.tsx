import { useState, useCallback } from "react";
import classNames from "classnames";

import "./SlideMenu.css";

const SlideMenu = () => {
  const [isSlideMenuExpanded, setIsSideMenuExpanded] = useState(true);

  const onToggleSideMenu = useCallback(() => {
    setIsSideMenuExpanded((wasExpanded) => !wasExpanded);
  }, []);

  return (
    <aside
      className={classNames("slideMenu", { isExpanded: isSlideMenuExpanded })}
    >
      <div>
        <header className="logo">Logo</header>
        <nav>
          <ul>
            <li>Menu 1</li>
            <li>Menu 2</li>
            <li>Menu 3</li>
          </ul>
        </nav>
      </div>
      <div>
        <footer>
          <button className="slideMenuToggle" onClick={onToggleSideMenu}>
            Toggle
          </button>
        </footer>
      </div>
    </aside>
  );
};

export default SlideMenu;
