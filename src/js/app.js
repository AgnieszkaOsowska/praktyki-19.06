//produkty


var btnPic1 = document.getElementById('pic1');
btnPic1.addEventListener('click', ()=> {
  document.getElementById('text1').classList.toggle("show");
  document.getElementById("pic1").classList.toggle("prod__cont__img--colorIn");
  document.getElementById("pic1").classList.toggle("prod__cont__img--colorGr");
});

var btnPic2 = document.getElementById('pic2');
btnPic2.addEventListener('click', ()=> {
  document.getElementById('text2').classList.toggle("show");
  document.getElementById("pic2").classList.toggle("prod__cont__img--colorIn");
  document.getElementById("pic2").classList.toggle("prod__cont__img--colorGr");
});

var btnPic3 = document.getElementById('pic3');
btnPic3.addEventListener('click', ()=> {
  document.getElementById('text3').classList.toggle("show");
  document.getElementById("pic3").classList.toggle("prod__cont__img--colorIn");
  document.getElementById("pic3").classList.toggle("prod__cont__img--colorGr");
});

var btnPic4 = document.getElementById('pic4');
btnPic4.addEventListener('click', ()=> {
  document.getElementById('text4').classList.toggle("show");
  document.getElementById("pic4").classList.toggle("prod__cont__img--colorIn");
  document.getElementById("pic4").classList.toggle("prod__cont__img--colorGr");
});

var btnPic5 = document.getElementById('pic5');
btnPic5.addEventListener('click', ()=> {
  document.getElementById('text5').classList.toggle("show");
  document.getElementById("pic5").classList.toggle("prod__cont__img--colorIn");
  document.getElementById("pic5").classList.toggle("prod__cont__img--colorGr");
});

var btnPic6 = document.getElementById('pic6');
btnPic6.addEventListener('click', ()=> {
  document.getElementById('text6').classList.toggle("show");
  document.getElementById("pic6").classList.toggle("prod__cont__img--colorIn");
  document.getElementById("pic6").classList.toggle("prod__cont__img--colorGr");
});

var btnPic7 = document.getElementById('pic7');
btnPic7.addEventListener('click', ()=> {
  document.getElementById('text7').classList.toggle("show");
  document.getElementById("pic7").classList.toggle("prod__cont__img--colorIn");
  document.getElementById("pic7").classList.toggle("prod__cont__img--colorGr");
});

var btnPic8 = document.getElementById('pic8');
btnPic8.addEventListener('click', ()=> {
  document.getElementById('text8').classList.toggle("show");
  document.getElementById("pic8").classList.toggle("prod__cont__img--colorIn");
  document.getElementById("pic8").classList.toggle("prod__cont__img--colorGr");
});

var btnPic9 = document.getElementById('pic9');
btnPic9.addEventListener('click', ()=> {
  document.getElementById('text9').classList.toggle("show");
  document.getElementById("pic9").classList.toggle("prod__cont__img--colorIn");
  document.getElementById("pic9").classList.toggle("prod__cont__img--colorGr");
});

var btnPic10 = document.getElementById('pic10');
btnPic10.addEventListener('click', ()=> {
  document.getElementById('text10').classList.toggle("show");
  document.getElementById("pic10").classList.toggle("prod__cont__img--colorIn");
  document.getElementById("pic10").classList.toggle("prod__cont__img--colorGr");
});

var btnPic11 = document.getElementById('pic11');
btnPic11.addEventListener('click', ()=> {
  document.getElementById('text11').classList.toggle("show");
  document.getElementById("pic11").classList.toggle("prod__cont__img--colorIn");
  document.getElementById("pic11").classList.toggle("prod__cont__img--colorGr");
});

var btnPic12 = document.getElementById('pic12');
btnPic12.addEventListener('click', ()=> {
  document.getElementById('text12').classList.toggle("show");
  document.getElementById("pic12").classList.toggle("prod__cont__img--colorIn");
  document.getElementById("pic12").classList.toggle("prod__cont__img--colorGr");
});



//formularz

var btnForm1 = document.getElementsByClassName('form__cont__btn')[0];
var form = document.getElementsByClassName('form__cont__form')[0];
var text = document.getElementsByClassName('form__cont__text')[0];
var aside = document.getElementsByClassName('hideAside')[0];

form.hidden=true;
text.hidden=true;
aside.hidden=true;

var arD = document.getElementById('ar');

btnForm1.addEventListener('click', ()=> {
  if ((form.hidden === true) & (text.hidden === true)) {
    arD.classList.remove('flaticon-download');
    arD.classList.add('flaticon-up-arrow-1');
    aside.classList.remove('hideAside');
   
    form.hidden = false;
    text.hidden = false;
    //aside.hidden=false;
  }
  else {
    arD.classList.remove('flaticon-up-arrow-1');
    arD.classList.add('flaticon-download');
 
    form.hidden = true;
    text.hidden = true;
    aside.hidden=true;
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


//cookies

var btnCookie = document.getElementsByClassName('cookie__cont__btn')[0];

btnCookie.addEventListener('click', ()=>{
  document.getElementsByClassName('cookie')[0].classList.toggle('hideCookie');
})



