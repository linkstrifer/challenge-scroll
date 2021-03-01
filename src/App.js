import { useEffect, useState } from "react";
import { container } from "./styles.module.css";

import Word from "./components/word";
import Test from "./components/test";

export default function App() {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      requestAnimationFrame(() => {
        setPosition(window.scrollY);
      });
    });
  }, [setPosition]);

  return (
    <div className={container}>
      <Test height={window.innerHeight} />
      <Word position={position} />
    </div>
  );
}
