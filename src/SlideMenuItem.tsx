import { useState, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";

import "./SlideMenuItem.css";

const SlideMenuItem = ({ icon, label, isSlideMenuExpanded }) => {
  const [labelWidth, setLabelWidth] = useState(0);
  const [anchorSize, setAnchorSize] = useState(48);

  const getLabelWidth = useCallback((node) => {
    setLabelWidth(node.scrollWidth);

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.contentBoxSize) {
          // Firefox implements `contentBoxSize` as a single content rect, rather than an array
          const contentBoxSize = Array.isArray(entry.contentBoxSize)
            ? entry.contentBoxSize[0]
            : entry.contentBoxSize;
          setLabelWidth(contentBoxSize.inlineSize);
        } else {
          setLabelWidth(entry.contentRect.width);
        }
      }
    });

    resizeObserver.observe(node);
  }, []);

  const renderedAnchorSize = useMemo(() => {
    if (isSlideMenuExpanded) {
      return "100%";
    }
    return `${anchorSize}px`;
  }, [anchorSize, isSlideMenuExpanded]);

  return (
    <Link
      className="slideMenuItem"
      to="/"
      onMouseEnter={() => {
        setAnchorSize(48 + labelWidth);
      }}
      onMouseLeave={() => {
        setAnchorSize(48);
      }}
      style={{
        width: renderedAnchorSize,
      }}
    >
      <div className="icon">{icon}</div>
      <div className="label" ref={getLabelWidth}>
        <div className="labelInnerWrapper">{label}</div>
      </div>
    </Link>
  );
};

export default SlideMenuItem;
