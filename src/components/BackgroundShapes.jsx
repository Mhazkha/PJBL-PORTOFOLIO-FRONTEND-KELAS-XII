import React from "react";

function BackgroundShapes() {
  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: -1, pointerEvents: "none", overflow: "hidden" }}>
      {/* Rectangles */}
      <img src="/Rectangle.svg" style={{ position: "absolute", top: "-2%", left: "25%", width: "160px", opacity: 0.85 }} alt="" />
      <img src="/Rectangle.svg" style={{ position: "absolute", top: "45%", right: "-3%", width: "140px", transform: "rotate(45deg)", opacity: 0.85 }} alt="" />
      
      {/* Stars */}
      <img src="/star.svg" style={{ position: "absolute", top: "15%", left: "4%", width: "55px" }} alt="" />
      <img src="/star.svg" style={{ position: "absolute", top: "8%", right: "28%", width: "40px" }} alt="" />
      <img src="/star.svg" style={{ position: "absolute", bottom: "15%", left: "8%", width: "70px" }} alt="" />
      <img src="/star.svg" style={{ position: "absolute", top: "60%", right: "18%", width: "50px" }} alt="" />

      {/* Crosses */}
      <img src="/Cross.svg" style={{ position: "absolute", top: "12%", right: "8%", width: "45px" }} alt="" />
      <img src="/Cross.svg" style={{ position: "absolute", top: "32%", left: "18%", width: "55px" }} alt="" />
      <img src="/Cross.svg" style={{ position: "absolute", bottom: "25%", right: "5%", width: "65px" }} alt="" />

      {/* Polygons (Triangles) */}
      <img src="/Polygon.svg" style={{ position: "absolute", top: "28%", left: "3%", width: "80px", transform: "rotate(-15deg)" }} alt="" />
      <img src="/Polygon.svg" style={{ position: "absolute", bottom: "35%", right: "25%", width: "95px", transform: "rotate(20deg)" }} alt="" />

      {/* Polygon Strokes */}
      <img src="/Polygon(stroke).svg" style={{ position: "absolute", top: "20%", left: "-6%", width: "260px" }} alt="" />
      <img src="/Polygon(stroke).svg" style={{ position: "absolute", bottom: "-5%", right: "-8%", width: "280px", transform: "rotate(105deg)" }} alt="" />
    </div>
  );
}

export default BackgroundShapes;