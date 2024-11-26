// Speed
// Let
let speedInput = document.getElementById("speed-speed-formula");
let timeInput = document.getElementById("time-speed-formula");
let distanceInput = document.getElementById("distance-speed-formula");
let digitsSpeed2 = document.getElementById("digits-speed");
let unitSelector = document.getElementById("unit-value");
// Buttons
document
  .getElementById("speed-speed-formula-button")
  .addEventListener("click", calcSpeed);
document
  .getElementById("time-speed-formula-button")
  .addEventListener("click", calcTimeSpeed);
document
  .getElementById("distance-speed-formula-button")
  .addEventListener("click", calcDistanceSpeed);
// Functions
function calcSpeed() {
  // Input
  let unitValue = unitSelector.value;
  let speedSpeed = Number(speedInput.value);
  let timeSpeed = Number(timeInput.value);
  let distanceSpeed = Number(distanceInput.value);
  let digitsSpeed = Number(digitsSpeed2.value);
  // Process
  let SpeedCalculation = (distanceSpeed / timeSpeed).toFixed(digitsSpeed);
  // Output
  document.getElementById("speed-value").innerHTML =
    SpeedCalculation + unitValue;
  document.getElementById("speed-span").innerHTML = "speed";
  // Clear values
  speedInput.value = "";
  timeInput.value = "";
  distanceInput.value = "";
  digitsSpeed2.value = "";
}
function calcTimeSpeed() {
  // Input
  let unitValue = unitSelector.value;
  let speedSpeed = Number(speedInput.value);
  let timeSpeed = Number(timeInput.value);
  let distanceSpeed = Number(distanceInput.value);
  let digitsSpeed = Number(digitsSpeed2.value);
  // Process
  let timeSpeedCalculation = (distanceSpeed / speedSpeed).toFixed(digitsSpeed);
  // Output
  document.getElementById("speed-value").innerHTML =
    timeSpeedCalculation + unitValue;
  document.getElementById("speed-span").innerHTML = "time";
  // Clear values
  speedInput.value = "";
  timeInput.value = "";
  distanceInput.value = "";
  digitsSpeed2.value = "";
}
function calcDistanceSpeed() {
  // Input
  let unitValue = unitSelector.value;
  let speedSpeed = Number(speedInput.value);
  let timeSpeed = Number(timeInput.value);
  let distanceSpeed = Number(distanceInput.value);
  let digitsSpeed = Number(digitsSpeed2.value);
  // Process
  let distanceSpeedCalculation = (timeSpeed * speedSpeed).toFixed(digitsSpeed);
  // Output
  document.getElementById("speed-value").innerHTML =
    distanceSpeedCalculation + unitValue;
  document.getElementById("speed-span").innerHTML = "distance";
  // Clear values
  speedInput.value = "";
  timeInput.value = "";
  distanceInput.value = "";
  digitsSpeed2.value = "";
}
// ADD UNITS TO HTML


// Acceleration
// Let
let acceleration = document.getElementById("acceleration");
let timeone = document.getElementById("time");
let initialSpeed = document.getElementById("initial-speed");
let finalSpeed = document.getElementById("final-speed");
let digit = document.getElementById("digits");


// Buttons
document
  .getElementById("acceleration-button")
  .addEventListener("click", calcAcceleration);
document.getElementById("time-button").addEventListener("click", calcTime);
document.getElementById("vi-button").addEventListener("click", calcVi);
document.getElementById("vf-button").addEventListener("click", calcVf);
// Functions
function calcAcceleration() {
  // Input
  let time = Number(timeone.value);
  let initSpeed = Number(initialSpeed.value);
  let finSpeed = Number(finalSpeed.value);
  let digits = Number(digit.value);
  // Process
  let accelerationCalculation = ((finSpeed - initSpeed) / time).toFixed(digits);
  //   Output
  document.getElementById("value").innerHTML =
    accelerationCalculation + " m/s²";
  document.getElementById("accelerationSpan").innerHTML = "acceleration";
  // Clear Values
  timeone.value = "";
  acceleration.value = "";
  initialSpeed.value = "";
  finalSpeed.value = "";
  digit.value = "";
}


