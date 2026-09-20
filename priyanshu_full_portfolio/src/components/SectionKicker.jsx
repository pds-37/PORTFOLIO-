import React from 'react';
export default function SectionKicker({ num, children, dark = false }) {
  return (
    <div className={"kicker " + (dark ? "dark" : "")}>
      <span>{num}</span><i>·</i>{children}
    </div>
  );
}