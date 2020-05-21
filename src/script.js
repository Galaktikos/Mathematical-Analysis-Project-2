let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let FPS = 60;
let StartTime = Date.now();
let startClicked;
let mousePos = {
    x: 0,
    y: 0
}

//#region Objects
let mainCircle = {
    "position": {
        "x": canvas.width / 2,
        "y": 0
    },
    "radius": 1000,
    "color": "rgba(170, 170, 170, 1)",
    "fillColor": "rgba(0, 200, 0, 1)",
    "hoverTime": false,
    "unhoverTime": Date.now(),
    "hoverRadius": 0
}, title = {
    "position": {
        "y": 0
    },
    "color": "rgba(30, 30, 30, 1)"
}, title2 = {
    "position": {
        "x": 0
    },
    "color": "rgba(30, 30, 30, 1)"
}, centerCircle = {
    "radius": 0
}, line1 = {
    "x": 0,
    "y": 0
}, line2 = {
    "x": 0,
    "y": 0
}, line3 = {
    "x": 0,
    "y": 0
}, line4 = {
    "x": 0,
    "y": 0
}, line5 = {
    "x": 0,
    "y": 0
}, line6 = {
    "x": 0,
    "y": 0
}, line7 = {
    "x": 0,
    "y": 0
}, line8 = {
    "x": 0,
    "y": 0
}, line9 = {
    "x": 0,
    "y": 0
}, line10 = {
    "x": 0,
    "y": 0
}, line11 = {
    "x": 0,
    "y": 0
}, line12 = {
    "x": 0,
    "y": 0
};
//#endregion

//#region Extra Functions
function  getMousePos(e) {
    let rect = canvas.getBoundingClientRect();
  
    mousePos.x = (e.clientX - rect.left) * canvas.width / rect.width;
    mousePos.y = (e.clientY - rect.top) * canvas.height / rect.height;
}

canvas.addEventListener('mousemove', getMousePos, false);

function  getMouseClick(e) {
    if (!startClicked) {
        if (distance(mousePos.x, mousePos.y, mainCircle.position.x, mainCircle.position.y) < mainCircle.radius)
            startClicked = Date.now();
    }
}

canvas.addEventListener('click', getMouseClick, false);

function smoothIn(startTime, time, startValue, endValue) {
    if (Date.now() < startTime)
        return startValue;

    if (time - (Date.now() - startTime) > 0) {
        let amount = 1 - (time - (Date.now() - startTime)) / time;

        return (Math.sin(Math.PI / 2 * amount + (Math.PI / 2)) * (startValue - endValue) + startValue + endValue) / 2;
    }

    return endValue;
}

function smoothOut(startTime, time, startValue, endValue) {
    if (Date.now() <= startTime)
        return startValue;

    if (time - (Date.now() - startTime) > 0) {
        let amount = 1 - (time - (Date.now() - startTime)) / time;

        return Math.sin(Math.PI / 2 * amount) * (endValue - startValue) + startValue;
    }

    return endValue;
}

function smoothInOut(startTime, time, startValue, endValue) {
    if (Date.now() < startTime)
        return startValue;

    if (time - (Date.now() - startTime) > 0) {
        let amount = 1 - (time - (Date.now() - startTime)) / time;

        return (Math.sin(Math.PI * amount + (Math.PI / 2)) * (startValue - endValue) + (startValue + endValue)) / 2;
    }

    return endValue;
}

function distance(x, y, x2, y2) {
    var a = x - x2;
    var b = y - y2;

    return Math.sqrt( a * a + b * b );
}

function timeFrame(startTime, endTime) {
    if (Date.now() - StartTime > startTime && Date.now() - StartTime < endTime)
        return true;

    return false;
}

function circlePos() {
    
}
//#endregion

