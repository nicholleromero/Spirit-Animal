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

      oscillator1 = context.createOscillator(); // Create bass guitar
      oscillator1.type = "sine"; // Square wave
      oscillator2 = context.createOscillator(); // Create bass guitar
      oscillator2.type = "sine"; // Square wave
      gainNode = context.createGain(); // Create boost pedal
      gainNode.connect(context.destination); // Connect boost pedal to amplifier
      gainNode.gain.value = 0.7; // Set boost pedal to 30 percent volume
      
      pannerNode1 = context.createStereoPanner();
      pannerNode1.pan.value = -1;

      pannerNode2 = context.createStereoPanner();
      pannerNode2.pan.value = 1;

      oscillator1.connect(pannerNode1);
      pannerNode1.connect(gainNode); // Connect bass guitar to boost pedal
      oscillator2.connect(pannerNode2);
      pannerNode2.connect(gainNode); // Connect bass guitar to boost pedal

var loadBeat = function (event) {
  event.preventDefault();

    if (document.getElementById('ut').checked == true) {
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

    if (document.getElementById('delta').checked == true) {
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

    var leftBeat = solfeggio - (brainWave / 2);
    var rightBeat = solfeggio + (brainWave / 2);

    oscillator1.frequency.value = leftBeat; // frequency in hertz

    oscillator2.frequency.value = rightBeat; // frequency in hertz
      

    oscillator1.start(); // Play bass guitar instantly
    oscillator2.start();
  }

var stopBeat = function() {
  event.preventDefault;
    oscillator1.stop(); // Play bass guitar instantly
    oscillator2.stop();
}

var launchBeat = document.getElementById('launchBeat');
launchBeat.addEventListener('click', loadBeat);

var stopBeats = document.getElementById('stopBeat');
stopBeats.addEventListener('click', stopBeat);