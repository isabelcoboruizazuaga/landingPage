
$(document).ready(function () {

    //Click sobre enlaces en navbar
    $(".nav-link").on("click", function () {
        //Si es dropdown
        if ($(this).parent().hasClass("dropdown")) {
            $('.dropdown-menu').show();

        } else {
            //Ocultar en dispositivos móviles
            $(".navbar-collapse").hide();
            menuIsShown = !menuIsShown;
        }
        //Demás enlaces
        if(!$("active").hasClass("item")){
            $("active").removeClass("active");
        }
        $(this).addClass("active");

    });

    //Click en elementos del dropdown
    $(".dropdown-item").on("click", function () {
        if(!$("active").hasClass("item")){
            $("active").removeClass("active");
        }
        $(".nav-link.dropdown-toggle").addClass("active");

        //Ocultar en dispositivos móviles
        $(".navbar-collapse").hide();
        menuIsShown = !menuIsShown;
    });

    //Oculta el dropdown cuando no esté en uso
    $(document).ready(function () {
        $('.dropdown-menu').focusout(function () {
            $('.dropdown-menu').hide();
        });

    });

    //Muestra u oculta navbar
    $('.navbar-toggler').on("click", function () {
        (menuIsShown) ? $(".navbar-collapse").hide() : $(".navbar-collapse").show()
        menuIsShown = !menuIsShown;
    });



    var menuIsShown = false;
})