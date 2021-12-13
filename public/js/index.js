const myModal = new bootstrap.Modal("#register-modal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("Session");

checkLogged();

//System Login
document.getElementById("login-form").addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.getElementById("email-input").value;
    const password =document.getElementById("password-input").value;
    const checksession =document.getElementById("session-check").checked;

    const account = getAccount(email);

    if(!account){
        alert("Oops! Verify your e-mail or password.");
        return;
    }

    if(account){
        if(account.password !== password){
            alert("Oops! Verify your e-mail or password.");
            return;
        }

        saveSession(email, checksession);

        window.location.href = "home.html";
    }
});

//Create an Account
document.getElementById("create-form").addEventListener("submit", function(e){
    e.preventDefault();
    
    const email = document.getElementById("email-create-input").value;
    const password =document.getElementById("password-create-input").value;

    if(email.length<5){
        alert("Fill the field with a valid e-mail.");
        return;
    }

    if(password.length<4){
        alert("Fill the password field with a minimum of four digits")
    }

    saveAccount({
        login: email,
        password: password,
        transactions: []
    })

    myModal.hide();

    alert("Account created with success")
})

function checkLogged(){
    if(session){
        sessionStorage.setItem("logged", session);
        logged =session;
    }

    if(logged){
        saveSession(logged, session);

        window.location.href = "home.html";
    }
}

function saveAccount(data){
    localStorage.setItem(data.login, JSON.stringify(data));
}

function saveSession(data, saveSession){
    if(saveSession){
        localStorage.setItem("session", data);
    }

    sessionStorage.setItem("logged", data);
}

function getAccount(key){
    const account = localStorage.getItem(key);

    if(account) {
        return JSON.parse(account);
    }

    return "";
}