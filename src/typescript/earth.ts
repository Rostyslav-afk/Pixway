// CANVAS SETTIGNS
const earthCanvas = document.getElementById(
  'earth-canvas'
) as HTMLCanvasElement;
const earthContext = earthCanvas.getContext('2d') as CanvasRenderingContext2D;

earthCanvas.width = window.innerWidth;
earthCanvas.height = window.innerHeight;
earthContext.fillStyle = '#CBFBF1';
earthContext.fillRect(0, 0, earthCanvas.width, earthCanvas.height);
