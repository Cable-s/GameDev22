function load() {
   myStorage = localStorage.getItem('myStoredText')
   if(myStorage  != null){
      document.getElementById('myText1').value = myStorage 
    }
}

function unload() {
   localstorage.setItem('myStoredText',document.getElementById('myText1').value)

}

function retrieve() {
   document.getElementById('myText1').value = localStorage.getItem('myStoredText')
}

function store() {
   localStorage.setItem('myStoredText', document.getElementById('myText1').value)
   document.getElementById('myText1').value = ''
   setTimeout(retrieve, 300)
}

var hearts = localStorage.getItem('myStoredText')

function Hit() {
   hearts = parseInt(hearts - 1);
   document.getElementById('myText1').value = hearts
   negative()
   store()
   setTimeout(retrieve, 200)
}

function negative() {
if (document.getElementById('myText1').value <= -1) {
   document.getElementById('myText1').value = 2
   hearts = document.getElementById('myText1').value
   NumHearts()
} else {
   NumHearts()
}
}

function NumHearts() {
   if (hearts == 2) {
   document.getElementById('heart3').style.left = parseInt(document.getElementById('heart3').style.left) - 1000 + 'px'
}  if (hearts == 1) {
   document.getElementById('heart3').style.left = parseInt(document.getElementById('heart3').style.left) - 1000 + 'px'
   document.getElementById('heart2').style.left = parseInt(document.getElementById('heart2').style.left) - 1000 + 'px'
} if (hearts == 0) {
   document.getElementById('heart3').style.left = parseInt(document.getElementById('heart3').style.left) - 1000 + 'px'
   document.getElementById('heart2').style.left = parseInt(document.getElementById('heart3').style.left) - 1000 + 'px'
   document.getElementById('heart1').style.left = parseInt(document.getElementById('heart3').style.left) - 1000 + 'px'
   alert('You Died')
   document.getElementById('player').style.left = parseInt(document.getElementById('player').style.left) - 1000 + 'px'
   window.location.replace("https://calebmemememe.github.io/GameDev22/public/Final%20Game/Title.html");  
}
}

function moving(event) {
   var dir = 0
   var myKey = event.key;
   
   if (myKey === 'd') {
      moveR();
   }
   if (myKey === 's') {
      moveD();
   }
   if (myKey === 'w') {
      moveU();
   }
   if (myKey === 'a') {
      moveL();
   }
   if (myKey === 'f') {
      att();
   }
   
   }
   
   function moveU(){
     document.getElementById('player').style.top = parseInt(document.getElementById('player').style.top) - 15 + 'px';
     document.getElementById('playerI').style.top = parseInt(document.getElementById('playerI').style.top) - 15 + 'px';
     NumHearts();
     dir = 1;
   }
   function moveD() {
     document.getElementById('player').style.top = parseInt(document.getElementById('player').style.top) + 15 + 'px';
     document.getElementById('playerI').style.top = parseInt(document.getElementById('playerI').style.top) + 15 + 'px';
     NumHearts();
     dir = 2;
   }
   function moveL() {
     document.getElementById('player').style.left = parseInt(document.getElementById('player').style.left) - 15 + 'px';
     document.getElementById('playerI').style.left = parseInt(document.getElementById('playerI').style.left) - 15 + 'px';
     NumHearts();
     dir = 3;
   }
   function moveR() {
     document.getElementById('player').style.left = parseInt(document.getElementById('player').style.left) + 15 + 'px';
     document.getElementById('playerI').style.left = parseInt(document.getElementById('playerI').style.left) + 15 + 'px';
     NumHearts();
     dir = 4;
   }
   function att() {
     if (dir == 4) {
     document.getElementById('attackR').style.width = 25 + "px"
     document.getElementById('attackR').style.height = 75 + "px"
     document.getElementById('attackR').style.left = parseInt(document.getElementById('player').style.left) + 55 + 'px'
     document.getElementById('attackR').style.top = parseInt(document.getElementById('player').style.top) - 15 + 'px'
     setTimeout(attM, 400)
   }
   if (dir == 3) {
     document.getElementById('attackL').style.width = 25 + "px"
     document.getElementById('attackL').style.height = 75 + "px"
     document.getElementById('attackL').style.left = parseInt(document.getElementById('player').style.left) - 30 + 'px'
     document.getElementById('attackL').style.top = parseInt(document.getElementById('player').style.top) - 15 + 'px'
     setTimeout(attM, 400)
   }
   if (dir == 2){
     document.getElementById('attackD').style.width = 75 + "px"
     document.getElementById('attackD').style.height = 25 + "px"
     document.getElementById('attackD').style.left = parseInt(document.getElementById('player').style.left) - 13 + 'px'
     document.getElementById('attackD').style.top = parseInt(document.getElementById('player').style.top) + 55 + 'px'
     setTimeout(attM, 400)
   }
   if (dir == 1){
     document.getElementById('attackT').style.width = 75 + "px"
     document.getElementById('attackT').style.height = 25 + "px"
     document.getElementById('attackT').style.left = parseInt(document.getElementById('player').style.left) - 13 + 'px'
     document.getElementById('attackT').style.top = parseInt(document.getElementById('player').style.top) - 30 + 'px'
     setTimeout(attM, 400)
   }
   
   }
   
   function attM() {
     document.getElementById('attackT').style.left = parseInt(document.getElementById('attackT').style.left) - 1000 + 'px'
     document.getElementById('attackD').style.left = parseInt(document.getElementById('attackD').style.left) - 1000 + 'px'
     document.getElementById('attackL').style.left = parseInt(document.getElementById('attackL').style.left) - 1000 + 'px'
     document.getElementById('attackR').style.left = parseInt(document.getElementById('attackR').style.left) - 1000 + 'px'}