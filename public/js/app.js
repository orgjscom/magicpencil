$(function(){
    $.each(['#f00', '#ff0', '#0f0', '#0ff', '#00f', '#f0f', '#000', '#fff'], function() {
        $('#toolsColor #colors').append("<a href='#canvas' data-color='" + this + "' style='width: 10px; background: " + this + ";'></a>");
    });
    $.each([3, 5, 10, 15], function() {
        $('#toolsBold #bolds').append("<a href='#canvas' data-size='" + this + "' style='background: #ccc'>" + this + "</a>");
    });
    $('#canvas').sketch();

});
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

