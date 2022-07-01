import { useState, useCallback } from "react";
import classNames from "classnames";
import { BsArrowLeft } from "react-icons/bs";

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
            <div>
              <BsArrowLeft />
            </div>
          </button>
        </footer>
      </div>
    </aside>
  );
};

export default SlideMenu;