function calcTime() {
  // Input
  let accel = Number(acceleration.value);
  let time = Number(timeone.value);
  let initSpeed = Number(initialSpeed.value);
  let finSpeed = Number(finalSpeed.value);
  let digits = Number(digit.value);
  // Process
  let timeCalculation = ((finSpeed - initSpeed) / accel).toFixed(digits);
  //   Output
  document.getElementById("value").innerHTML = timeCalculation + " s";
  document.getElementById("accelerationSpan").innerHTML = "time";
  // Clear values
  timeone.value = "";
  acceleration.value = "";
  initialSpeed.value = "";
  finalSpeed.value = "";
  digit.value = "";
}


function calcVi() {
  // Input
  let accel = Number(acceleration.value);
  let time = Number(timeone.value);
  let initSpeed = Number(initialSpeed.value);
  let finSpeed = Number(finalSpeed.value);
  let digits = Number(digit.value);
  // Process
  let viCalculation = (finSpeed - accel * time).toFixed(digits);
  // Output
  document.getElementById("value").innerHTML = viCalculation + " m/s";
  document.getElementById("accelerationSpan").innerHTML = "initial speed";
  // Clear values
  timeone.value = "";
  acceleration.value = "";
  initialSpeed.value = "";
  finalSpeed.value = "";
  digit.value = "";
}
function calcVf() {
  // Input
  let accel = Number(acceleration.value);
  let time = Number(timeone.value);
  let initSpeed = Number(initialSpeed.value);
  let finSpeed = Number(finalSpeed.value);
  let digits = Number(digit.value);
  // Process
  let vfCalculation = (initSpeed + accel * time).toFixed(digits);
  // Output
  document.getElementById("value").innerHTML = vfCalculation + " m/s";
  document.getElementById("accelerationSpan").innerHTML = "final speed";
  // Clear values


  timeone.value = "";
  acceleration.value = "";
  initialSpeed.value = "";
  finalSpeed.value = "";
  digit.value = "";
}


// Force


// Let
let digitForceInput = document.getElementById("digits-force");
let forceForceInput = document.getElementById("force-force-formula");
let massForceInput = document.getElementById("mass-force-formula");
let accelerationForceInput = document.getElementById(
  "acceleration-force-formula"
);
// Buttons
document
  .getElementById("force-force-formula-button")
  .addEventListener("click", calcForce);
document
  .getElementById("mass-force-formula-button")
  .addEventListener("click", calcMassForce);
document
  .getElementById("acceleration-force-formula-button")
  .addEventListener("click", calcAccelerationForce);
// Functions
function calcForce() {
  // Input
  let digitForce = Number(digitForceInput.value);
  let force = Number(forceForceInput.value);
  let massForce = Number(massForceInput.value);
  let accelerationForce = Number(accelerationForceInput.value);
  // Process
  let forceCalculation = (massForce * accelerationForce).toFixed(digitForce);
  // Output
  document.getElementById("force-span").innerHTML = "force";
  document.getElementById("force-value").innerHTML = forceCalculation + " N";
  // Clear Values
  digitForceInput.value = "";
  forceForceInput.value = "";
  massForceInput.value = "";
  accelerationForceInput.value = "";
}


