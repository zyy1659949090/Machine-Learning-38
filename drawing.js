
  window.red = new jsColor('red');
  window.redPen = new jsPen(red,1);
  window.blue = new jsColor('blue');
  window.bluePen = new jsPen(blue,1);
  window.black = new jsColor('black');
  window.blackPen = new jsPen(black,1);
  window.orange = new jsColor('#FFCC33');
  window.orangePen = new jsPen(orange,4);
  window.green = new jsColor('#00AA00');
  window.greenPen = new jsPen(green,2);
  window.pink = new jsColor('#F19CBB');
  window.pinkPen = new jsPen(pink,1);

  window.smallFont = new jsFont('sans-serif', 'normal', 'x-small');

  window.initCanvas = function() {
    if(window.gr && window.gr.clear) window.gr.clear();
    window.gr = new jsGraphics(document.getElementById('canvas'));
    window.gr.setOrigin(new jsPoint(250,250));
    window.gr.setScale(200);
    window.gr.setCoordinateSystem('cartecian');
    window.gr.showGrid(1);
  }

  window.plotLine = function(points, pen) {
    window.gr.drawLine(pen ? pen : blackPen,
    new jsPoint(points[0][0],points[0][1]),
    new jsPoint(points[1][0],points[1][1])); 
  }
  window.plotPoint = function(point, color) {
    window.gr.fillCircle(color,new jsPoint(point[0],point[1]),0.01);
  }
  window.plotCircle = function(point, pen) {
    window.gr.drawCircle(pen, new jsPoint(point[0],point[1]), 0.02);
  }