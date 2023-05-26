let x = 0;

function cat() {
    x++;
    var soundsList = Array('sfx/cat/meow.mp3', 'sfx/cat/meow2.mp3', 'sfx/cat/meow3.mp3', 'sfx/cat/meow4.mp3', 'sfx/cat/meow5.mp3');
    var sounds = soundsList[Math.floor(Math.random()*soundsList.length)];
    var sound = new Audio(sounds);
    sound.volume = 0.1;
    sound.play();
    console.log('press number: ' + x)
}