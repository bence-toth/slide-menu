import { useState, useCallback } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import {
  BsArrowLeft,
  BsFillHouseFill,
  BsFillBriefcaseFill,
  BsFillChatRightTextFill,
} from "react-icons/bs";

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
            <li>
              <Link className="slideMenuItem" to="/">
                <div className="icon">
                  <BsFillHouseFill />
                </div>
                <div className="label">Menu item</div>
              </Link>
            </li>
            <li>
              <Link className="slideMenuItem" to="/">
                <div className="icon">
                  <BsFillBriefcaseFill />
                </div>
                <div className="label">Other menu item</div>
              </Link>
            </li>
            <li>
              <Link className="slideMenuItem" to="/">
                <div className="icon">
                  <BsFillChatRightTextFill />
                </div>
                <div className="label">Yet another menu</div>
              </Link>
            </li>
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
