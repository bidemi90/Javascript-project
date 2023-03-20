
localStorage.setItem('thatuser', JSON.stringify(null))

let email2 = document.getElementById("email2")
let password2 = document.getElementById("password2")

let userinfo = JSON.parse(localStorage.getItem("userinfo"))
console.log(userinfo);




function login(evente) {
    evente.preventDefault()

    console.log(email2.value);
    console.log(password2.value);
    
    if (email2.value == "" || password2.value == "") {
        alert("enter details")
    } else {


       let init=userinfo.find((inin)=>inin.email==email2.value && inin.password== password2.value)

    

        if (init) {
            console.log(init)
            localStorage.setItem('thatuser', JSON.stringify(init))


            window.location.href = "index.html"
            alert("Login Successful")
        } else {
            alert("User not found")
        }


    }
    password2.value = ""
}
function gotosignup(evente) {

window.location.href="sign-up.html"
}


