/*function myFunction() {
    document.getElementById("myDropdown1").classList.toggle("prod__cont__img--colorIn");
    document.getElementById("myDropdown1").classList.toggle("prod__cont__img--colorGr");
    document.getElementById("myDropdown2").classList.toggle("show");
    var dropdowns = document.getElementsByClassName("dropdown-content");
  
      if (dropdowns.classList.contains('show')) {
        dropdowns.classList.remove('show');
      
    }
}*/

/*window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
  
      if (dropdowns.classList.contains('show')) {
        dropdowns.classList.remove('show');
      
    }
  }
}*/

/*var b = document.getElementById('btn');

b.addEventListener('click', () => {
    document.getElementById("myDropdown1").classList.toggle("prod__cont__img--colorIn");
    document.getElementById("myDropdown1").classList.toggle("prod__cont__img--colorGr");
    document.getElementById("myDropdown2").classList.toggle("show");

    var dropdowns = document.getElementsByClassName("dropdown-content");
  
      if (dropdowns.classList.contains('show')) {
        dropdowns.classList.remove('show');
      
    }
});*/






var btnPic1 = document.getElementById('pic1');

btnPic1.addEventListener('click', ()=> {
  document.getElementById('text1').classList.toggle("show");
  document.getElementById("pic1").classList.toggle("prod__cont__img--colorIn");
  document.getElementById("pic1").classList.toggle("prod__cont__img--colorGr");
})



















//formularz

var btnForm1 = document.getElementsByClassName('form__cont__btn')[0];
var form = document.getElementsByClassName('form__cont__form')[0];
var text = document.getElementsByClassName('form__cont__text')[0];
form.hidden=true;
text.hidden=true;

var arD = document.getElementById('ar');

btnForm1.addEventListener('click', ()=> {
  if ((form.hidden === true) & (text.hidden === true)) {
    arD.classList.remove('flaticon-download');
    arD.classList.add('flaticon-up-arrow-1');
   
    form.hidden = false;
    text.hidden = false;
  }
  else {
    arD.classList.remove('flaticon-up-arrow-1');
    arD.classList.add('flaticon-download');
 
    form.hidden = true;
    text.hidden = true;
  }
});

//walidacja formularza

function checkForm() {
  var nameF = document.getElementsByName('name')[0];
  var nameFv= nameF.value;
  var emailF = document.getElementsByName('email')[0];
  var emailFv= emailF.value;
  var phoneF = document.getElementsByName('phone')[0];
  var phoneFv = phoneF.value;
  var companyF = document.getElementsByName('companyName')[0];
  var perF = document.getElementsByClassName('form__cont__form__ch')[0];
  var permF = document.getElementsByClassName('p--form')[1];
  var permFv = permF.value;

  if (nameFv === '') {
   nameF.setAttribute('placeholder', 'Write name');
  }
  else {
    if ((phoneFv === '') & (emailFv === '')) {
      phoneF.setAttribute('placeholder', 'Write phone number');
      emailF.setAttribute('placeholder', 'Write e-mail');
    }
    else {
      if (perF.checked !== true) {
        permF.textContent = 'Check the checkbox.';
      }
 
      else {

        nameF.value = '';
        phoneF.value = '';
        emailF.value= '';
        companyF.value = '';
        perF.checked = '';
        permF.textContent = 'Form has been sent.';
        nameF.setAttribute('placeholder', 'Your Name');
        phoneF.setAttribute('placeholder', 'Your telephone number');
        emailF.setAttribute('placeholder', 'Your email adress');
      }
    }
  }
}

var btnForm2 = document.getElementsByClassName('form__cont__form__btn')[0];

btnForm2.addEventListener('click', checkForm);


