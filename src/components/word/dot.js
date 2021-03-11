import { dot } from "./styles.module.css";
import { useSpring, animated } from "react-spring";

function Dot({ range, x, delay = 0 }) {
  const { value } = useSpring({ value: x });

  return (
    <animated.div
      className={dot}
      style={{
        transform: value
          .interpolate({
            range: range.map((val) => val - 100 + delay),
            output: [80, 70, 1, 1],
          })
          .interpolate((x) => `scale(${x})`),
      }}
    />
  );
}

export default Dot;
