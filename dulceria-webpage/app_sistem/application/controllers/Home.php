<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {

	
	public function index()
	{
       	include 'Aplicacion.php';
  

        $data['vista'] = "V_home";

		$this->load->view('Cabecera',$data);
		$this->load->view('V_home',$data);
		$this->load->view('Pie');
	}
}
