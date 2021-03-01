import { useEffect, useRef, useState } from "react";
import { word, dot } from "./styles.module.css";
import { useSpring, animated } from "react-spring";

function Word({ position: x }) {
  const container = useRef(null);
  const [top, setTop] = useState(0);
  const { scale } = useSpring({ scale: x });

  useEffect(() => {
    const top = container.current.offsetTop;
    setTop(top);
  }, [setTop, container]);

  console.log(x);

  return (
    <h1 className={word} ref={container}>
      <animated.div
        className={dot}
        style={
          {
            // transform: scale.interpolate({ range: [], output: []}).interpolate((x) => `scale(${x})`)
          }
        }
      />
      Link
    </h1>
  );
}

export default Word;
