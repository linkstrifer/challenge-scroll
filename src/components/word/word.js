import { letterContainer } from "./styles.module.css";
import { useSpring, animated } from "react-spring";

import Dot from "./dot";

function Letters({ children, x, range }) {
  const { value } = useSpring({ value: x });

  return (
    <div>
      {children.split("").map((letter, index) => (
        <div className={letterContainer} key={`${letter}-${index}`}>
          {letter === "i" && <Dot range={range} x={x} delay={5 * index} />}
          <animated.div
            style={{
              transform: value
                .interpolate({ range, output: [100, 100, 0, 0] })
                .interpolate((x) => `translateY(${x * (index + 1)}px)`),
              opacity: value.interpolate({ range, output: [0, 0, 1, 1] }),
            }}
          >
            {letter === "i" ? "ı" : letter}
          </animated.div>
        </div>
      ))}
    </div>
  );
}

export default Letters;
