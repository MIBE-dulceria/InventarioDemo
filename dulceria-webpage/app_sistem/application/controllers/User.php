<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class User extends CI_Controller {

	public function __construct() {

    	parent::__construct();
      	$this->load->model("Model_user");

  	}

	public function index() {

		include 'Aplicacion.php';
        
		 $data['vista'] = 'user';
		 
		$this->load->view('cabecera',$data);
		$this->load->view('user');
		$this->load->view('pie');
	}

	function guardar_perfil() {


      if ($this->input->is_ajax_request()) {

        $especialidad 	= $this->input->post("especialidad");
        $nombre 		= $this->input->post("nombre");
        $fecha_n 		= $this->input->post("fecha_n");
        $a_paterno 		= $this->input->post("a_paterno");
        $a_materno 		= $this->input->post("a_materno");
        $perfil 		= $this->input->post("perfil");
        $rfc 			= $this->input->post("rfc");
        $telefono 		= $this->input->post("telefono");
        $email 			= $this->input->post("email");
        $direccion 		= $this->input->post("direccion");       
        
        $datos = array(
          "nombre" => $nombre,
          "ap_paterno" => $a_paterno,
          "ap_materno" => $a_materno,
          "fechanacimiento" => $fecha_n,
          "rfc"	=> $rfc,
          "direccion" => $direccion,
          "telefono" => $telefono,
          "tipo" => $perfil,
          "especialidad" => $especialidad,
          "correo" => $email          
          );


        $data= $this->Model_user->guardar($datos);
          

        if($data==true)
          { echo $data;
            return $data;

          } else {
            echo 0;
            return 0;
          }

      } else {
        show_404();
      }


    }
}
