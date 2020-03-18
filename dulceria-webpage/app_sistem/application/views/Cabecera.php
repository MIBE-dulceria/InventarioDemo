
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <link rel="apple-touch-icon" sizes="76x76" href="./assets/img/apple-icon.png">
  <link rel="icon" type="image/png" href="./assets/img/favicon.png">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <title>
    <?php  echo Aplicacion::TITULO;  ?>
  </title>
  <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' name='viewport' />
  <!--     Fonts and icons     -->
  <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css">
  <!-- CSS Files -->
  <link href="./assets/css/material-dashboard.css?v=2.1.1" rel="stylesheet" />
  <!-- CSS Just for demo purpose, don't include it in your project -->
  <link href="./assets/demo/demo.css" rel="stylesheet" />
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
  <script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
</head>

<body class="">
  <div class="wrapper ">
    <div class="sidebar " data-color="azure" data-background-color="black" data-image="">
      <!--
        data-color usar:="purple | azure | green | orange | danger"

        data-background-color usar := "white | black | red |

         SON LAS CLASES QUE HAY SE ENCUENTRAN EN MATERIAL-DASHBOARD.CSS EN ASSETS/CSS/ EN LA LINEA DE CODIGO 14741 A PARTIR DE AHI"
    -->
      <div class="logo">
        <a href="http://www.creative-tim.com" class="simple-text logo-normal">
         <?php  echo Aplicacion::TITULO;  ?>
        </a>
      </div>
      <div class="sidebar-wrapper">
        <ul class="nav">


          <li class="nav-item <?php  if ($vista=='V_home') { echo 'active';}  ?>">
            <a class="nav-link" href="Home">
              <i class="material-icons">dashboard</i>
              <p>Home</p>
            </a>
          </li>
          <li class="nav-item <?php  if ($vista=='user') { echo 'active';}  ?>">
            <a class="nav-link" href="User">
              <i class="material-icons">dashboard</i>
              <p>Formulario</p>
            </a>
          </li>
           <li class="nav-item <?php  if ($vista=='table') { echo 'active';}  ?>">
            <a class="nav-link" href="table">
              <i class="material-icons">dashboard</i>
              <p>Table</p>
            </a>
          </li>

          <li class="nav-item <?php  if ($vista=='medicamentos') { echo 'active';}  ?>">
            <a class="nav-link" href="Medicamentos">
              <i class="material-icons">dashboard</i>
              <p>Productos</p>
            </a>
          </li>
         
        </ul>
      </div>
    </div>
    <div class="main-panel">
      <!-- Navbar -->
      
      <nav class="">
        <div class="container-fluid">
          <div class="navbar-wrapper">
             <div class="col-md-12">
              <div class="card card-stats">
               
                <div class="card-footer">
                  <div class="stats">
                    <i class="material-icons">date_range</i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a class="nav-item active" href="Home">
            <?php echo ucwords(Aplicacion::TITULO); ?></a>/<?php  echo ucwords($vista);  ?>
                  </div>
                </div>
              </div>
            </div>

          </div>
       
        </div>  
      </nav>
  
