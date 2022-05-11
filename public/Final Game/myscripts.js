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
   window.location.replace("https://calebmemememe.github.io/GameDev22/public/Final%20Game/Room1.html");  
}
}