function drawRect(canvas,context){
    var Point = function (x, y) {
        this.startX = x;
        this.startY = y;
    };
    var points = [
        new Point(100, 100),
        new Point(150, 100),
        new Point(200, 100),
        new Point(200, 150),
        new Point(200, 200),
        new Point(150, 200),
        new Point(100, 200),
        new Point(100, 150),
        new Point(100, 95)
    ];
    context.closePath()
    context.strokeStyle = "black";
    context.moveTo(points[0].startX, points[0].startY);
    context.lineWidth = 10;
    context.strokeStyle = '#ad2323';
    var counter = 1,
        inter = setInterval(function() {
            var point = points[counter++];
            context.lineTo(point.startX, point.startY);
            context.stroke();
            if (counter >= points.length) {
                clearInterval(inter);
            }
            console.log(counter);
        }, 500);
    context.stroke();
}
