// Variables
let canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    FPS = 90,
    StartTime = Date.now(),
    step = 1,
    lastTime = Date.now(),
    backgroundPos = {
        x: 0,
        y: 0
    },
    mousePos = {
        x: 0,
        y: 0
    }, startClicked, stepTime = [];

// Objects
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
}, 
nextButton = {
    "color": "rgba(0, 0, 0, 0)",
    "radius": 0,
    "hoverTime": false,
    "unhoverTime": Date.now(),
    "hoverRadius": 0
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
}, line13 = {
    "x": 0,
    "y": 0
}, line14 = {
    "x": 0,
    "y": 0
}, line15 = {
    "x": 0,
    "y": 0
}, line16 = {
    "x": 0,
    "y": 0
},
lineText1 = "rgba(0, 0, 0, 0)",
lineText2 = "rgba(0, 0, 0, 0)",
lineText3 = "rgba(0, 0, 0, 0)",
lineText4 = "rgba(0, 0, 0, 0)",
lineText5 = "rgba(0, 0, 0, 0)",
lineText6 = "rgba(0, 0, 0, 0)",
lineText7 = "rgba(0, 0, 0, 0)",
lineText8 = "rgba(0, 0, 0, 0)",
lineText9 = "rgba(0, 0, 0, 0)",
lineText10 = "rgba(0, 0, 0, 0)",
lineText11 = "rgba(0, 0, 0, 0)",
lineText12 = "rgba(0, 0, 0, 0)",
lineText13 = "rgba(0, 0, 0, 0)",
lineText14 = "rgba(0, 0, 0, 0)",
lineText15 = "rgba(0, 0, 0, 0)",
lineText16 = "rgba(0, 0, 0, 0)",
lineText21 = "rgba(0, 0, 0, 0)",
lineText22 = "rgba(0, 0, 0, 0)",
lineText23 = "rgba(0, 0, 0, 0)",
lineText24 = "rgba(0, 0, 0, 0)",
lineText25 = "rgba(0, 0, 0, 0)",
lineText26 = "rgba(0, 0, 0, 0)",
lineText27 = "rgba(0, 0, 0, 0)",
lineText28 = "rgba(0, 0, 0, 0)",
lineText29 = "rgba(0, 0, 0, 0)",
lineText210 = "rgba(0, 0, 0, 0)",
lineText211 = "rgba(0, 0, 0, 0)",
lineText212 = "rgba(0, 0, 0, 0)",
lineText213 = "rgba(0, 0, 0, 0)",
lineText214 = "rgba(0, 0, 0, 0)",
lineText215 = "rgba(0, 0, 0, 0)",
lineText216 = "rgba(0, 0, 0, 0)",
stepText1 = "rgba(0, 0, 0, 0)",
stepText2 = "rgba(0, 0, 0, 0)",
stepText3 = "rgba(0, 0, 0, 0)",
stepText4 = "rgba(0, 0, 0, 0)",
stepText5 = "rgba(0, 0, 0, 0)",
stepText6 = "rgba(0, 0, 0, 0)",
stepText7 = "rgba(0, 0, 0, 0)",
stepText8 = "rgba(0, 0, 0, 0)";

