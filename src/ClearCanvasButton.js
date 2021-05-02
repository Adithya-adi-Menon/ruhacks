import React from 'react'
import { Form } from 'reactstrap';
import { useCanvas } from './CanvasContext';
import {Button } from 'reactstrap';

export const ClearCanvasButton = () => {
  const { clearCanvas } = useCanvas()

  return <Button onClick={clearCanvas} style={{marginLeft:"500px",marginBottom:""}}>Reset</Button>
  // return <button onClick={clearCanvas}>Reset</button>
}