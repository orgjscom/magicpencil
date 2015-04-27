(function() {
    var requestAnimationFrame = window.requestAnimationFrame ||
        window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
}());


$(function(){
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d');
    $(document).delegate("#autoDrawCircle", "click", function(){
        drawCircle(canvas,context,100, 100)
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.restore();
        context.closePath();
    })
    $(document).delegate("#autoDrawRectangle", "click", function(){
        drawRect(canvas,context)
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.restore();
        context.closePath();
    })
});

