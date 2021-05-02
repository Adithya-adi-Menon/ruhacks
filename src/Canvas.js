import React, { useEffect } from "react";
import { useCanvas } from "./CanvasContext";
import {Button} from 'reactstrap';
export function Canvas() {
  const {
    canvasRef,
    prepareCanvas,
    startDrawing,
    finishDrawing,
    draw,
  } = useCanvas();

  useEffect(() => {
    prepareCanvas();
  }, []);

  return (
  
    <canvas
    style={{backgroundColor:"white"}}
      onMouseDown={startDrawing}
      onMouseUp={finishDrawing}
      onMouseMove={draw}
      ref={canvasRef}
    />
    
    
  );
}