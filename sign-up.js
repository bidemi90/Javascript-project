
function loginandgo() {
    window.location.href="login.html"
}


     let checked = JSON.parse(localStorage.getItem("userinfo"))
  console.log(checked);
  let name = document.getElementById("name")
  let email = document.getElementById("email")
  let password = document.getElementById("password")
  let confirmpassword = document.getElementById("confirmpassword")


  function sub(evente) {
    evente.preventDefault()


    if (password.value != confirmpassword.value) {
      alert("incorrect password")
    } else if (name.value == "" || email.value == "" ||  password.value == "" || confirmpassword.value == "") {
      alert("input details")
    }
    else {
      let userarray = {
        name: name.value,
        email: email.value,
        password: password.value,
      }
      if (checked == null) {
        checked = []
        checked.push(userarray)
        localStorage.setItem("userinfo", JSON.stringify(checked))
      } else {
        checked.push(userarray)
        localStorage.setItem("userinfo", JSON.stringify(checked))
      }
      window.location.href = "login.html"
    }

    password.value = ""
    confirmpassword.value = ""

  }



  function checkpass() {
    if (document.getElementById("password").type == "password") {
      document.getElementById("password").type = "text"
      document.getElementById("Passwordbut").innerHTML = `<span class="material-symbols-outlined">
visibility
</span>`
    } else {
      document.getElementById("password").type = "password"
      document.getElementById("Passwordbut").innerHTML = `<span class="material-symbols-outlined">
visibility_off
</span>`
    }
  }

  function checkpass2() {
    if (document.getElementById("confirmpassword").type == "password") {
      document.getElementById("confirmpassword").type = "text"
      document.getElementById("Passwordbut2").innerHTML = `<span class="material-symbols-outlined">
visibility
</span>`
    } else {
      document.getElementById("confirmpassword").type = "password"
      document.getElementById("Passwordbut2").innerHTML = `<span class="material-symbols-outlined">
visibility_off
</span>`
    }
  }

