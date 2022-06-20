
// efeito no menu
(function() {
  var nav = document.getElementById('barraNav');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) nav.classList.add('menuFixo');
    else nav.classList.remove('menuFixo');
  });
})();

(function() {
  var logo = document.getElementById('menu-logo');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) logo.classList.add('efeito-logo');
    else logo.classList.remove('efeito-logo');
  });
})();


// Voltar ao inicio
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// fazer o botao de inicio aparecer
(function() {
  var topo = document.getElementById('ir-topo');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 500) topo.classList.add('botao-topo');
    else topo.classList.remove('botao-topo');
  });
})();


function abrirLogin() {
  window.open("login.html");
}



function validarForm() {
  var nome = document.forms[0].texto.value;
  var email = document.forms[0].email.value;
  var telefone = document.forms[0].telefone.value;
  var mensagem = document.forms[0].texto.value;

  if(nome=="" || email=="" || telefone=="" || mensagem==""){
    alert("HUM... PARECE QUE VOCÊ ESQUECEU DE PREENCHER OS CAMPOS...");   
  }
  return false;
}



// tentando validar o form :/

var campoNumero = document.querySelector('.numero');
var regex = /^\(\d{2}\)\d{4,5}-\d{4}$/;

function numero() {
  if (regex.test(campoNumero.value)) {
    alert("Esse é um numero fixo");
  } else {
    alert("Email e número de telefone válidos!");

  }
}


var campoText = document.querySelector('.text');
var regex = /([a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9._-]+)/gi;

function text() {
  if (regex.test(campoText.value)) {
    alert("Esse é um email inválido");
  } else {
    alert("Esse é um email válido");

  }
}

function validatorTelefone(telefone) {
  let telefonePattern = /^\(\d{2}\)\d{4,5}-\d{4}$/;
  return telefonePattern.test(telefone);
}




// Menu NavBar responsivo
class MobileNavbar {

  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`)
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".celular-menu",
  ".lista",
  ".lista li",
);
mobileNavbar.init();
