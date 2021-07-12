window.jQuery || document.write('<script src="js/jquery-3.6.0.js"><\/script>');
$(document).ready(function() {
    $("#list-tecno li a").click(function() {
        var dir = $(this).attr("href"); //guardamos propiedad href de <a> al hacer click
        $("#content-ajax").load(dir + " #content-main"); //carga a contenedor el atributo attr de etiqueta a
        return false; //innhabilita contendido de etiqueta a
    });
});

$(document).ready(function() {
    $("#content-main a[rel=gallery]").fancybox({
        overlayColor: "#2c3e50",
        opacity: true,
        modal: false,
        padding: 2,
        margin: 45,
        overlayOpacity: .9,
        transitionIn: "elastic",
        transitionOut: "easeOutElastic",
        cyclic: true,
        titlePosition: "over",
        enableEscapeButton: false,
        speedIn: 500,
        speedOut: 500,
    });
    /*
     **********************************************
     */
});
$(document).ready(function() {
    $("#content-main #cont-form #formuler #user").focus();
    $("#formuler").validate({
        rules: {
            user: {
                required: true,
            },
            pass: {
                required: true,
                rangelength: [8, 16]
            },
            conf: {
                equalTo: "#pass"
            }
        },
        messages: {
            user: {
                required: "campo user requerido"
            },
            pass: {
                required: "password obligatoria",
                rangelength: "Rango de caracteres invalidos"
            },
            conf: {
                equalTo: "No coinciden las contraseñas"
            }
        },
        errorPlacement: function(error, element) {
            if (element.is(":radio") || element.is(":checkbox")) {
                error.appendTo(element.parent()); //agrega al elemento padre el error
            } else {
                error.insertAfter(element);
            }
        }
    });
    $("#formuler").submit(completedFormuler);
});

function completedFormuler() {
    var con = 0;
    var user = $("#user").val();
    var arrayPass = new Array();
    arrayPass.push(user);
    $(":password").each(function() {
        arrayPass.push($(this).val());
    });
    if (arrayPass[0] != "" && arrayPass[1] != "" && arrayPass[2] != "") {
        if (arrayPass[1] == arrayPass[2]) {
            alert("user: " + arrayPass[0] + "\npassword: " + md5(arrayPass[1]));
        }
    }
}