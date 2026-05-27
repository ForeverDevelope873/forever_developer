import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const Backtotopbtn = () => {
  const [showButton, setShowButton] = useState(false);

  // Handle scroll event
  const handleScroll = () => {
    if (window.pageYOffset > 200) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Attach event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {showButton && (
        <Button
          onClick={scrollToTop}
          id="back-to-top-btn"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: "1000",
            height: "50px",
            width: "50px",
            borderRadius: "50%",
            fontSize: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <span className="arrow">↑</span>
        </Button>
      )}
    </div>
  );
};

export default Backtotopbtn;