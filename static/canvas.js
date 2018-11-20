    paper.setup($('canvas')[0]);
    var points = 10;
    var length = 15;
    var tool = new Tool();
    var myPath = createWorm('#000');

    function createWorm(color) {
        var path = new paper.Path({
            strokeColor: color,
            strokeWidth: 20,
            strokeCap: 'round'
        });

        var start = new paper.Point(Math.random()*100,Math.random()*100);
        for(var i = 0; i < points; i++) {
            path.add(new paper.Point(i * length + start.x, 0 + start.y));
        }

        return path;
    }

    var x;
    var y;
    function moveSeg(event) {
        event.count = 1;
        if(event.count <= 100) {
        myPath.firstSegment.point._x += (x - myPath.firstSegment.point._x)/10;
        myPath.firstSegment.point._y += (y - myPath.firstSegment.point._y)/10;
            for (var i = 0; i < points - 1; i++) {
                var segment = myPath.segments[i];
                var nextSegment = segment.next;
                var vector = new paper.Point(segment.point.x - nextSegment.point.x,segment.point.y - nextSegment.point.y);
                vector.length = length;
                nextSegment.point = new paper.Point(segment.point.x - vector.x,segment.point.y - vector.y);
            }
            myPath.smooth();
        }
    }

    paper.tool.onMouseDown = function(event) {
        x = event.event.offsetX;
        y = event.event.offsetY;
        paper.view.attach('frame', moveSeg);
    }

});