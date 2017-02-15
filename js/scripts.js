// plik scripts.js EVENTS

// metoda nr.1 polega na tworzeniu nowego elementu listy (li) i wpisaniu do niego tekstu "item" oraz numeru. 
//wymaga zastosowania w kodzie HTML dla przycisku zdarzenia onclick = myFunction()

function myFunction() {
    
    var list = document.getElementById('list');
    var newElem = document.createElement('li');
    var numer = document.getElementsByTagName('li').length;

    newElem.innerHTML = 'item ' + numer;

    list.appendChild(newElem);
}


/* wynik metody nr.1:
* item 0
* item 1
* item 2
* item 3
*/





// metoda nr.2 nie wymaga stosowania w kodzie HTML zadarzenia onclick, poniewaz korzysta z addEventListener.
// w tej metodzie numer wyswietla sie w nowej lini!!!. 

/*
function myFunction() {
     
    var numer = document.getElementsByTagName('li').length;
    
    
    list.innerHTML += '<li>item</li>' + numer;

}

var add = document.getElementById("addElem");

add.addEventListener("click", function(e) {
  myFunction()
});

// wynik metody nr.2 - liczba wyswietla sie w nowym wierszu!

* item 0
* item
  1
* item 
  2
* item 
  3

*/

