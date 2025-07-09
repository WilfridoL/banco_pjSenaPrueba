const iniciar = document.getElementById('ini');
const registrar = document.getElementById('reg');
const btnExitForm = document.querySelector('.btn_exit');
const overlayForm = document.querySelector('.overlay')
const form = document.querySelector('.contenedorInputs');
console.log(btnExitForm);
let selectTipForm = 1

const crearFormulario = (event) => {
  form.innerHTML = ""
  return form.innerHTML = event
}
const selectForm = () => {
  switch (selectTipForm) {
  case 0:
    crearFormulario(`
      <h3>Iniciar sesion</h3>
        <div class="campo">
          <label for="">Usuario*</label>
          <input type="text" id="" required placeholder="Ingresar usuario...">
        </div>
        <div class="campo">
          <label for="">Contraseña*</label>
          <input type="password" id="" required max="15" min="5" placeholder="Ingresar contraseña...">
        </div>
        <button class="btn" type="submit">Iniciar sesion</button>
      `)
    break;
  case 1: crearFormulario(`
    <h3>Registrarse</h3>
      <div class="campo">
          <label for="">Nombres*</label>
          <input type="text" id="" required placeholder="Ingresar nombre...">
        </div>
        <div class="campo">
          <label for="">Apellidos*</label>
          <input type="text" id="" required placeholder="Ingresar apellidos...">
        </div>
        <div class="campo">
          <label for="">Correo*</label>
          <input type="email" id="" required placeholder="Ingresar correo...">
        </div>
        <div class="campo">
          <label for="">Usuario*</label>
          <input type="text" id="" required placeholder="Ingresar usuario...">
        </div>
        <div class="campo">
          <label for="">Contraseña*</label>
          <input type="password" id="" required max="15" min="5" placeholder="Ingresar contraseña...">
        </div>
        <button class="btn" type="submit">Registrar Usuario</button>
    `)
}
}
iniciar.addEventListener('click', () => {
  selectTipForm = 0
  overlayForm.classList.add("activeForm")
  selectForm()
})
registrar.addEventListener('click', () => {
  selectTipForm = 1
  overlayForm.classList.add("activeForm")
  selectForm()
})
btnExitForm.addEventListener('click', () => {
  overlayForm.classList.remove("activeForm")
  selectForm()

})