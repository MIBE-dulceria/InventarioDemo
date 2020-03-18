<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Medicamentos extends CI_Controller {

	
	public function index()
	{
       	include 'Aplicacion.php';
  

        $data['vista'] = "medicamentos";

		$this->load->view('Cabecera',$data);
		$this->load->view('V_medicamentos');
		$this->load->view('pie');
	}
}
