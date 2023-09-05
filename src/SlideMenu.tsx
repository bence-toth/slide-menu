import { useState, useCallback } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import {
  BsArrowLeft,
  BsFillHouseFill,
  BsFillBriefcaseFill,
  BsFillChatRightTextFill,
} from "react-icons/bs";
import SlideMenuItem from "./SlideMenuItem";

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
              <SlideMenuItem
                icon={<BsFillHouseFill />}
                label="Menu item"
                isSlideMenuExpanded={isSlideMenuExpanded}
              />
            </li>
            <li>
              <SlideMenuItem
                icon={<BsFillBriefcaseFill />}
                label="Other menu item"
                isSlideMenuExpanded={isSlideMenuExpanded}
              />
            </li>
            <li>
              <SlideMenuItem
                icon={<BsFillChatRightTextFill />}
                label="Yet another menu"
                isSlideMenuExpanded={isSlideMenuExpanded}
              />
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
