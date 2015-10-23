var solfeggio;
      var brainWave;

      var ut = 396;
      var re = 417;
      var mi = 528;
      var fa = 639;
      var sol = 741;
      var la = 852;

      var delta = .5;
      var theta = 4;
      var alpha = 8;
      var beta = 13;
      var gamma = 30;
      var highGamma = 42; 

      var context = new AudioContext(); // Create audio container

      oscillator1 = context.createOscillator(); // Create osc 1
      oscillator1.type = "sine"; // Sine wave
      oscillator2 = context.createOscillator(); // Create bass guitar
      oscillator2.type = "sine"; // Sine wave
      gainNode = context.createGain(); // Create gain to control volume
      gainNode.connect(context.destination); // Connect gain to output
      gainNode.gain.value = 0.7; // Set volume at 70% (oscillators are loud!)
      
      pannerNode1 = context.createStereoPanner(); // Pan oscillator 1 left
      pannerNode1.pan.value = -1;

      pannerNode2 = context.createStereoPanner(); // Pan oscillator 2 right
      pannerNode2.pan.value = 1;

      oscillator1.connect(pannerNode1); //Connect oscillator1 to pan1
      pannerNode1.connect(gainNode); // Connect pan 1 to gain
      oscillator2.connect(pannerNode2); //Connect oscillator 2 to pan2
      pannerNode2.connect(gainNode); // Connect pan 2 to gain

var loadBeat = function (event) {  // Gets user input from radio buttons
  event.preventDefault();

    if (document.getElementById('ut').checked == true) { //Solfeggio selection
      solfeggio = ut;
    } else if (document.getElementById('re').checked == true) {
      solfeggio = re;
    } else if (document.getElementById('mi').checked == true) {
      solfeggio = mi;
    } else if (document.getElementById('fa').checked == true) {
      solfeggio = fa;
    } else if (document.getElementById('sol').checked == true) {
      solfeggio = sol;
    }

    if (document.getElementById('delta').checked == true) { //Brainwave selection
      brainWave = delta;
    } else if (document.getElementById('theta').checked == true) {
      brainWave = theta;
    } else if (document.getElementById('alpha').checked == true) {
      brainWave = alpha;
    } else if (document.getElementById('beta').checked == true) {
      brainWave = beta;
    } else if (document.getElementById('gamma').checked == true) {
      brainWave = gamma;
    } else if (document.getElementById('highGamma').checked == true) {
      brainWave = highGamma;
    }

    var leftBeat = solfeggio - (brainWave / 2); // Determines left frequency
    var rightBeat = solfeggio + (brainWave / 2); // Determines right frequency

    oscillator1.frequency.value = leftBeat; // Sets frequency in hertz

    oscillator2.frequency.value = rightBeat; // Sets frequency in hertz
      

    oscillator1.start(); // Play oscillator 1
    oscillator2.start(); // Play oscillator 2
  }

var stopBeat = function() {
  event.preventDefault;
    oscillator1.stop(); // Stop oscillator 1
    oscillator2.stop(); // Stop oscillator 2
}

var launchBeat = document.getElementById('launchBeat'); //Launch button
launchBeat.addEventListener('click', loadBeat);

var stopBeats = document.getElementById('stopBeat'); //Stop button
stopBeats.addEventListener('click', stopBeat);