function calcMassForce() {
  // Input
  let digitForce = Number(digitForceInput.value);
  let force = Number(forceForceInput.value);
  let massForce = Number(massForceInput.value);
  let accelerationForce = Number(accelerationForceInput.value);
  // Process
  let massForceCalculation = (force / accelerationForce).toFixed(digitForce);
  // Output
  document.getElementById("force-span").innerHTML = "mass";
  document.getElementById("force-value").innerHTML =
    massForceCalculation + " kg";


  // Clear Values
  digitForceInput.value = "";
  forceForceInput.value = "";
  massForceInput.value = "";
  accelerationForceInput.value = "";
}
function calcAccelerationForce() {
  // Input
  let digitForce = Number(digitForceInput.value);
  let force = Number(forceForceInput.value);
  let massForce = Number(massForceInput.value);
  let accelerationForce = Number(accelerationForceInput.value);
  // Process
  let accelerationForceCalculation = (force / massForce).toFixed(digitForce);
  // Output
  document.getElementById("force-span").innerHTML = "acceleration";
  document.getElementById("force-value").innerHTML =
    accelerationForceCalculation + " m/s²";


  // Clear Values
  digitForceInput.value = "";
  forceForceInput.value = "";
  massForceInput.value = "";
  accelerationForceInput.value = "";
}
// Work
// Let
let workInput = document.getElementById("work-work-formula");
let forceWorkInput = document.getElementById("force-work-formula");
let distanceWorkInput = document.getElementById("distance-work-formula");
let digitWorkInput = document.getElementById("digits-work");
// Buttons
document
  .getElementById("work-work-formula-button")
  .addEventListener("click", calcWork);
document
  .getElementById("force-work-formula-button")
  .addEventListener("click", calcForceWork);
document
  .getElementById("distance-work-formula-button")
  .addEventListener("click", calcDistanceWork);
// Functions
function calcWork() {
  // Input
  let work = Number(workInput.value);
  let forceWork = Number(forceWorkInput.value);
  let distanceWork = Number(distanceWorkInput.value);
  let digitsWork = Number(digitWorkInput.value);
  // Process
  let workCalculation = (forceWork * distanceWork).toFixed(digitsWork);
  // Output
  document.getElementById("work-span").innerHTML = "work";
  document.getElementById("work-value").innerHTML = workCalculation + "J";
  // Clear Values
  workInput.value = "";
  forceWorkInput.value = "";
  distanceWorkInput.value = "";
  digitWorkInput.value = "";
}


function calcForceWork() {
  // Input
  let work = Number(workInput.value);
  let forceWork = Number(forceWorkInput.value);
  let distanceWork = Number(distanceWorkInput.value);
  let digitsWork = Number(digitWorkInput.value);
  // Process
  let forceWorkCalculation = (work / distanceWork).toFixed(digitsWork);
  // Output


  document.getElementById("work-span").innerHTML = "force";
  document.getElementById("work-value").innerHTML = forceWorkCalculation + "N";


  // Clear Values
  workInput.value = "";
  forceWorkInput.value = "";
  distanceWorkInput.value = "";
  digitWorkInput.value = "";
}


function calcDistanceWork() {
  // Input
  let work = Number(workInput.value);
  let forceWork = Number(forceWorkInput.value);
  let distanceWork = Number(distanceWorkInput.value);
  let digitsWork = Number(digitWorkInput.value);
  // Process
  let distanceWorkCalculation = (work / forceWork).toFixed(digitsWork);
  // Output
  document.getElementById("work-span").innerHTML = "distance";
  document.getElementById("work-value").innerHTML =
    distanceWorkCalculation + "m";
  // Clear Values
  workInput.value = "";
  forceWorkInput.value = "";
  distanceWorkInput.value = "";
  digitWorkInput.value = "";
}
// Table
// Let
let goBtn = document.getElementById("go-btn");
// Event Listener


goBtn.addEventListener("click", convert);


