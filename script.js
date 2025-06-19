// Hent "knappen" som skal aktivere noe
const hamburgerIcon = document.querySelector('#hamburgerIcon');
console.log(hamburgerIcon);

hamburgerIcon.addEventListener('click', function () {
  // Hente elementet som skal bli synlig
  const navList = document.querySelector('#navList');
  console.log(navList);

  navList.classList.remove('hidden');
  navList.classList.add('navList');
});

const sunIcon = document.querySelector('#sunIcon');
console.log(sunIcon);

sunIcon.addEventListener('click', function () {
  const body = document.querySelector('body');

  body.classList.remove('light');
  body.classList.add('dark');
});





const loginButton = document.querySelector('#logingButton');
console.log(loginButton);
loginButton .addEventListener("clik",function(event){
  event.preventDefault();
  console.log("Button clicked!");
  //Hent
  const userEmail =document.querySelector("#userEmail");
 
 
  const userPassord = document.querySelector("#userPassord");
  const viewPassord = document.querySelector("#viewPassord");
  const rememberLogin = document.querySelector("#rememberLogin");
  console.log(userEmail, userPassord,viewPassord, rememberLogin);
  //Modifiser
  const emailValue = userEmail.ariaValue;
  const passwordValue = userPssord.value;
  //Send
  console.log("Din epost adresse er: "+emailValue +".");
  
});
