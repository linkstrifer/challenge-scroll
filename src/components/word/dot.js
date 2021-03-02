import { dot } from "./styles.module.css";
import { useSpring, animated } from "react-spring";

function Dot({ range, x }) {
  const { value } = useSpring({ value: x });

  return (
    <animated.div
      className={dot}
      style={{
        transform: value
          .interpolate({
            range,
            output: [120, 120, 1, 1],
          })
          .interpolate((x) => `scale(${x})`),
      }}
    />
  );
}

export default Dot;
