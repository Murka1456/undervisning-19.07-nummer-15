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
loginButton .addEventListener ("clik",function(event)
{
  event.preventDefault();
  console.log("Button clicked!");
  //Hent
  const userEmail =document.querySelector("#userEmail");
 
 
  const userPassord = document.querySelector("#userPassord");//henter selve input-element
  const viewPassord = document.querySelector("#viewPassord");
  const rememberLogin = document.querySelector("#rememberLogin");
  const loginDisplay = document.querySelector("#loginDisplay");
  console.log(userEmail, userPassord,viewPassord, rememberLogin,loginDisplayisplay);
  //Modifiser
  const emailValue = userEmail.ariaValue;//henter verdien inni element
  const passwordValue = userPssord.value;
  const emailDisplay = document.createDocument("p"); //lager nytt element
  emailDisplay.textContent = emailValue;// gir div-element det nye p-element
  const pasordDisplay = document.createElement("p");
  pasordDisplay.textContent = emailValue;
  const viewValue = viewPassord.value;
  console.log(viewValue);
  //Send
  console.log("Din epost adresse er: "+emailValue +".");
console.log(`Din passord er: ${passordValue}`);
loginDisplay.appendChild(emailDisplay);//Gir div-element det nye p-element med innhold
logingDisplay.appendChild(passordDisplay);
});
