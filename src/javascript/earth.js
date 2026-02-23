// CANVAS SETTIGNS
const earthCanvas = document.getElementById('earth-canvas');
const earthContext = earthCanvas.getContext('2d');
earthCanvas.width = window.innerWidth;
earthCanvas.height = window.innerHeight;
earthContext.fillStyle = '#CBFBF1';
earthContext.fillRect(0, 0, earthCanvas.width, earthCanvas.height);
export {};
//# sourceMappingURL=earth.js.map