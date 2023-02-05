$( document ).ready(function() {

    $(main).scroll(function() {  // Asigna una función anónima a la acción de scroll en la ventana

        var scroll = $(window).scrollTop();  // Obtiene la posición actual del scroll en la página
        $('.menu').each(function() {  // Itera sobre cada enlace en el menú de navegación

            var section = $($(this).prop('hash')); // Obtiene el elemento HTML al que se hace referencia por el enlace actual
            if (section.offset().top <= scroll + 10) {  // Comprueba si el elemento está dentro de la zona visible de la página
                $('.menu').removeClass('activo');  // Elimina la clase "active" de todos los enlaces en el menú de navegación
                $(this).addClass('activo');  // Agrega la clase "active" al enlace actual
            }

        });
      });

});

