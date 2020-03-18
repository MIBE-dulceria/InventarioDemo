<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Table extends CI_Controller {


	public function index()
	{

		include 'Aplicacion.php';
        
		 $data['vista'] = 'table';
		 
		$this->load->view('cabecera',$data);
		$this->load->view('table');
		$this->load->view('pie');
	}
}
