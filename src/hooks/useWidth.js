import React from "react";

export default function useWidth() {
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    const pollForWidth = () => {
      if (typeof window !== "undefined" && window.innerWidth) {
        setWidth(window.innerWidth);
      } else {
        // If window or window.innerWidth is not defined, try again after 100ms
        setTimeout(pollForWidth, 100);
      }
    };

    pollForWidth();
  }, []);

  React.useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width;
}
