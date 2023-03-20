
let thatuser = JSON.parse(localStorage.getItem("thatuser"))
console.log(thatuser);
if (thatuser == null) {
    window.location.href = "login.html"
}
let goingtoitschool = JSON.parse(localStorage.getItem("goingtoitschool"))
console.log(goingtoitschool);
if (goingtoitschool == null) {
    goingtoitschool = []
}
let goingtoit = JSON.parse(localStorage.getItem("goingtoit"))
console.log(goingtoit);
if (goingtoit == null) {
    goingtoit = []

}
let allschool = JSON.parse(localStorage.getItem("allschool"))
console.log(allschool);
if (allschool == null) {
    allschool = []
}
let alltravel = JSON.parse(localStorage.getItem("alltravel"))
console.log(alltravel);
if (alltravel == null) {
    alltravel = []

}
// document.getElementById("sectionholdingallplace").innerHTML = "you have no request"


function procccc() {
    document.getElementById("sectionholdingallplace").innerHTML =""
    for (let index = 0; index < alltravel.length; index++) {
    const element = alltravel[index];
    if (element[0] == thatuser.name) {

            document.getElementById("sectionholdingallplace").innerHTML += `
<div class="checkonetravel" onclick="checkonetravel()">
<div>
<p>${element[0]}</p>
<p>from ${element[1]} to ${element[2]}</p>
<p>type: ${element[5]}</p>
</div>
<div>
<p>Departure Date: ${element[6]}</p>
<p>Return Date: ${element[7]}</p>
<p><b>processing</b></p>
</div>
</div>
`
    }
    else {
        document.getElementById("sectionholdingallplace").innerHTML = "you have no travel request"
    }

}

for (let index = 0; index < allschool.length; index++) {
    const element = allschool[index];
    if (element[0] == thatuser.name) {

            document.getElementById("sectionholdingallplace").innerHTML += `
<div class="checkonetravel" onclick="checkonetravel()">
<div>
<p>${element[0]}</p>
<p>school name :${element[1]} </p>
<p>course: ${element[5]}</p>
</div>
<div>
<p>passport ID: ${element[4]}</p>
<p>from ${element[2]} to ${element[3]}</p>
<p><b>processing</b></p>
</div>
</div>
`
    }
    else {
        document.getElementById("sectionholdingallplace").innerHTML = "you have no travel request"
    }

}

}

procccc()

function porooooo() {
    document.getElementById("sectionholdingallplace").innerHTML =""

    for (let index = 0; index < goingtoit.length; index++) {
    const element = goingtoit[index];
    if (element[0] == thatuser.name) {

            document.getElementById("sectionholdingallplace").innerHTML += `
<div class="checkonetravel" onclick="checkonetravel()">
<div>
<p>${element[0]}</p>
<p>from ${element[1]} to ${element[2]}</p>
<p>type: ${element[5]}</p>
</div>
<div>
<p>Departure Date: ${element[6]}</p>
<p>Return Date: ${element[7]}</p>
<p><b>processed</b></p>
</div>
</div>
`
    }
    else {
        document.getElementById("sectionholdingallplace").innerHTML = "you have no travel request"
    }

}

for (let index = 0; index < goingtoitschool.length; index++) {
    const element = goingtoitschool[index];
    if (element[0] == thatuser.name) {

            document.getElementById("sectionholdingallplace").innerHTML += `
<div class="checkonetravel" onclick="checkonetravel()">
<div>
<p>${element[0]}</p>
<p>school name :${element[1]} </p>
<p>course: ${element[5]}</p>
</div>
<div>
<p>passport ID: ${element[4]}</p>
<p>from ${element[2]} to ${element[3]}</p>
<p><b>processed</b></p>
</div>
</div>
`
    }
    else {
        document.getElementById("sectionholdingallplace").innerHTML = "you have no travel request"
    }

}

}


