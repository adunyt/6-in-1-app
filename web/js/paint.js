window.onload = function () {


  var canvas = document.getElementById("paint-canvas");
  var context = canvas.getContext("2d");
  var boundings = canvas.getBoundingClientRect();


  var mouseX = 0;
  var mouseY = 0;
  context.strokeStyle = 'black';
  context.lineWidth = 1;
  var isDrawing = false;

  window.addEventListener('resize', resizeCanvas, false);

  function resizeCanvas() {
    let oldDrawning = canvas.cloneNode(true);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 54;
    console.log("жмыхнулись");
    let newDrawing = canvas.getContext("2d");
    newDrawing.drawImage(oldDrawning, 0, 0);
    console.log("перерисовываем");
  }

  resizeCanvas();
  var colors = document.getElementsByClassName('colors')[0];

  colors.addEventListener('click', function (event) {
    context.strokeStyle = event.target.value || 'black';
  });


  var brushes = document.getElementsByClassName('brushes')[0];

  brushes.addEventListener('click', function (event) {
    context.lineWidth = event.target.value || 1;
  });


  canvas.addEventListener('mousedown', function (event) {
    setMouseCoordinates(event);
    isDrawing = true;

    context.beginPath();
    context.moveTo(mouseX, mouseY);
  });


  canvas.addEventListener('mousemove', function (event) {
    setMouseCoordinates(event);

    if (isDrawing) {
      context.lineTo(mouseX, mouseY);
      context.stroke();
    }
  });


  canvas.addEventListener('mouseup', function (event) {
    setMouseCoordinates(event);
    isDrawing = false;
  });


  function setMouseCoordinates(event) {
    mouseX = event.clientX - boundings.left;
    mouseY = event.clientY - boundings.top;
  }

  var clearButton = document.getElementById('clear');

  clearButton.addEventListener('click', function () {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });


  var saveButton = document.getElementById('save');

  saveButton.addEventListener('click', function () {
    var imageName = prompt('Придумайте название для данной картины');
    var canvasDataURL = canvas.toDataURL();
    var a = document.createElement('a');
    a.href = canvasDataURL;
    a.download = imageName || 'drawing';
    a.click();
  });
};