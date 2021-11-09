import React, {useEffect} from "react";

export default function useWindowWidth() {

  const [width, setWidth] = React.useState(window.innerWidth);
  const resize = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    }
  }, []);

  return width;
}