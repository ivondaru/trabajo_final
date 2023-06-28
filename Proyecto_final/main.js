
//menu scroll, sacado de internet
$(document).ready(function(){
	var altura = $('.menu').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.menu').addClass('menu-fixed');
		} else {
			$('.menu').removeClass('menu-fixed');
		}
	});
});




//procesos con el formulario de donar, pasar un valor al input otro valor
const btn100mil = document.querySelector('button[name="btn100mil"]');
const btn200mil = document.querySelector('button[name="btn200mil"]');
const btn300mil = document.querySelector('button[name="btn300mil"]');
const btn400mil = document.querySelector('button[name="btn400mil"]');
const otroValorBtn = document.getElementById('otro-valor-btn');
const otroValorInput = document.getElementById('otro-valor');

btn100mil.addEventListener('click', function() {
  otroValorInput.value = '100000';
  otroValorInput.disabled=true;
  //otroValorInput.enable="false";
});

btn200mil.addEventListener('click', function() {
  otroValorInput.value = '200000';
  otroValorInput.disabled=true;
});

btn300mil.addEventListener('click', function() {
  otroValorInput.value = '300000';
  otroValorInput.disabled=true;
});

btn400mil.addEventListener('click', function() {
  otroValorInput.value = '400000';
  otroValorInput.disabled=true;
});

otroValorBtn.addEventListener('click', function() {
	otroValorInput.value = '';
	otroValorInput.disabled=false;
  });
//lo que va a hacer cuando tenga el formulario de donacion y aprete los botones
  document.getElementById("donacion-form").addEventListener("submit", function(event) {
    const valorDonacion = parseInt(document.getElementById("otro-valor").value);

    if (isNaN(valorDonacion)) { //validacion de que sea numero
      alert("Ingrese un valor numérico");
      event.preventDefault(); // Evita que el formulario se envíe
    } else
    {
    if (valorDonacion <= 93000) {
      alert("El valor debe ser mayor a 93,000");
      event.preventDefault(); //para el formulario antes de enviar
    } else {
      const confirmacion = confirm("Esta seguro que desea donar $"+ valorDonacion +". ¿Deseas continuar?");
      if (!confirmacion) {
        event.preventDefault(); // Evita que el formulario se envíe
      } else
      {
        alert("Perfecto, puedes donarnos por Nequi a los números 3235186098 y 3043443052, cualquier aporte es cariño");
      }
    }
  }
  });









