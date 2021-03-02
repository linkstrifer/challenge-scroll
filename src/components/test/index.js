function Test({ height = 100, style }) {
  return <div style={{ height: `${height}px`, ...style }} />;
}

export default Test;
