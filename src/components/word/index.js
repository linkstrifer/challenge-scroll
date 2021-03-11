import { useEffect, useRef, useState } from "react";
import { word, container as containerClass } from "./styles.module.css";
import Letters from "./word";

function Word({ position: x }) {
  const container = useRef(null);
  const [range, setRange] = useState([]);

  useEffect(() => {
    const { current } = container;
    const { height, top } = current.getBoundingClientRect();
    const topPos = top + height / 2;

    setRange([
      0,
      topPos - window.innerHeight,
      topPos - window.innerHeight / 3,
      topPos - window.innerHeight / 5,
    ]);
  }, [setRange, container]);

  return (
    <div className={containerClass}>
      <h1 className={word} ref={container}>
        <Letters range={range} x={x}>
          Link
        </Letters>
      </h1>
    </div>
  );
}

export default Word;
