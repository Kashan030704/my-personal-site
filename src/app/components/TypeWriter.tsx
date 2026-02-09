"use client";

import { useEffect, useState } from "react";

const roles = [
    "..Kashan Khan.",
  "A Full-Stack Developer..",
  "..& in Electrical Engineering.",
];

export default function Typewriter() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout:any;

    if (!deleting && charIndex < currentRole.length) {
      // typing
      timeout = setTimeout(() => {
        setText(currentRole.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 80);
    } else if (!deleting && charIndex === currentRole.length) {
      // pause before deleting
      timeout = setTimeout(() => setDeleting(true), 1200);
    } else if (deleting && charIndex > 0) {
      // deleting
      timeout = setTimeout(() => {
        setText(currentRole.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 50);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((roleIndex + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <span className="text-white font-bold">
      {text}
      <span className="animate-pulse text-lime-400">|</span>
    </span>
  );
}
