import { letter as letterClass } from "./styles.module.css";
import { useSpring, animated } from "react-spring";

function Letters({ children, x, range }) {
  const { value } = useSpring({ value: x });

  return (
    <div>
      {children.split("").map((letter, index) => (
        <animated.div
          className={letterClass}
          style={{
            transform: value
              .interpolate({ range, output: [100, 100, 0, 0] })
              .interpolate((x) => `translateY(${x * (index + 1)}px)`),
            opacity: value.interpolate({ range, output: [0, 0, 1, 1] }),
          }}
          key={`${letter}-${index}`}
        >
          {letter}
        </animated.div>
      ))}
    </div>
  );
}

export default Letters;
