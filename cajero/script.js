let cuentas = JSON.parse(localStorage.getItem('cuentas')) || [
    {nombre: "Mali", saldo: 200, password: "1234"},
    {nombre: "Gera", saldo: 290, password: "2345"},
    {nombre: "Mali", saldo: 200, password: "3456"}
];

let currentAcount = null;

function updateAccountSelect() {
    let accountSelect = document.getElementById("account-select");
    accountSelect.innerHTML = '<option value="" selected disable>Selecciona una cuenta</option>';
    cuentas.forEach((account, index) => {
        let newOption = document.createElement("option")
        newOption.value = index;
        newOption.textContent = account.nombre;
        accountSelect.appendChild(newOption)
    });
}

updateAccountSelect()

function login() {
    let accountSelect = document.getElementById("account-select")
    let passwordInput = document.getElementById("password")
    let loginError = document.getElementById("login-error")

    let selectAccountIndex = accountSelect.value;
    let enteredPassword = passwordInput.value;

    if(selectAccountIndex === ""){
        loginError.textContent = "Por favor, selecciona una cuenta";
        return;
    }

    let selectAccount = cuentas[selectAccountIndex]

    if(selectAccount.password === enteredPassword){
        currentAcount = selectAccount;
        document.getElementById("login-screen").style.display = "none"
        document.getElementById("atm-screen").style.display = "block"
        document.querySelector("user-name").textContent = currentAcount.nombre
    }else {
        loginError.textContent = "Contraseña incorrecta. Intentalo nuevamente"
    }

}

function logout(){
    currentAcount = null;
    document.getElementById("login-screen").style.display = "block";
    document.getElementById("atm-screen").style.display = "none";
    document.getElementById("login-error").textContent = "";
    document.getElementById("password").value = "";
    document.getElementById("atm-message").textContent = "";
    document.getElementById("transaction-screen").style.display = "none";
}

function checkBalance(){
    document.getElementById("atm-message").textContent = `Tu saldo actual es ${currentAcount.saldo}`;
    document.getElementById("transaction-screen").style.display = "none"
}

function deposit(){
    document.getElementById("transaction-screen").style.display = "block";
    document.getElementById("confirm-button").setAttribute("onclick", "confirmTransaction('deposit')");
}

function withdraw() {
    document.getElementById("transaction-screen").style.display = "block";
    document.getElementById("confirm-button").setAttribute("onclick", "confirmTransaction('withdraw')");
}

function confirmTransaction(type) {
    let amount = parseFloat(document.getElementById("amount").value);
    let atmMessage = document.getElementById("atm-message");

    if(isNaN(amount) || amount <= 0){
        atmMessage.textContent = "Por favor, ingresa un monto valido"
        return;
    }

    if(type === "deposit"){
        if(currentAcount.saldo + amount > 990){
            atmMessage.textContent = "No puedes tener mas de $990 en tu cuenta"
            return;
        }
        currentAcount.saldo += amount;
        atmMessage.textContent = `Has depositado $${amount}. Nuevo saldo $${currentAcount.saldo}`
    }else if (type === "withdraw") {
        if (currentAcount.saldo - amount < 10){
            atmMessage.textContent = "No puedes tener menos de $10 en tu cuenta"
            return;
        }
        currentAcount.saldo -= amount;
        atmMessage.textContent = `Has retirado $${amount}. Nuevo saldo $${currentAcount.saldo}`
    }
    document.getElementById("amout").value = ""
    document.getElementById("transaction-screen").style.display = "none"
}

function toggleRegister(){
 let registerScreen = document.getElementById("register-screen");
 if(registerScreen.style.display === "none" || registerScreen.style.display === ""){
    registerScreen.style.display = "block"
 } else {
    registerScreen.style.display = "none"
 }
}

function register() {
    let newUser = document.getElementById("new-user").value.trim()
    let newPassword = document.getElementById("new-password").value.trim()
    let registerError = document.getElementById("register-error")

    if(newUser === "" || newPassword === ""){
        registerError.textContent = "Por favor, completa todos los campos";
        return;
    }

    if(cuentas.some(account => account.nombre === newUser)){
        registerError.textContent = "Este usuario ya existe"
        return;
    }

    let newAccount = { nombre: newUser, saldo: 0, password: newPassword }
    cuentas.push(newAccount)

    localStorage.setItem('cuentas', JSON.stringify(cuentas))
    updateAccountSelect()
    registerError.textContent = "Cuenta registrada exitosamente.";
    document.getElementById("new-user").value = "";
    document.getElementById("new-password")
}

