

/* ===============================================================
        FUNCION PARA LA VALIDACION DE NUMEROS
================================================================*/

  function soloNumeros(e) {

    var key = window.Event ? e.which : e.keyCode
      return (key >= 48 && key <= 57 || (key==8)) 
  }

/* ===============================================================
        FUNCION PARA LA VALIDACION DEL CORREO
================================================================*/

  function validar_email( email ) {
    
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return regex.test(email) ? true : false;
     
  }


function guardar_perfil() {
    
    var especialidad = $('#esp_profesional').val();
    var nombre = $('#nombre').val();
    var fecha_n      = $('#f_nacimiento').val();
    var a_paterno      = $('#a_paterno').val();
    var a_materno      = $('#a_materno').val();
    var perfil      = $('#t_perfil').val();
    var rfc      = $('#rfc').val();
    var telefono      = $('#n_telefono').val();
    var email      = $('#email').val();
    var direccion      = $('#direccion').val();



    if (especialidad=='') {

      Swal.fire({
          title: "Error!",
          text: "Favor de ingresar la Especialidad.",
          type: "error",
          button: "Ok",
        });
        $('#esp_profesional').focus();
          return false;

    };

    if (nombre=='') {

      Swal.fire({
          title: "Error!",
          text: "Favor de ingresar el Nombre.",
          type: "error",
          button: "Ok",
        });
        $('#nombre').focus();
          return false;

    };

    if (fecha_n=='') {

      Swal.fire({
          title: "Error!",
          text: "Favor de ingresar la Fecha de Nacimiento.",
          type: "error",
          button: "Ok",
        });
        $('#f_nacimiento').focus();
          return false;

    };

    if (a_paterno=='') {

      Swal.fire({
          title: "Error!",
          text: "Favor de ingresar el Apellido Paterno.",
          type: "error",
          button: "Ok",
        });
        $('#a_paterno').focus();
          return false;

    };

    if (a_materno=='') {

      Swal.fire({
          title: "Error!",
          text: "Favor de ingresar el Apellido Materno.",
          type: "error",
          button: "Ok",
        });
        $('#a_materno').focus();
          return false;

    };

    if (perfil==0) {

      Swal.fire({
          title: "Error!",
          text: "Favor de seleccionar el Tipo de Perfil.",
          type: "error",
          button: "Ok",
        });
        $('#t_perfil').focus();
          return false;

    };

    if (rfc=='') {

      Swal.fire({
          title: "Error!",
          text: "Favor de ingresar el RFC del Usuario.",
          type: "error",
          button: "Ok",
        });
        $('#rfc').focus();
          return false;

    };

    if (telefono=='') {

      Swal.fire({
          title: "Error!",
          text: "Favor de ingresar el Num. Telefono.",
          type: "error",
          button: "Ok",
        });
        $('#n_telefono').focus();
          return false;

    };

    if (email=='') {

      Swal.fire({
          title: "Error!",
          text: "Favor de ingresar el Correo.",
          type: "error",
          button: "Ok",
        });
        $('#email').focus();
          return false;

    }else{
        if (!validar_email($('#email').val()) ) {
          Swal.fire({
            title: "Es correcto el Email?",
            text: "Favor de verificar que este bien escrito.",
            type: "error",
            button: "Ok",
          });
          $('#email').focus();
            return false;
        };
      };

    if (direccion=='') {

      Swal.fire({
          title: "Error!",
          text: "Favor de ingresar la Direccion del Usuario.",
          type: "error",
          button: "Ok",
        });
        $('#direccion').focus();
          return false;

    };

    $.ajax({
        url:"User/guardar_perfil",
        type:"POST",
        data:{especialidad:especialidad,
        		nombre:nombre,
        		fecha_n:fecha_n,
        		a_paterno:a_paterno,
        		a_materno:a_materno,
        		perfil:perfil,
        		rfc:rfc,
        		telefono:telefono,
        		email:email,
        		direccion:direccion},
          success:function(respuesta) {

            console.log(respuesta);

              if (respuesta==1) {

                  Swal.fire({
                    position: 'top-end',
                    type: 'success',
                    title: 'Los datos fueron guardados',
                    showConfirmButton: false,
                    timer: 2200
                  })

                   mostrarCategorias();
              } else {
                  Swal.fire({
                    position: 'top-end',
                    type: 'error',
                    title: 'Ocurrio un error, nose guardaron los datos',
                    showConfirmButton: false,
                    timer: 2000
                  })
              }

    
              

          }


    });



}