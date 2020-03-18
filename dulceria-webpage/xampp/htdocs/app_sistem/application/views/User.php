 <script src="./assets/js/Funciones_usuarios.js"></script>
 
      <div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-warning">
                  <h4 class="card-title">Editar Perfil</h4>
                  <p class="card-category">Completa todos los campos</p>
                </div>
                <div class="card-body">
                  
                    <div class="row">
                      <div class="col-md-4">
                        <div class="form-group">
                          <label class="bmd-label-floating">Especialidad Profesional</label>
                          <input type="text" class="form-control" id="esp_profesional">
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label class="bmd-label-floating">Nombre Completo:</label>
                          <input type="text" class="form-control" id="nombre">
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label >Fecha Nacimiento:</label>
                          <input type="date" class="form-control" id="f_nacimiento">
                        </div>
                        <div class="card-body">
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-4">
                        <div class="form-group">
                          <label class="bmd-label-floating">Apellido Paterno:</label>
                          <input type="text" class="form-control" id="a_paterno">
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label class="bmd-label-floating">Apellido Materno:</label>
                          <input type="text" class="form-control" id="a_materno">
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label class="bmd-label-floating">Tipo de Perfil:</label>
                          <select class="form-control" id="t_perfil">
                            <option value="0">Seleccione el perfil</option>
                            <option value="1">Usuario</option>
                            <option value="2">Paciente</option>
                            <option value="3">Proveedor</option>
                            <option value="4">Medico</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-4">
                        <div class="form-group">
                          <label class="bmd-label-floating">RFC:</label>
                          <input type="text" class="form-control" id="rfc">
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label class="bmd-label-floating">No.Telefono:</label>
                          <input type="text" class="form-control" id="n_telefono" onkeypress="return soloNumeros(event)">
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label class="bmd-label-floating">Correo Electronico</label>
                          <input type="text" class="form-control" id="email">
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <label class="bmd-label-floating">Direccion:</label>
                          <input type="text" class="form-control" id="direccion">
                        </div>
                      </div>
                    </div>
                    <br>                    
                    <button type="button" class="btn btn-warning" onclick="guardar_perfil();">Guardar</button>

                  
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
     
