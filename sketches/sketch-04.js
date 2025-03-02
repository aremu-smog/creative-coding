const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    const cols = 4;
    const rows = 3;

    const numCells = cols * rows

    const gridw = width * 0.8
    const gridh = width * 0.8

    const cellw = gridw/cols
    const cellh = gridh/rows

    const marginx = (width - gridw) * 0.5
    const marginy = (height - gridh) * 0.5

    for(let i = 0; i < numCells; i++){
      const col = i % cols;

      const row = Math.floor(i / cols);

      const = col 
    }
  
  };
};

canvasSketch(sketch, settings);