// Function
function convert() {
  let fromUnit = document.getElementById("from-select").value;
  let toUnit = document.getElementById("to-select").value;
  // Km and m
  if (fromUnit == "km" && toUnit == "m") {
    // if condition TRUE, run this code
    let num = +document.getElementById("convert-in").value;
    let answer = (num * 1000).toFixed(2);
    document.getElementById("result").innerHTML = answer + ` ${toUnit}`;
  }


  if (fromUnit == "m" && toUnit == "km") {
    let num = +document.getElementById("convert-in").value;
    let answer = (num / 1000).toFixed(2);
    document.getElementById("result").innerHTML = answer + ` ${toUnit}`;
  }
  // Kg and g
  if (fromUnit == "kg" && toUnit == "g") {
    let num = +document.getElementById("convert-in").value;
    let answer = (num * 1000).toFixed(2);
    document.getElementById("result").innerHTML = answer + ` ${toUnit}`;
  }
  if (fromUnit == "g" && toUnit == "kg") {
    let num = +document.getElementById("convert-in").value;
    let answer = (num / 1000).toFixed(2);
    document.getElementById("result").innerHTML = answer + ` ${toUnit}`;
  }
  // Min and s
  if (fromUnit == "min" && toUnit == "s") {
    let num = +document.getElementById("convert-in").value;
    let answer = (num * 60).toFixed(2);
    document.getElementById("result").innerHTML = answer + ` ${toUnit}`;
  }
  if (fromUnit == "s" && toUnit == "min") {
    let num = +document.getElementById("convert-in").value;
    let answer = (num / 60).toFixed(2);
    document.getElementById("result").innerHTML = answer + ` ${toUnit}`;
  }
  // H and min
  if (fromUnit == "h" && toUnit == "min") {
    let num = +document.getElementById("convert-in").value;
    let answer = (num * 60).toFixed(2);
    document.getElementById("result").innerHTML = answer + ` ${toUnit}`;
  }
  if (fromUnit == "min" && toUnit == "h") {
    let num = +document.getElementById("convert-in").value;
    let answer = (num / 60).toFixed(2);
    document.getElementById("result").innerHTML = answer + ` ${toUnit}`;
  }
  // Km/h and M/s
  if (fromUnit == "km/h" && toUnit == "m/s") {
    let num = +document.getElementById("convert-in").value;
    let answer = (num / 3.6).toFixed(2);
    document.getElementById("result").innerHTML = answer + ` ${toUnit}`;
  }
  if (fromUnit == "m/s" && toUnit == "km/h") {
    let num = +document.getElementById("convert-in").value;
    let answer = (num * 3.6).toFixed(2);
    document.getElementById("result").innerHTML = answer + ` ${toUnit}`;
  }
}


// Dark mode


// Let


