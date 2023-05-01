let x = 0;

function showcat() {
    catEmoji = document.getElementById('catEmoji')
    catEmoji.style.display = 'block';
    setTimeout(() => { catEmoji.style.display = 'none'; }, 1000);
}

function cat() {
    x++;
    var soundsList = Array('sfx/meow.mp3', 'sfx/meow2.mp3', 'sfx/meow3.mp3', 'sfx/meow4.mp3', 'sfx/meow5.mp3');
    var sounds = soundsList[Math.floor(Math.random()*soundsList.length)];
    var sound = new Audio(sounds);
    sound.volume = 0.1;
    sound.play();
    console.log(x)
    if (x >= '10') {
       showcat() 
    }
}