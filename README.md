# task_8.11

Zadanie: Manipulowanie DOM po kliknięciu

Dodaj do strony listę elementów (&lt;ul&gt;) oraz przycisk. Kliknięcie w niego będzie powodowało dodawanie elementów do listy.


<c class="block">&lt;ul id=&quot;list&quot;&gt;
    &lt;li&gt; item 0&lt;/li&gt;
&lt;/ul&gt;</c>

<c classs="block">&lt;button id=&quot;addElem&quot;&gt;
     dodaj
 &lt;/button&gt;</c>
  
Spraw, aby po kliknięciu buttona do listy został dodany elementy z napisem item oraz kolejnym numerem (tj. 0, 1, 2...)

Spodziewane elementy listy po kliknięciu buttona kilkukrotnie to:

<ul id="list">
  <li>item 0</li>
  <li>item 1</li>
  <li>item 2</li>
</ul>
Użyj funkcji addEventListener, aby nadać listener na przycisk.

Zapamietaj w zmiennej list odniesienie do elementu z id Lista.

var list = document.getElementById('Lista')
To samo zrób dla elementu <button> - przypisz go do zmiennej o nazwie add.

Dodaj listener do buttona - ma on reagować na kliknięcie, czyli na rodzaj eventu click.

add.addEventListener('click', function() {});
Wewnątrz funkcji, która została przekazana w listenerze, dodaj kod odpowiadający za dodawanie elementów do listy.

Możesz posłużyć się właściwością innerHTML dostępną na elemencie List i dopisywać do niej ciąg znaków.

list.innerHTML += '<c><li>item</li></c>'
W odpowiednim miejscu wstaw liczbę bieżącego elementu.

Możesz w tym celu skorzystać z funkcji getElementsByTagName oraz właściwości length, aby dowiedzieć się, ile elementów ma lista ma w danym momencie.

Stwórz nowe repozytorium i wyślij tam swoje zadanie, a link do niego wklej poniżej. Pamiętaj o udostępnieniu repozytorium swojemu mentorowi.