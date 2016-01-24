var loudlinks = (function(){
  
  // Create audio element and make it awesome
  var generateAudioElement = (function() {
    var audioPlayer = document.createElement('audio'); // create the audio element
    audioPlayer.id = 'loudLinksAudioPlayer'; // give the audio element the proper id
    audioPlayer.preload = true; // audio element preload attribute

    var source1 = document.createElement('source'); // creating a source element
    var source2 = document.createElement('source');
    source1.id = 'mp3Source';
    source2.id = 'oggSource';

    audioPlayer.appendChild(source1); // appending the sources to the player element
    audioPlayer.appendChild(source2);

    document.body.appendChild(audioPlayer); // appending the player to the body
  })();

  // declaring stuff ---------------------------------------------
  var audioSrc;
  var soundMp3Link;
  var soundOggLink;
  var element;

  var LoudLinksHover = document.getElementsByClassName('loud-link-hover');
  var LoudLinksClick = document.getElementsByClassName('loud-link-click');
  var audioPlayer = document.getElementById('loudLinksAudioPlayer');
  var mp3Location = 'sounds/mp3/'; // mp3 sounds location
  var oggLocation = 'sounds/ogg/'; // ogg sounds location
  var mp3Source = document.getElementById('mp3Source');
  var oggSource = document.getElementById('oggSource');
  // ------------------------------------------------------------

  // check if the browser supports Audio ¯\_(ツ)_/¯
  checkAudioSupport = function() {
    return !!document.createElement('audio').canPlayType;
  }

  // get the audio source and appending it to <audio>
  getAudioSource = function(element) {
    var audioSrc = element.getAttribute('data-src'); // getting the sound name from the data-src Attribute
    var soundMp3Link = mp3Location + audioSrc + '.mp3'; // settnig the mp3 sound in a variable
    var soundOggLink = oggLocation + audioSrc + '.ogg'; // settnig the ogg sound in a variable
    mp3Source.setAttribute('src', soundMp3Link); // putting the mp3 sound link in the src Attribute of <source>
    oggSource.setAttribute('src', soundOggLink); // putting the mp3 sound link in the src Attribute of <source>

    oggSource.addEventListener('error', function(){
      console.log('😶 D\'oh! The ♪ ogg file URL is wrong!');
    }, false);
    mp3Source.addEventListener('error', function(){
      console.log('😶 D\'oh! The ♪ mp3 file URL is wrong!');
    }, false);
  }

  // checking if the data-src Attribute isn't empty
  checkAttribute = function(element) {
    var audioSrc = element.getAttribute('data-src'); // getting the sound name from the data-src Attribute
    if (audioSrc) {
      return true;
    } else {
      return false;
    }
  }

  // Play audio
  playAudio = function(element) {
    if (checkAttribute(element)) { // check if the data-src Attribute is filled (there is a name of a sound file)
      getAudioSource(element);
      audioPlayer.load();
      audioPlayer.play();
    }
  }
  // Stop audio
  stopAudio = function() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
  }

  // track the element to a certian action
  trackHover = function(element) {
    element.addEventListener('mouseover', function() { // play audio on hover
      playAudio(element);
    }, false);
    // --- all below to stop the sound ---- //
    element.addEventListener('mouseout', function() { // stop audio on mouse out
      stopAudio();
    }, false);
    element.addEventListener('touchmove', function() { // stop audio on touch and move
      stopAudio();
    }, false);
    element.addEventListener('click', function() { // stop audio on click
      stopAudio();
    }, false);
    element.addEventListener('dblclick', function() { // stop audio on double click
      stopAudio();
    }, false);
  }

  // track elements that'll have click event
  trackClick = function(element) {
    element.addEventListener('click', function() {
      playAudio(element);
    }, false);
  }

  // Go crazy! Scan all the links and see if they have the 'data-src' Attribute and do the events
  runTrackers = function() {
    for (var i = 0; i < LoudLinksHover.length; i++) { // Hover
      trackHover(LoudLinksHover[i]);
    }
    for (var i = 0; i < LoudLinksClick.length; i++) { // Click
      trackClick(LoudLinksClick[i]);
    }
  }

  // Check if the browser supports audio then get crazy!
  if (checkAudioSupport()){
    console.log('Audio works like a charm 👍');
    runTrackers();
  } else {
    console.log('Oh man 😩! \nI\'m sorry but your browsers doesn\'t support awesomeness.')
  }

})();
