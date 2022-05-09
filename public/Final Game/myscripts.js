function load() {
   myStorage = localStorage.getItem('myStoredText')
   if(myStorage  != null){
      document.getElementById('myText1').value = myStorage 
    }
    retrieve()
}

function load2() {
   localstorage.setItem('myStoredText',document.getElementById('myText1').value)
}

function store() {
   localStorage.setItem('myStoredText', document.getElementById('myText1').value)
   alert(document.getElementById('myText1').value + ' \nHas been stored')
   document.getElementById('myText1').value = ""
}

function retrieve() {
   document.getElementById('myText1').value = localStorage.getItem('myStoredText')
   document.getElementById('div01').innerHTML = document.getElementById('myText1').value
}

function clear() {
   localStorage.clear();
}