// Calculations
function update() {
    backgroundPos.x += 6 * ((Date.now() - lastTime) / 1000);
    backgroundPos.y -= 3 * ((Date.now() - lastTime) / 1000);
    document.getElementById("background").style.backgroundPositionX = backgroundPos.x + "%";
    document.getElementById("background").style.backgroundPositionY = backgroundPos.y + "%";

    if (timeFrame(0, 3600)) {
        mainCircle.radius = smoothOut(StartTime, 2000, 400, 150);
        mainCircle.color = "rgba(170, 170, 170, " + smoothOut(StartTime, 2000, 0, 1); + ")";
        mainCircle.position.y = smoothOut(StartTime, 2000, canvas.height / 2, canvas.height / 2 + 100);
        mainCircle.fillColor = "rgba(0, 230, 0, " + smoothOut(StartTime + 2600, 1000, 0, 1); + ")";

        title.color = "rgba(30, 30, 30, " + smoothOut(StartTime + 200, 1900, 0, 1); + ")";
        title.position.y = smoothOut(StartTime + 200, 1900, canvas.height / 2 - 400, canvas.height / 2 - 150);

        title2.color = "rgba(30, 30, 30, " + smoothOut(StartTime + 1800, 1000, 0, 1); + ")";
        title2.position.x = smoothOut(StartTime + 1800, 1000, canvas.width / 2 + 200, canvas.width / 2 + 90);
        document.getElementById("cover").style.background = "radial-gradient(ellipse at center, rgba(255,255,255,0) 0%, rgba(255,255,255,1) " + smoothInOut(StartTime + 1000, 2000, 1, 90) + "%, rgba(255,255,255,1) 100%)";
        canvas.style.boxShadow = smoothOut(StartTime + 500, 2000, 0, 1) + "vh " + smoothOut(StartTime + 500, 2000, 0, 1) + "vh " + smoothOut(StartTime + 500, 2000, 0, 3) + "vh rgba(0, 0, 0, " + smoothOut(StartTime + 500, 2000, 0, .5) + ")";
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
        mainCircle.fillColor = "rgba(0, 230, 0, " + smoothOut(startClicked, 500, 1, 0) + ")";
        title.color = "rgba(30, 30, 30, " + smoothOut(startClicked, 500, 1, 0) + ")";
        title2.color = "rgba(30, 30, 30, " + smoothOut(startClicked, 500, 1, 0) + ")";

        if (Date.now() < startClicked + 1500) {
            nextButton.color = "rgba(0, 150, 255, " + smoothOut(startClicked + 500, 1000, 0, 1) + ")";
            nextButton.radius = smoothOut(startClicked + 500, 1000, 0, 40);
        }

        if (distance(mousePos.x, mousePos.y, canvas.width - 80, canvas.height - 70) < nextButton.radius)
        {
            if (!nextButton.hoverTime) {
                nextButton.unhoverTime = false;
                nextButton.hoverTime = Date.now();
                nextButton.hoverRadius = nextButton.radius;
            }

            nextButton.radius = smoothInOut(nextButton.hoverTime, 200, nextButton.hoverRadius, 45);
        } else {
            if (!nextButton.unhoverTime) {
                nextButton.hoverTime = false;
                nextButton.unhoverTime = Date.now();
                nextButton.hoverRadius = nextButton.radius;
            }

            nextButton.radius = smoothInOut(nextButton.unhoverTime, 400, nextButton.hoverRadius, 40);
        }

        mainCircle.radius = smoothInOut(startClicked + 100, 2000, mainCircle.radius, 220);
        mainCircle.position.y = smoothInOut(startClicked + 100, 2500, mainCircle.position.y, canvas.height / 2);

        centerCircle.radius = smoothInOut(startClicked + 1000, 500, 0, 5);
        line1.x = smoothInOut(startClicked + 1200, 1000, 0, circlePos(0, 0, mainCircle.radius, 90).x);
        line2.x = smoothInOut(startClicked + 1600, 1000, 0, circlePos(0, 0, mainCircle.radius, -90).x);

        lineText1 = "rgba(30, 30, 30, " + smoothOut(startClicked + 1500, 1000, 0, 1) + ")";
        lineText2 = "rgba(30, 30, 30, " + smoothOut(startClicked + 1900, 1000, 0, 1) + ")";
        stepText1 = "rgba(30, 30, 30, " + smoothInOut(startClicked, 400, 0, 1) + ")";

        if (step > 1) {
            if (!stepTime[1])
                stepTime[1] = Date.now();

            lineText21 = "rgba(30, 30, 30, " + smoothOut(stepTime[1], 1000, 0, 1) + ")";
            lineText22 = "rgba(30, 30, 30, " + smoothOut(stepTime[1] + 400, 1000, 0, 1) + ")";
            stepText1 = "rgba(30, 30, 30, " + smoothInOut(stepTime[1], 400, 1, 0) + ")";
            stepText2 = "rgba(30, 30, 30, " + smoothInOut(stepTime[1], 400, 0, 1) + ")";

            if (step > 2) {
                if (!stepTime[2])
                    stepTime[2] = Date.now();

                line3.y = smoothInOut(stepTime[2], 1000, 0, circlePos(0, 0, mainCircle.radius, 180).y);
                line4.y = smoothInOut(stepTime[2] + 400, 1000, 0, circlePos(0, 0, mainCircle.radius, 0).y);

                lineText3 = "rgba(30, 30, 30, " + smoothOut(stepTime[2] + 300, 1000, 0, 1) + ")";
                lineText4 = "rgba(30, 30, 30, " + smoothOut(stepTime[2] + 600, 1000, 0, 1) + ")";
                stepText2 = "rgba(30, 30, 30, " + smoothInOut(stepTime[2], 400, 1, 0) + ")";
                stepText3 = "rgba(30, 30, 30, " + smoothInOut(stepTime[2], 400, 0, 1) + ")";

                if (step > 3) {
                    if (!stepTime[3])
                        stepTime[3] = Date.now();

                    lineText23 = "rgba(30, 30, 30, " + smoothOut(stepTime[3], 1000, 0, 1) + ")";
                    lineText24 = "rgba(30, 30, 30, " + smoothOut(stepTime[3] + 400, 1000, 0, 1) + ")";
                    stepText3 = "rgba(30, 30, 30, " + smoothInOut(stepTime[3], 400, 1, 0) + ")";
                    stepText4 = "rgba(30, 30, 30, " + smoothInOut(stepTime[3], 400, 0, 1) + ")";
                    
                    if (step > 4) {
                        if (!stepTime[4])
                            stepTime[4] = Date.now();

                        line5.x = smoothInOut(stepTime[4], 1000, 0, circlePos(0, 0, mainCircle.radius, 45).x);
                        line5.y = smoothInOut(stepTime[4], 1000, 0, circlePos(0, 0, mainCircle.radius, 45).y);
                        line6.x = smoothInOut(stepTime[4] + 400, 1000, 0, circlePos(0, 0, mainCircle.radius, 135).x);
                        line6.y = smoothInOut(stepTime[4] + 400, 1000, 0, circlePos(0, 0, mainCircle.radius, 135).y);
                        line7.x = smoothInOut(stepTime[4] + 800, 1000, 0, circlePos(0, 0, mainCircle.radius, -135).x);
                        line7.y = smoothInOut(stepTime[4] + 800, 1000, 0, circlePos(0, 0, mainCircle.radius, -135).y);
                        line8.x = smoothInOut(stepTime[4] + 1200, 1000, 0, circlePos(0, 0, mainCircle.radius, -45).x);
                        line8.y = smoothInOut(stepTime[4] + 1200, 1000, 0, circlePos(0, 0, mainCircle.radius, -45).y);

                        lineText5 = "rgba(30, 30, 30, " + smoothOut(stepTime[4] + 300, 1000, 0, 1) + ")";
                        lineText6 = "rgba(30, 30, 30, " + smoothOut(stepTime[4] + 600, 1000, 0, 1) + ")";
                        lineText7 = "rgba(30, 30, 30, " + smoothOut(stepTime[4] + 900, 1000, 0, 1) + ")";
                        lineText8 = "rgba(30, 30, 30, " + smoothOut(stepTime[4] + 1200, 1000, 0, 1) + ")";
                        stepText4 = "rgba(30, 30, 30, " + smoothInOut(stepTime[4], 400, 1, 0) + ")";
                        stepText5 = "rgba(30, 30, 30, " + smoothInOut(stepTime[4], 400, 0, 1) + ")";

                        if (step > 5) {
                            if (!stepTime[5])
                                stepTime[5] = Date.now();

                            lineText25 = "rgba(30, 30, 30, " + smoothOut(stepTime[5], 1000, 0, 1) + ")";
                            lineText26 = "rgba(30, 30, 30, " + smoothOut(stepTime[5] + 400, 1000, 0, 1) + ")";
                            lineText27 = "rgba(30, 30, 30, " + smoothOut(stepTime[5] + 800, 1000, 0, 1) + ")";
                            lineText28 = "rgba(30, 30, 30, " + smoothOut(stepTime[5] + 1200, 1000, 0, 1) + ")";
                            stepText5 = "rgba(30, 30, 30, " + smoothInOut(stepTime[5], 400, 1, 0) + ")";
                            stepText6 = "rgba(30, 30, 30, " + smoothInOut(stepTime[5], 400, 0, 1) + ")";
                            
                            if (step > 6) {
                                if (!stepTime[6])
                                    stepTime[6] = Date.now();

                                line9.x = smoothInOut(stepTime[6], 1000, 0, circlePos(0, 0, mainCircle.radius, 30).x);
                                line9.y = smoothInOut(stepTime[6], 1000, 0, circlePos(0, 0, mainCircle.radius, 30).y);
                                line10.x = smoothInOut(stepTime[6] + 400, 1000, 0, circlePos(0, 0, mainCircle.radius, 60).x);
                                line10.y = smoothInOut(stepTime[6] + 400, 1000, 0, circlePos(0, 0, mainCircle.radius, 60).y);
                                line11.x = smoothInOut(stepTime[6] + 800, 1000, 0, circlePos(0, 0, mainCircle.radius, 120).x);
                                line11.y = smoothInOut(stepTime[6] + 800, 1000, 0, circlePos(0, 0, mainCircle.radius, 120).y);
                                line12.x = smoothInOut(stepTime[6] + 1200, 1000, 0, circlePos(0, 0, mainCircle.radius, 150).x);
                                line12.y = smoothInOut(stepTime[6] + 1200, 1000, 0, circlePos(0, 0, mainCircle.radius, 150).y);
                                line13.x = smoothInOut(stepTime[6] + 1600, 1000, 0, circlePos(0, 0, mainCircle.radius, 210).x);
                                line13.y = smoothInOut(stepTime[6] + 1600, 1000, 0, circlePos(0, 0, mainCircle.radius, 210).y);
                                line14.x = smoothInOut(stepTime[6] + 2000, 1000, 0, circlePos(0, 0, mainCircle.radius, 240).x);
                                line14.y = smoothInOut(stepTime[6] + 2000, 1000, 0, circlePos(0, 0, mainCircle.radius, 240).y);
                                line15.x = smoothInOut(stepTime[6] + 2400, 1000, 0, circlePos(0, 0, mainCircle.radius, 300).x);
                                line15.y = smoothInOut(stepTime[6] + 2400, 1000, 0, circlePos(0, 0, mainCircle.radius, 300).y);
                                line16.x = smoothInOut(stepTime[6] + 2800, 1000, 0, circlePos(0, 0, mainCircle.radius, 330).x);
                                line16.y = smoothInOut(stepTime[6] + 2800, 1000, 0, circlePos(0, 0, mainCircle.radius, 330).y);

                                lineText9 = "rgba(30, 30, 30, " + smoothOut(stepTime[6] + 300, 1000, 0, 1) + ")";
                                lineText10 = "rgba(30, 30, 30, " + smoothOut(stepTime[6] + 600, 1000, 0, 1) + ")";
                                lineText11 = "rgba(30, 30, 30, " + smoothOut(stepTime[6] + 900, 1000, 0, 1) + ")";
                                lineText12 = "rgba(30, 30, 30, " + smoothOut(stepTime[6] + 1200, 1000, 0, 1) + ")";
                                lineText13 = "rgba(30, 30, 30, " + smoothOut(stepTime[6] + 1500, 1000, 0, 1) + ")";
                                lineText14 = "rgba(30, 30, 30, " + smoothOut(stepTime[6] + 1800, 1000, 0, 1) + ")";
                                lineText15 = "rgba(30, 30, 30, " + smoothOut(stepTime[6] + 2100, 1000, 0, 1) + ")";
                                lineText16 = "rgba(30, 30, 30, " + smoothOut(stepTime[6] + 2400, 1000, 0, 1) + ")";
                                stepText6 = "rgba(30, 30, 30, " + smoothInOut(stepTime[6], 400, 1, 0) + ")";
                                stepText7 = "rgba(30, 30, 30, " + smoothInOut(stepTime[6], 400, 0, 1) + ")";

                                if (step > 7) {
                                    if (!stepTime[7])
                                        stepTime[7] = Date.now();
                                    
                                    lineText29 = "rgba(30, 30, 30, " + smoothOut(stepTime[7], 1000, 0, 1) + ")";
                                    lineText210 = "rgba(30, 30, 30, " + smoothOut(stepTime[7] + 400, 1000, 0, 1) + ")";
                                    lineText211 = "rgba(30, 30, 30, " + smoothOut(stepTime[7] + 800, 1000, 0, 1) + ")";
                                    lineText212 = "rgba(30, 30, 30, " + smoothOut(stepTime[7] + 1200, 1000, 0, 1) + ")";
                                    lineText213 = "rgba(30, 30, 30, " + smoothOut(stepTime[7] + 1600, 1000, 0, 1) + ")";
                                    lineText214 = "rgba(30, 30, 30, " + smoothOut(stepTime[7] + 2000, 1000, 0, 1) + ")";
                                    lineText215 = "rgba(30, 30, 30, " + smoothOut(stepTime[7] + 2400, 1000, 0, 1) + ")";
                                    lineText216 = "rgba(30, 30, 30, " + smoothOut(stepTime[7] + 2800, 1000, 0, 1) + ")";
                                    stepText7 = "rgba(30, 30, 30, " + smoothInOut(stepTime[7], 400, 1, 0) + ")";
                                    stepText8 = "rgba(30, 30, 30, " + smoothInOut(stepTime[7], 400, 0, 1) + ")";
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    lastTime = Date.now();
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

    // Next Button
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.arc(canvas.width - 80, canvas.height - 70, nextButton.radius, 0, 2 * Math.PI);
    ctx.fillStyle = nextButton.color;
    ctx.fill();
    ctx.closePath();
    ctx.font = nextButton.radius + "px Arial";
    ctx.textAlign = "center"
    ctx.fillStyle = "white";
    ctx.fillText("➤", canvas.width - 77 - (40 - nextButton.radius) / 9, canvas.height - 56 - (40 - nextButton.radius) / 3);

    // Step
    ctx.font = "40px Arial";
    ctx.textAlign = "center"
    ctx.fillStyle = "black";
    ctx.fillText(step, 60, canvas.height - 50);

    // Step Text
    ctx.font = "30px Arial";
    ctx.textAlign = "left"

    ctx.fillStyle = stepText1;
    ctx.fillText("The starting point of a circle can be defined as 0 degrees or", 50, 70);
    ctx.fillText("360 degrees all around. Because of this, each half of a circle", 50, 100);
    ctx.fillText("make up 180 degrees.", 50, 130);
    ctx.fillStyle = stepText2;
    ctx.fillText("In radians, pi is the unit of measurement in circles. Two pi", 50, 70);
    ctx.fillText("radians is a full circle, making a single pi radian half of the", 50, 100);
    ctx.fillText("circle.", 50, 130);
    ctx.fillStyle = stepText3;
    ctx.fillText("Splitting the circle again into quarters makes each quarter", 50, 70);
    ctx.fillText("equal to 90 degrees.", 50, 100);
    ctx.fillStyle = stepText4;
    ctx.fillText("Since splitting the circle in half caused each half to be pi", 50, 70);
    ctx.fillText("radians, the radians must now be put into fractions starting in", 50, 100);
    ctx.fillText("pi halves, making each quarter equivilant to half a pi radian.", 50, 130);
    ctx.fillStyle = stepText5;
    ctx.fillText("Cutting the circle further in to eight sections makes each", 50, 70);
    ctx.fillText("section equivilant to 45 degrees.", 50, 100);
    ctx.fillStyle = stepText6;
    ctx.fillText("In radians, each eigth is equal to a fourth of pi radians. One", 50, 70);
    ctx.fillText("way to remember all of the divisions up to now is to remember", 50, 100);
    ctx.fillText("that each division is a factor of pi over four simplified.", 50, 130);
    ctx.fillStyle = stepText7;
    ctx.fillText("Ignoring the previous division, the fourths can also be split", 50, 70);
    ctx.fillText("in thirds to make each section 30 degrees instead of 45.", 50, 100);
    ctx.fillStyle = stepText8;
    ctx.fillText("When converting this into radians, each section is a sixth of", 50, 70);
    ctx.fillText("pi. A way to remember this division is to remember that every", 50, 100);
    ctx.fillText("point on the circle doesn't have a denominator of 3 since those", 50, 130);
    ctx.fillText("points can be simplified.", 50, 160);

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
    ctx.moveTo(canvas.width / 2, canvas.height / 2);
    ctx.lineTo(canvas.width / 2 + line5.x, canvas.height / 2 + line5.y);
    ctx.moveTo(canvas.width / 2, canvas.height / 2);
    ctx.lineTo(canvas.width / 2 + line6.x, canvas.height / 2 + line6.y);
    ctx.moveTo(canvas.width / 2, canvas.height / 2);
    ctx.lineTo(canvas.width / 2 + line7.x, canvas.height / 2 + line7.y);
    ctx.moveTo(canvas.width / 2, canvas.height / 2);
    ctx.lineTo(canvas.width / 2 + line8.x, canvas.height / 2 + line8.y);
    ctx.moveTo(canvas.width / 2, canvas.height / 2);
    ctx.lineTo(canvas.width / 2 + line9.x, canvas.height / 2 + line9.y);
    ctx.moveTo(canvas.width / 2, canvas.height / 2);
    ctx.lineTo(canvas.width / 2 + line10.x, canvas.height / 2 + line10.y);
    ctx.moveTo(canvas.width / 2, canvas.height / 2);
    ctx.lineTo(canvas.width / 2 + line11.x, canvas.height / 2 + line11.y);
    ctx.moveTo(canvas.width / 2, canvas.height / 2);
    ctx.lineTo(canvas.width / 2 + line12.x, canvas.height / 2 + line12.y);
    ctx.moveTo(canvas.width / 2, canvas.height / 2);
    ctx.lineTo(canvas.width / 2 + line13.x, canvas.height / 2 + line13.y);
    ctx.moveTo(canvas.width / 2, canvas.height / 2);
    ctx.lineTo(canvas.width / 2 + line14.x, canvas.height / 2 + line14.y);
    ctx.moveTo(canvas.width / 2, canvas.height / 2);
    ctx.lineTo(canvas.width / 2 + line15.x, canvas.height / 2 + line15.y);
    ctx.moveTo(canvas.width / 2, canvas.height / 2);
    ctx.lineTo(canvas.width / 2 + line16.x, canvas.height / 2 + line16.y);
    ctx.stroke();

    // Line Text
    ctx.font = "20px Arial";
    ctx.textAlign = "center"
    ctx.fillStyle = lineText1;
    ctx.fillText("0° 360°", canvas.width / 2 + line1.x * 1.2, canvas.height / 2 + line1.y * 1.2 - 6);
    ctx.fillStyle = lineText2;
    ctx.fillText("180°", canvas.width / 2 + line2.x * 1.2, canvas.height / 2 + line2.y * 1.2 - 6);
    ctx.fillStyle = lineText3;
    ctx.fillText("90°", canvas.width / 2 + line3.x * 1.2, canvas.height / 2 + line3.y * 1.2 - 6);
    ctx.fillStyle = lineText4;
    ctx.fillText("270°", canvas.width / 2 + line4.x * 1.2, canvas.height / 2 + line4.y * 1.2 - 6);
    ctx.fillStyle = lineText5;
    ctx.fillText("315°", canvas.width / 2 + line5.x * 1.2, canvas.height / 2 + line5.y * 1.2 - 6);
    ctx.fillStyle = lineText6;
    ctx.fillText("45°", canvas.width / 2 + line6.x * 1.2, canvas.height / 2 + line6.y * 1.2 - 6);
    ctx.fillStyle = lineText7;
    ctx.fillText("135°", canvas.width / 2 + line7.x * 1.2, canvas.height / 2 + line7.y * 1.2 - 6);
    ctx.fillStyle = lineText8;
    ctx.fillText("225°", canvas.width / 2 + line8.x * 1.2, canvas.height / 2 + line8.y * 1.2 - 6);
    ctx.fillStyle = lineText9;
    ctx.fillText("300°", canvas.width / 2 + line9.x * 1.2, canvas.height / 2 + line9.y * 1.2 - 6);
    ctx.fillStyle = lineText10;
    ctx.fillText("330°", canvas.width / 2 + line10.x * 1.2, canvas.height / 2 + line10.y * 1.2 - 6);
    ctx.fillStyle = lineText11;
    ctx.fillText("30°", canvas.width / 2 + line11.x * 1.2, canvas.height / 2 + line11.y * 1.2 - 6);
    ctx.fillStyle = lineText12;
    ctx.fillText("60°", canvas.width / 2 + line12.x * 1.2, canvas.height / 2 + line12.y * 1.2 - 6);
    ctx.fillStyle = lineText13;
    ctx.fillText("120°", canvas.width / 2 + line13.x * 1.2, canvas.height / 2 + line13.y * 1.2 - 6);
    ctx.fillStyle = lineText14;
    ctx.fillText("150°", canvas.width / 2 + line14.x * 1.2, canvas.height / 2 + line14.y * 1.2 - 6);
    ctx.fillStyle = lineText15;
    ctx.fillText("210°", canvas.width / 2 + line15.x * 1.2, canvas.height / 2 + line15.y * 1.2 - 6);
    ctx.fillStyle = lineText16;
    ctx.fillText("240°", canvas.width / 2 + line16.x * 1.2, canvas.height / 2 + line16.y * 1.2 - 6);
    ctx.fillStyle = lineText21;
    ctx.fillText("2π", canvas.width / 2 + line1.x * 1.2, canvas.height / 2 + line1.y * 1.2 + 16);
    ctx.fillStyle = lineText22;
    ctx.fillText("π", canvas.width / 2 + line2.x * 1.2, canvas.height / 2 + line2.y * 1.2 + 16);
    ctx.fillStyle = lineText23;
    ctx.fillText("π/2", canvas.width / 2 + line3.x * 1.2, canvas.height / 2 + line3.y * 1.2 + 16);
    ctx.fillStyle = lineText24;
    ctx.fillText("3π/2", canvas.width / 2 + line4.x * 1.2, canvas.height / 2 + line4.y * 1.2 + 16);
    ctx.fillStyle = lineText25;
    ctx.fillText("7π/4", canvas.width / 2 + line5.x * 1.2, canvas.height / 2 + line5.y * 1.2 + 16);
    ctx.fillStyle = lineText26;
    ctx.fillText("π/4", canvas.width / 2 + line6.x * 1.2, canvas.height / 2 + line6.y * 1.2 + 16);
    ctx.fillStyle = lineText27;
    ctx.fillText("3π/4", canvas.width / 2 + line7.x * 1.2, canvas.height / 2 + line7.y * 1.2 + 16);
    ctx.fillStyle = lineText28;
    ctx.fillText("5π/4", canvas.width / 2 + line8.x * 1.2, canvas.height / 2 + line8.y * 1.2 + 16);
    ctx.fillStyle = lineText29;
    ctx.fillText("5π/3", canvas.width / 2 + line9.x * 1.2, canvas.height / 2 + line9.y * 1.2 + 16);
    ctx.fillStyle = lineText210;
    ctx.fillText("11π/6", canvas.width / 2 + line10.x * 1.2, canvas.height / 2 + line10.y * 1.2 + 16);
    ctx.fillStyle = lineText211;
    ctx.fillText("π/6", canvas.width / 2 + line11.x * 1.2, canvas.height / 2 + line11.y * 1.2 + 16);
    ctx.fillStyle = lineText212;
    ctx.fillText("π/3", canvas.width / 2 + line12.x * 1.2, canvas.height / 2 + line12.y * 1.2 + 16);
    ctx.fillStyle = lineText213;
    ctx.fillText("2π/3", canvas.width / 2 + line13.x * 1.2, canvas.height / 2 + line13.y * 1.2 + 16);
    ctx.fillStyle = lineText214;
    ctx.fillText("5π/6", canvas.width / 2 + line14.x * 1.2, canvas.height / 2 + line14.y * 1.2 + 16);
    ctx.fillStyle = lineText215;
    ctx.fillText("7π/6", canvas.width / 2 + line15.x * 1.2, canvas.height / 2 + line15.y * 1.2 + 16);
    ctx.fillStyle = lineText216;
    ctx.fillText("4π/3", canvas.width / 2 + line16.x * 1.2, canvas.height / 2 + line16.y * 1.2 + 16);
}

// Updater
setInterval(() => {
    update();
    render();
}, 1000 / FPS);

// Interaction Data
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
    } else {
        if (step <= 8) {
            if (distance(mousePos.x, mousePos.y, canvas.width - 80, canvas.height - 70) < nextButton.radius)
                step++;
        }
    }
}

canvas.addEventListener('click', getMouseClick, false);

// Extra Functions
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

function circlePos(x, y, radius, angle) {
    return {
        "x": radius * Math.sin(Math.PI * 2 * angle / 360) + x,
        "y": radius * Math.cos(Math.PI * 2 * angle / 360) + y
    };
}