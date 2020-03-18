<?php


	class Model_user extends CI_Model {

		function __construct() {

			parent::__construct();
			$this->load->database();
		}

		function guardar($data) {

			$this->db->insert('medi_personas', $data);

				if ($this->db->affected_rows() > 0) {
					return true;
				} else {
					return false;
				}

		}



	}


?>