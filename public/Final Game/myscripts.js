function load() {
   myStorage = localStorage.getItem('myStoredText')
   if(myStorage  != null){
      document.getElementById('myText1').value = myStorage 
    }
    NumHearts()
}

function unload() {
   localstorage.setItem('myStoredText',document.getElementById('myText1').value)

}

function retrieve() {
   document.getElementById('myText1').value = localStorage.getItem('myStoredText')
}

function store() {
   localStorage.setItem('myStoredText', document.getElementById('myText1').value)
   alert(document.getElementById('myText1').value + ' \nHas been stored')
   document.getElementById('myText1').value = ''
}

var hearts = localStorage.getItem('myStoredText')

function Hit() {
   hearts = parseInt(hearts - 1);
   document.getElementById('myText1').value = hearts
   store()
   setTimeout(retrieve, 200)
   NumHearts()
}

function NumHearts() {
   if (hearts == 2) {
   document.getElementById('heart3').style.left = parseInt(document.getElementById('heart3').style.left) - 1000 + 'px'
}  if (hearts == 1) {
   document.getElementById('heart3').style.left = parseInt(document.getElementById('heart3').style.left) - 1000 + 'px'
   document.getElementById('heart2').style.left = parseInt(document.getElementById('heart2').style.left) - 1000 + 'px'
} if (hearts <= 0) {
   document.getElementById('heart3').style.left = parseInt(document.getElementById('heart3').style.left) - 1000 + 'px'
   document.getElementById('heart2').style.left = parseInt(document.getElementById('heart3').style.left) - 1000 + 'px'
   document.getElementById('heart1').style.left = parseInt(document.getElementById('heart3').style.left) - 1000 + 'px'
   alert('You Died')
}
}
