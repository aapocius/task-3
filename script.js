/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */
'use strict';

const ENDPOINT = 'https://api.github.com/users';

var btn = document.getElementById('btn');
var output = document.getElementById('output');
var user = document.getElementsByClassName('gituser')

btn.addEventListener('click', function(e){
    e.preventDefault();

fetch(ENDPOINT)
 .then(res => res.json())
  .then(data => {

 data.map(x => {
          var newuser = document.createElement('div');
          newuser.classList.add('gituser')
          newuser.innerHTML = 
          
          `
           <img src="${x.avatar_url}" alt="" onclick="(location.href = '${x.html_url}')">
              <h3>${x.login}</h3>
          `
          output.append(newuser);
          
      });
      console.log(data);
    
  })
.catch(e => console.log(e.message))
    
})