// Event Listener
document.getElementById("dark-mode").addEventListener("click", darkMode);
document.getElementById("light-mode").addEventListener("click", lightMode)
// Function
function darkMode() {
  // Background Color & Text Color
  document.getElementById("body").style.backgroundColor = "rgb(5, 5, 5)";
  document.getElementById("body").style.color = "white";


  // Inputs
//   Speed
  document.getElementById("digits-speed").style.backgroundColor =
    "rgb(5, 5, 5)";
  document.getElementById("digits-speed").style.color = "white";


  document.getElementById("speed-speed-formula").style.backgroundColor =
    "rgb(5, 5, 5)";
  document.getElementById("speed-speed-formula").style.color = "white";


  document.getElementById("time-speed-formula").style.backgroundColor =
    "rgb(5, 5, 5)";
  document.getElementById("time-speed-formula").style.color = "white";


  document.getElementById("distance-speed-formula").style.backgroundColor =
    "rgb(5, 5, 5)";
  document.getElementById("distance-speed-formula").style.color = "white";

  document.getElementById("unit-value").style.backgroundColor =
"rgb(32, 28, 90)";
document.getElementById("unit-value").style.color = "white";

// Acceleration
  
  document.getElementById("digits").style.backgroundColor =
    "rgb(5, 5, 5)";
  document.getElementById("digits").style.color = "white";

  document.getElementById("acceleration").style.backgroundColor =
  "rgb(5, 5, 5)";
document.getElementById("acceleration").style.color = "white";

document.getElementById("time").style.backgroundColor =
"rgb(5, 5, 5)";
document.getElementById("time").style.color = "white";

document.getElementById("initial-speed").style.backgroundColor =
"rgb(5, 5, 5)";
document.getElementById("initial-speed").style.color = "white";

document.getElementById("final-speed").style.backgroundColor =
"rgb(5, 5, 5)";
document.getElementById("final-speed").style.color = "white";

// Force

document.getElementById("digits-force").style.backgroundColor =
"rgb(5, 5, 5)";
document.getElementById("digits-force").style.color = "white";

document.getElementById("force-force-formula").style.backgroundColor =
"rgb(5, 5, 5)";
document.getElementById("force-force-formula").style.color = "white";

document.getElementById("mass-force-formula").style.backgroundColor =
"rgb(5, 5, 5)";
document.getElementById("mass-force-formula").style.color = "white";

document.getElementById("acceleration-force-formula").style.backgroundColor =
"rgb(5, 5, 5)";
document.getElementById("acceleration-force-formula").style.color = "white";

// Work

document.getElementById("digits-work").style.backgroundColor =
"rgb(5, 5, 5)";
document.getElementById("digits-work").style.color = "white";

document.getElementById("work-work-formula").style.backgroundColor =
"rgb(5, 5, 5)";
document.getElementById("work-work-formula").style.color = "white";

document.getElementById("force-work-formula").style.backgroundColor =
"rgb(5, 5, 5)";
document.getElementById("force-work-formula").style.color = "white";

document.getElementById("distance-work-formula").style.backgroundColor =
"rgb(5, 5, 5)";
document.getElementById("distance-work-formula").style.color = "white";

// Table

document.getElementById("convert-in").style.backgroundColor =
"rgb(5, 5, 5)";
document.getElementById("convert-in").style.color = "white";

// Buttons
// Speed
document.getElementById("speed-speed-formula-button").style.backgroundColor =
"rgb(7, 7, 100)";
document.getElementById("speed-speed-formula-button").style.color = "rgb(183, 200, 255)";

document.getElementById("time-speed-formula-button").style.backgroundColor =
"rgb(7, 7, 100)";
document.getElementById("time-speed-formula-button").style.color = "rgb(183, 200, 255)";

document.getElementById("distance-speed-formula-button").style.backgroundColor =
"rgb(7, 7, 100)";
document.getElementById("distance-speed-formula-button").style.color = "rgb(183, 200, 255)";
// Acceleration
document.getElementById("acceleration-button").style.backgroundColor =
"rgb(5, 46, 7)";
document.getElementById("acceleration-button").style.color = "rgb(236, 255, 241)";

document.getElementById("time-button").style.backgroundColor =
"rgb(5, 46, 7)";
document.getElementById("time-button").style.color = "rgb(236, 255, 241)";

document.getElementById("vi-button").style.backgroundColor =
"rgb(5, 46, 7)";
document.getElementById("vi-button").style.color = "rgb(236, 255, 241)";

document.getElementById("vf-button").style.backgroundColor =
"rgb(5, 46, 7)";
document.getElementById("vf-button").style.color = "rgb(236, 255, 241)";
// Force
document.getElementById("force-force-formula-button").style.backgroundColor =
"rgb(171, 128, 0)";
document.getElementById("force-force-formula-button").style.color = "rgb(255, 245, 186)";

document.getElementById("acceleration-force-formula-button").style.backgroundColor =
"rgb(171, 128, 0)";
document.getElementById("acceleration-force-formula-button").style.color = "rgb(255, 245, 186)";

document.getElementById("mass-force-formula-button").style.backgroundColor =
"rgb(171, 128, 0)";
document.getElementById("mass-force-formula-button").style.color = "rgb(255, 245, 186)";

// Work
document.getElementById("work-work-formula-button").style.backgroundColor =
"rgb(46, 5, 5)";
document.getElementById("work-work-formula-button").style.color = "rgb(255, 223, 223)";

document.getElementById("force-work-formula-button").style.backgroundColor =
"rgb(46, 5, 5)";
document.getElementById("force-work-formula-button").style.color = "rgb(255, 223, 223)";

document.getElementById("distance-work-formula-button").style.backgroundColor =
"rgb(46, 5, 5)";
document.getElementById("distance-work-formula-button").style.color = "rgb(255, 223, 223)";




// Table buttons + selectors
document.getElementById("from-select").style.backgroundColor =
"rgb(32, 28, 90)";
document.getElementById("from-select").style.color = "white";

document.getElementById("to-select").style.backgroundColor =
"rgb(32, 28, 90)";
document.getElementById("to-select").style.color = "white";

document.getElementById("go-btn").style.backgroundColor =
"rgb(32, 28, 90)";
document.getElementById("go-btn").style.color = "white";

// Images
document.getElementById("speedpicpara").innerHTML = " <img src='images/in verted speed.png' alt = '' width = '300px' />"

document.getElementById("accelerationpicpara").innerHTML = "<img width = '250px' src='images/inverted acceleration.png' />";

document.getElementById("forcepicpara").innerHTML = "<img width = '250px' src='images/inverted force.png' />";

document.getElementById("workpicpara").innerHTML = "<img width = '300px' src='images/inverted work.png' />";

}
// Light mode
function lightMode () {
        // Background Color & Text Color
        document.getElementById("body").style.backgroundColor = "white";
        document.getElementById("body").style.color = "black";
      
      
        // Inputs
      //   Speed
        document.getElementById("digits-speed").style.backgroundColor =
          "white";
        document.getElementById("digits-speed").style.color = "black";
      
      
        document.getElementById("speed-speed-formula").style.backgroundColor =
          "white";
        document.getElementById("speed-speed-formula").style.color = "black";
      
      
        document.getElementById("time-speed-formula").style.backgroundColor =
          "white";
        document.getElementById("time-speed-formula").style.color = "black";
      
      
        document.getElementById("distance-speed-formula").style.backgroundColor =
          "white";
        document.getElementById("distance-speed-formula").style.color = "black";
      
        document.getElementById("unit-value").style.backgroundColor =
      "white";
      document.getElementById("unit-value").style.color = "rgb(32, 28, 90)";
      
      // Acceleration
        
        document.getElementById("digits").style.backgroundColor =
          "white";
        document.getElementById("digits").style.color = "black";
      
        document.getElementById("acceleration").style.backgroundColor =
        "white";
      document.getElementById("acceleration").style.color = "black";
      
      document.getElementById("time").style.backgroundColor =
      "white";
      document.getElementById("time").style.color = "black";
      
      document.getElementById("initial-speed").style.backgroundColor =
      "white";
      document.getElementById("initial-speed").style.color = "black";
      
      document.getElementById("final-speed").style.backgroundColor =
      "white";
      document.getElementById("final-speed").style.color = "black";
      
      // Force
      
      document.getElementById("digits-force").style.backgroundColor =
      "white";
      document.getElementById("digits-force").style.color = "black";
      
      document.getElementById("force-force-formula").style.backgroundColor =
      "white";
      document.getElementById("force-force-formula").style.color = "black";
      
      document.getElementById("mass-force-formula").style.backgroundColor =
      "white";
      document.getElementById("mass-force-formula").style.color = "black";
      
      document.getElementById("acceleration-force-formula").style.backgroundColor =
      "white";
      document.getElementById("acceleration-force-formula").style.color = "black";
      
      // Work
      
      document.getElementById("digits-work").style.backgroundColor =
      "white";
      document.getElementById("digits-work").style.color = "black";
      
      document.getElementById("work-work-formula").style.backgroundColor =
      "white";
      document.getElementById("work-work-formula").style.color = "black";
      
      document.getElementById("force-work-formula").style.backgroundColor =
      "white";
      document.getElementById("force-work-formula").style.color = "black";
      
      document.getElementById("distance-work-formula").style.backgroundColor =
      "white";
      document.getElementById("distance-work-formula").style.color = "black";
      
      // Table
      
      document.getElementById("convert-in").style.backgroundColor =
      "white";
      document.getElementById("convert-in").style.color = "black";
      
      // Buttons
      // Speed
      document.getElementById("speed-speed-formula-button").style.backgroundColor =
      "rgb(183, 200, 255)";
      document.getElementById("speed-speed-formula-button").style.color = "rgb(7, 7, 100)";
      
      document.getElementById("time-speed-formula-button").style.backgroundColor =
      "rgb(183, 200, 255)";
      document.getElementById("time-speed-formula-button").style.color = "rgb(7, 7, 100)";
      
      document.getElementById("distance-speed-formula-button").style.backgroundColor =
      "rgb(183, 200, 255)";
      document.getElementById("distance-speed-formula-button").style.color = "rgb(7, 7, 100)";
      // Acceleration
      document.getElementById("acceleration-button").style.backgroundColor =
      "rgb(236, 255, 241)";
      document.getElementById("acceleration-button").style.color = "rgb(5, 46, 7)";
      
      document.getElementById("time-button").style.backgroundColor =
      "rgb(236, 255, 241)";
      document.getElementById("time-button").style.color = "rgb(5, 46, 7)";
      
      document.getElementById("vi-button").style.backgroundColor =
      "rgb(236, 255, 241)";
      document.getElementById("vi-button").style.color = "rgb(5, 46, 7)";
      
      document.getElementById("vf-button").style.backgroundColor =
      "rgb(236, 255, 241)";
      document.getElementById("vf-button").style.color = "rgb(5, 46, 7)";
      // Force
      document.getElementById("force-force-formula-button").style.backgroundColor =
      "rgb(255, 245, 186)";
      document.getElementById("force-force-formula-button").style.color = "rgb(171, 128, 0)";
      
      document.getElementById("acceleration-force-formula-button").style.backgroundColor =
      "rgb(255, 245, 186)";
      document.getElementById("acceleration-force-formula-button").style.color = "rgb(171, 128, 0)";

      document.getElementById("mass-force-formula-button").style.backgroundColor =
      "rgb(255, 245, 186)";
      document.getElementById("mass-force-formula-button").style.color = "rgb(171, 128, 0)";
      
      // Work
      document.getElementById("work-work-formula-button").style.backgroundColor =
      "rgb(255, 223, 223)";
      document.getElementById("work-work-formula-button").style.color = "rgb(46, 5, 5)";
      
      document.getElementById("force-work-formula-button").style.backgroundColor =
      "rgb(255, 223, 223)";
      document.getElementById("force-work-formula-button").style.color = "rgb(46, 5, 5)";

      document.getElementById("distance-work-formula-button").style.backgroundColor =
      "rgb(255, 223, 223)";
      document.getElementById("distance-work-formula-button").style.color = "rgb(46, 5, 5)";
      
      
      
      
      // Table buttons + selectors
      document.getElementById("from-select").style.backgroundColor =
      "white";
      document.getElementById("from-select").style.color = "rgb(32, 28, 90)";
      
      document.getElementById("to-select").style.backgroundColor =
      "white";
      document.getElementById("to-select").style.color = "rgb(32, 28, 90)";
      
      document.getElementById("go-btn").style.backgroundColor =
      "white";
      document.getElementById("go-btn").style.color = "rgb(32, 28, 90)";

      // Images
document.getElementById("speedpicpara").innerHTML = " <img src='images/formula1.png' alt = '' width = '200px' />"

document.getElementById("accelerationpicpara").innerHTML = "<img width = '250px' src='images/acceleratiin.png' />";

document.getElementById("forcepicpara").innerHTML = "<img width = '250px' src='images/force.png' />";

document.getElementById("workpicpara").innerHTML = "<img width = '300px' src='images/formula4.png' />";

      
      
}

