function drawCircle(canvas,context,x, y, text, callback) {
        var circles = [];
        var radius = 75;
        var endPercent = 101;
        var curPerc = 0;
        var counterClockwise = false;
        var circ = Math.PI * 2;
        var quart = Math.PI / 2;
        context.lineWidth = 10;
        context.strokeStyle = '#ad2323';
        context.shadowOffsetX = 0;
        context.shadowOffsetY = 0;


        function animate(current) {
            context.lineWidth = 10;
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.beginPath();
            context.arc(x, y, radius, -(quart), ((circ) * current) - quart, false);
            context.stroke();
            curPerc++;
            if (circles.length) {
                for (var i = 0; i < circles.length; i++) {
                    context.lineWidth = 10;
                    context.beginPath();
                    context.arc(circles[i].x, circles[i].y, radius, -(quart), ((circ) * circles[i].curr) - quart, false);
                    context.stroke();
                }
            }
            if (curPerc < endPercent) {
                requestAnimationFrame(function () {
                    animate(curPerc / 100)
                });
            } else {
                var circle = {
                    x: x,
                    y: y,
                    curr: current,
                    text: text
                };
                circles.push(circle);
                if (callback) callback.call();
            }
        }
        animate();
    }