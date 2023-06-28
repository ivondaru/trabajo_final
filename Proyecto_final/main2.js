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

document.getElementById("formulario-contacto").addEventListener("submit", function(event) {
    var telefonoInput = document.getElementById("telefono");
    var telefonoValue = telefonoInput.value;
    

    var nombreInput = document.getElementById("nombre");
    var nombreValue = nombreInput.value;

    if (telefonoValue.length !== 10) {
      alert("Teléfono no válido. Debe contener 10 dígitos.");
      event.preventDefault(); // Evita que el formulario se envíe
    } else
    {
      if (nombreValue.length > 30 || nombreValue.length < 3 ) {
        alert("Nombre no válido");
        event.preventDefault(); // Evita que el formulario se envíe
      }
      else
      {
        alert("Ok correctos!!");
      }
    }
    
    
    
    
  });