// Calculations
function update() {
    if (timeFrame(0, 3600)) {
        mainCircle.radius = smoothOut(StartTime, 2000, 400, 150);
        mainCircle.color = "rgba(170, 170, 170, " + smoothOut(StartTime, 2000, 0, 1); + ")";
        mainCircle.position.y = smoothOut(StartTime, 2000, canvas.height / 2, canvas.height / 2 + 100);
        mainCircle.fillColor = "rgba(0, 230, 0, " + smoothOut(StartTime + 2600, 1000, 0, 1); + ")";

        title.color = "rgba(30, 30, 30, " + smoothOut(StartTime + 200, 1900, 0, 1); + ")";
        title.position.y = smoothOut(StartTime + 200, 1900, canvas.height / 2 - 400, canvas.height / 2 - 150);

        title2.color = "rgba(30, 30, 30, " + smoothOut(StartTime + 1800, 1000, 0, 1); + ")";
        title2.position.x = smoothOut(StartTime + 1800, 1000, canvas.width / 2 + 200, canvas.width / 2 + 90);
    }

    if (timeFrame(3000, (startClicked) ? 0 : Infinity)) {
        if (distance(mousePos.x, mousePos.y, mainCircle.position.x, mainCircle.position.y) < mainCircle.radius)
        {
            if (!mainCircle.hoverTime) {
                mainCircle.unhoverTime = false;
                mainCircle.hoverTime = Date.now();
                mainCircle.hoverRadius = mainCircle.radius;
            }

            mainCircle.radius = smoothInOut(mainCircle.hoverTime, 200, mainCircle.hoverRadius, 165);
        } else {
            if (!mainCircle.unhoverTime) {
                mainCircle.hoverTime = false;
                mainCircle.unhoverTime = Date.now();
                mainCircle.hoverRadius = mainCircle.radius;
            }

            mainCircle.radius = smoothInOut(mainCircle.unhoverTime, 400, mainCircle.hoverRadius, 150);
        }
    }

    if (startClicked) {
        mainCircle.fillColor = "rgba(0, 230, 0, " + smoothOut(startClicked, 500, 1, 0); + ")";
        title.color = "rgba(30, 30, 30, " + smoothOut(startClicked, 500, 1, 0); + ")";
        title2.color = "rgba(30, 30, 30, " + smoothOut(startClicked, 500, 1, 0); + ")";

        mainCircle.radius = smoothInOut(startClicked + 100, 2000, mainCircle.radius, 220);
        mainCircle.position.y = smoothInOut(startClicked + 100, 2500, mainCircle.position.y, canvas.height / 2);

        centerCircle.radius = smoothInOut(startClicked + 1000, 500, 0, 5);
        line1.x = smoothInOut(startClicked + 1200, 1000, 0, mainCircle.radius);
        line2.y = smoothInOut(startClicked + 1600, 1000, 0, -mainCircle.radius);
        line3.x = smoothInOut(startClicked + 2000, 1000, 0, -mainCircle.radius);
        line4.y = smoothInOut(startClicked + 2400, 1000, 0, mainCircle.radius);
    }
}

// Rendering
function render() {
    // Clear
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();
    ctx.closePath();

    // Circle
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.arc(mainCircle.position.x, mainCircle.position.y, mainCircle.radius, 0, 2 * Math.PI);
    ctx.strokeStyle = mainCircle.color;
    ctx.stroke();
    ctx.fillStyle = mainCircle.fillColor;
    ctx.fill();
    ctx.closePath();

    // Circle Text
    ctx.font = "50px Arial";
    ctx.textAlign = "center"
    ctx.fillStyle = "white";
    ctx.fillText("Start", mainCircle.position.x, mainCircle.position.y + 15);

    // Title
    ctx.font = "70px Arial";
    ctx.textAlign = "center";
    ctx.lineWidth = 1.5;

    ctx.strokeStyle = title.color;
    ctx.strokeText("Unit", canvas.width / 2 - 100, title.position.y);

    ctx.strokeStyle = title2.color;
    ctx.strokeText("Circle", title2.position.x, canvas.height / 2 - 150);

    // Center Circle
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, centerCircle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = mainCircle.color;
    ctx.fill();
    ctx.closePath();

    // Lines
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = mainCircle.color;
    ctx.moveTo(canvas.width / 2, canvas.height / 2);
    ctx.lineTo(canvas.width / 2 + line1.x, canvas.height / 2 + line1.y);
    ctx.moveTo(canvas.width / 2, canvas.height / 2);
    ctx.lineTo(canvas.width / 2 + line2.x, canvas.height / 2 + line2.y);
    ctx.moveTo(canvas.width / 2, canvas.height / 2);
    ctx.lineTo(canvas.width / 2 + line3.x, canvas.height / 2 + line3.y);
    ctx.moveTo(canvas.width / 2, canvas.height / 2);
    ctx.lineTo(canvas.width / 2 + line4.x, canvas.height / 2 + line4.y);
    ctx.stroke();
}

setInterval(() => {
    update();
    render();
}, 1000 / FPS);