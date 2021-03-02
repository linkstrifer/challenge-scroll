import { useEffect, useRef, useState } from "react";
import { word, container as containerClass } from "./styles.module.css";
import Dot from "./dot";
import Letters from "./word";

function Word({ position: x }) {
  const container = useRef(null);
  const [range, setRange] = useState([]);

  useEffect(() => {
    const { current } = container;
    const offsetTop = current.offsetTop;
    const { height } = current.getBoundingClientRect();
    const top = offsetTop + height / 2;

    setRange([
      0,
      top - window.innerHeight,
      top - window.innerHeight / 3,
      top - window.innerHeight / 5,
    ]);
  }, [setRange, container]);

  return (
    <div className={containerClass}>
      <h1 className={word} ref={container}>
        <Dot range={range} x={x} />
        <Letters range={range} x={x}>
          Link
        </Letters>
      </h1>
    </div>
  );
}

export default Word;
