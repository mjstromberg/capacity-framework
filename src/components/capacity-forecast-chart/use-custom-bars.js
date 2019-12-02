import React from "react";

function getPath(x, y, width, height) {
  return `M${x},${y} h${width} v${height} h${-width} v${-height} Z`;
}

function getFullWidthPath({ x, y, width, height, barGap }) {
  const customY = y + (height + barGap) / 2;
  const customHeight = 3 * height + 2 * barGap;
  return getPath(x, customY, width, customHeight);
}

function getStandardPath({ x, y, width, height, barGap }) {
  const customY = y - (height + barGap) / 2;
  return getPath(x, customY, width, height);
}

export default function useCustomBars(barGap) {
  function FullWidthBar({ fill, x, y, width, height }) {
    const d = getFullWidthPath({ x, y, width, height, barGap });
    return <path d={d} fill={fill} />;
  }

  function StandardBar({ fill, x, y, width, height }) {
    const d = getStandardPath({ x, y, width, height, barGap });
    return <path d={d} fill={fill} />;
  }

  return { FullWidthBar, StandardBar };
}
