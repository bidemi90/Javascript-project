
let alltravel = JSON.parse(localStorage.getItem("alltravel"))
if (alltravel == null) {
    alltravel = []
}
console.log(alltravel);


let allschool = JSON.parse(localStorage.getItem("allschool"))
if (allschool == null) {
    allschool = []
}
console.log(allschool);



let schooltravel = JSON.parse(localStorage.getItem("schooltravel"))
let locations = JSON.parse(localStorage.getItem("locations"))
console.log(schooltravel);
console.log(locations);
for (let index = 7; index < 13; index++) {
    const element = locations[index];

    document.getElementById("sectionholdingallplace").innerHTML +=
        `

<div class="divforoneplace">
        <div>
            <img src="${element.Image1}" alt="">
        </div>
        <div>
            <p class="conti">${element.continent}</p>
        <p>${element.locationname}</p>
        <div>
            <p>${element.description}</p>
        </div>
        <p>
            price:$${element.price}
        </p>
        <button onclick="applyforone(${index})">
            apply
        </button>
        </div>
    </div>

`
}


for (let index = 3; index < 9; index++) {
    const element = schooltravel[index];
    document.getElementById("sectionforanotherone").innerHTML += `
    <div class="anothertypeonediv" onclick="oneschool(${index})">
        <div style="background-image: url(${element.Image});">

        </div>
        <div>
            <p>${element.name}</p>
            <p>${element.location}</p>
        </div>
        <div>
            <p>$${element.price}</p>
            <p>Apply</p>
        </div>
    </div>
    `
}

function seemoreone() {
    for (let index = 0; index < locations.length; index++) {
        const element = locations[index];

        document.getElementById("sectionholdingallplace").innerHTML +=
            `

<div class="divforoneplace">
        <div>
            <img src="${element.Image1}" alt="">
        </div>
        <div>
            <p class="conti">${element.continent}</p>
        <p>${element.locationname}</p>
        <div>
            <p>${element.description}</p>
        </div>
        <p>
            price:$${element.price}
        </p>
        <button onclick="applyforone(${index})">
            apply
        </button>
        </div>
    </div>

`
    }
}
function seemoretwo() {
    for (let index = 0; index < schooltravel.length; index++) {
        const element = schooltravel[index];
        document.getElementById("sectionforanotherone").innerHTML += `
    <div class="anothertypeonediv" onclick="oneschool(${index})">
        <div style="background-image: url(${element.Image});">

        </div>
        <div>
            <p>${element.name}</p>
            <p>${element.location}</p>
        </div>
        <div>
            <p>$${element.price}</p>
            <p>Apply</p>
        </div>
    </div>
    `
    }
}


   

function applyforone(index) {
    if (thatuser == null) {
        window.location.href = "login.html"
    }
    

    document.getElementById("main").innerHTML = ""
    document.getElementById("main").style.display = "flex"
    document.getElementById("main").style.alignItems = "center"
    document.getElementById("main").style.justifyContent = "space-evenly"
    document.getElementById("main").innerHTML += `
    
    <div class="itwillshowontheonclickofone">
    <div >
  <img src="${locations[index].Image1}" alt="">
</div>
<p class="name">
    ${locations[index].locationname}
</p>
<p>
    ${locations[index].description} 
</p>
<p>
   price:$${locations[index].price} 
</p>
</div>
</div >
`
    document.getElementById("main").innerHTML += `
    <div class="theformforone">
<h1>Flight From</h1>
<label for="flight-from">From:</label>
<select id="flight-from" name="flight-from" required>

<option value="">--Select a country--</option>
<option value="Afghanistan">Afghanistan</option>
<option value="Albania">Albania</option>
<option value="Algeria">Algeria</option>
<option value="Andorra">Andorra</option>
<option value="Angola">Angola</option>
<option value="Antigua and Barbuda">Antigua and Barbuda</option>
<option value="Argentina">Argentina</option>
<option value="Armenia">Armenia</option>
<option value="Australia">Australia</option>
<option value="Austria">Austria</option>
<option value="Azerbaijan">Azerbaijan</option>
<option value="Bahamas">Bahamas</option>
<option value="Bahrain">Bahrain</option>
<option value="Bangladesh">Bangladesh</option>
<option value="Barbados">Barbados</option>
<option value="Belarus">Belarus</option>
<option value="Belgium">Belgium</option>
<option value="Belize">Belize</option>
<option value="Benin">Benin</option>
<option value="Bhutan">Bhutan</option>
<option value="Bolivia">Bolivia</option>
<option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
<option value="Botswana">Botswana</option>
<option value="Brazil">Brazil</option>
<option value="Brunei">Brunei</option>
<option value="Bulgaria">Bulgaria</option>
<option value="Burkina Faso">Burkina Faso</option>
<option value="Burundi">Burundi</option>
<option value="Cambodia">Cambodia</option>
<option value="Cameroon">Cameroon</option>
<option value="Canada">Canada</option>
<option value="Cape Verde">Cape Verde</option>
<option value="Central African Republic">Central African Republic</option>
<option value="Chad">Chad</option>
<option value="Chile">Chile</option>
<option value="China">China</option>
<option value="Colombia">Colombia</option>
<option value="Comoros">Comoros</option>
<option value="Congo (Democratic Republic of)">Congo (Democratic Republic of)</option>
<option value="Congo (Republic of)">Congo (Republic of)</option>
<option value="Costa Rica">Costa Rica</option>
<option value="Cote d'Ivoire">Cote d'Ivoire</option>
<option value="Croatia">Croatia</option>
<option value="Cuba">Cuba</option>
<option value="Cyprus">Cyprus</option>
<option value="Czech Republic">Czech Republic</option>
<option value="Denmark">Denmark</option>
<option value="Djibouti">Djibouti</option>
<option value="Dominica">Dominica</option>
<option value="Dominican Republic">Domin

</select>
<label for="flight-to">To:</label>
<input type="text" id="flight-to" name="flight-to" readonly value="${locations[index].locationname}" >
<label for="passport_ID">Passport ID:</label>
<input type="text" id="passport_ID" name="passport_ID" required>

<label for="Price">Price:</label>
<input type="email" id="Price" name="Price" value="${locations[index].price}" readonly>

<label for="typeoftravel">type of travel:</label>
<select name="" id="typeoftravel">
    <option value=""> choose</option>
    <option value="Permanent Resident">permament resident</option>
    <option value="Tour and Camping">tour and camping</option>
    <option value="Others">others</option>
</select>

<div class="forthem">
    
<label class="label" for="departure-date">Departure Date:
<input type="date" id="departure-date" name="departure-date" required></label>

<label class="label" for="return-date">Return Date:
<input type="date" id="return-date" name="return-date" required></label>
 
</div>
<button class="intheformforapply" onclick="bookforyou()">Book Flight</button>
<button class="intheformforapply2" onclick="cancleforyou()">cancle</button>
</div>
    `

    
}








function bookforyou() {

    document.getElementById("flight-from").value
    document.getElementById("flight-to").value
    document.getElementById("passport_ID").value
    document.getElementById("Price").value
    document.getElementById("typeoftravel").value
    document.getElementById("departure-date").value
    document.getElementById("return-date").value

    let amount= document.getElementById("Price").value
    console.log(amount);
    if (document.getElementById("flight-from").value == "" ||
        document.getElementById("flight-to").value == "" ||
        document.getElementById("passport_ID").value == "" ||
        document.getElementById("Price").value == "" ||
        document.getElementById("typeoftravel").value == "" ||
        document.getElementById("departure-date").value == "" ||
        document.getElementById("return-date").value == "") {
        alert("fill the form")
    }
    else {
        let foronepersonintravel = [
            thatuser.name,
            document.getElementById("flight-from").value,
            document.getElementById("flight-to").value,
            document.getElementById("passport_ID").value,
            document.getElementById("Price").value,
            document.getElementById("typeoftravel").value,
            document.getElementById("departure-date").value,
            document.getElementById("return-date").value
        ]


  
  

      

        alltravel.push(foronepersonintravel)
    
        console.log(alltravel);
        localStorage.setItem('alltravel', JSON.stringify(alltravel))
        localStorage.setItem('foronepersonintravel', JSON.stringify(foronepersonintravel))
        window.location.href="test.html"
      
    }
}

function cancleforyou() {
    window.location.href = "index.html"
}
function myrequest() {

}

let thatuser = JSON.parse(localStorage.getItem("thatuser"))
console.log(thatuser);



function oneschool(index) {
    console.log(index);

    if (thatuser == null) {
        window.location.href = "login.html"
    }

    document.getElementById("main").innerHTML = ""
    document.getElementById("main").style.display = "flex"
    document.getElementById("main").style.alignItems = "center"
    document.getElementById("main").style.justifyContent = "space-evenly"
    document.getElementById("main").innerHTML += `
    
    <div class="itwillshowontheonclickofone">
    <div >
  <img src="${schooltravel[index].Image}" alt="">
</div>
<p class="name">
    ${schooltravel[index].location}
</p>
<p class="name">
    ${schooltravel[index].name}
</p>
<div class="name courseofitforschool " id="courseofitforschool">
    
</div>
<p>
    Costs of Attending per year:$ ${schooltravel[index].Costs_of_Attending_per_year} 
</p>
<p>
   price:$${schooltravel[index].price} 
</p>
<p>NOTE: to fill this form you will be needing all your O level result and other document abd it should be saved in one PDF FILE which will be UPLOADED</p>
</div>
</div >
`
    document.getElementById("courseofitforschool").innerHTML += `
    <p>course you can apply for:</p>`





    document.getElementById("main").innerHTML += `
    <div class="theformforone">
<h1>fill in your details</h1>

<label for="schoolname">School Name:</label>
<input type="text" id="schoolname" name="flight-too" readonly value="${schooltravel[index].name}" >

<label for="flight-from">From:</label>
<select id="flight-from2" name="flight-from" required>
<option value="">--Select a country--</option>
<option value="Afghanistan">Afghanistan</option>
<option value="Albania">Albania</option>
<option value="Algeria">Algeria</option>
<option value="Andorra">Andorra</option>
<option value="Angola">Angola</option>
<option value="Antigua and Barbuda">Antigua and Barbuda</option>
<option value="Argentina">Argentina</option>
<option value="Armenia">Armenia</option>
<option value="Australia">Australia</option>
<option value="Austria">Austria</option>
<option value="Azerbaijan">Azerbaijan</option>
<option value="Bahamas">Bahamas</option>
<option value="Bahrain">Bahrain</option>
<option value="Bangladesh">Bangladesh</option>
<option value="Barbados">Barbados</option>
<option value="Belarus">Belarus</option>
<option value="Belgium">Belgium</option>
<option value="Belize">Belize</option>
<option value="Benin">Benin</option>
<option value="Bhutan">Bhutan</option>
<option value="Bolivia">Bolivia</option>
<option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
<option value="Botswana">Botswana</option>
<option value="Brazil">Brazil</option>
<option value="Brunei">Brunei</option>
<option value="Bulgaria">Bulgaria</option>
<option value="Burkina Faso">Burkina Faso</option>
<option value="Burundi">Burundi</option>
<option value="Cambodia">Cambodia</option>
<option value="Cameroon">Cameroon</option>
<option value="Canada">Canada</option>
<option value="Cape Verde">Cape Verde</option>
<option value="Central African Republic">Central African Republic</option>
<option value="Chad">Chad</option>
<option value="Chile">Chile</option>
<option value="China">China</option>
<option value="Colombia">Colombia</option>
<option value="Comoros">Comoros</option>
<option value="Congo (Democratic Republic of)">Congo (Democratic Republic of)</option>
<option value="Congo (Republic of)">Congo (Republic of)</option>
<option value="Costa Rica">Costa Rica</option>
<option value="Cote d'Ivoire">Cote d'Ivoire</option>
<option value="Croatia">Croatia</option>
<option value="Cuba">Cuba</option>
<option value="Cyprus">Cyprus</option>
<option value="Czech Republic">Czech Republic</option>
<option value="Denmark">Denmark</option>
<option value="Djibouti">Djibouti</option>
<option value="Dominica">Dominica</option>
<option value="Dominican Republic">Domin

</select>

<label for="flight-to">To:</label>
<input type="text" id="flight-to2" name="flight-to" readonly value="${schooltravel[index].location}" >
<label for="passport_ID">Passport ID:</label>
<input type="text" id="passport_ID2" name="passport_ID" required>

<label for="Price">Price:</label>
<input type="email" id="Price2" name="Price" value="${schooltravel[index].price}" readonly>

<label for="typeoftravel">choose course</label>
<select name="" id="choosecourse">
    <option value="">choose</option>
    
</select>
<label for="uploadyourfile">Upload you file (PDF)</label>
<input type="file" onchange="pickfileforschool(event)" name="" id="uploadyourfile">


<button class="intheformforapply" onclick="bookforyouschool()">Book Flight</button>
<button class="intheformforapply2" onclick="cancleforyou()">cancle</button>
</div>
    `

    for (let i = 0; i < schooltravel[index].course.length; i++) {
        const element = schooltravel[index].course[i];
        document.getElementById("courseofitforschool").innerHTML += `
    <p> * ${element}</p>`

        document.getElementById("choosecourse").innerHTML += `
    <option value="${element}">${element}</option>
    `
    }

    

}

let reader = new FileReader()
let ittt = ""
function pickfileforschool(ev) {
    let file = ev.target.files[0]
    console.log(file);
    reader.onload = (file) => {
        console.log(reader.result);
        ittt = reader.result
    }

    if (file) {
        let data = reader.readAsDataURL(file);
    }
}

function bookforyouschool() {
    thatuser.name
    document.getElementById("schoolname").value
    document.getElementById("flight-from2").value
    document.getElementById("flight-to2").value
    document.getElementById("passport_ID2").value
    document.getElementById("choosecourse").value
    document.getElementById("Price2").value
    ittt

    if (thatuser.name == "" ||
        document.getElementById("schoolname").value == "" ||
        document.getElementById("flight-from2").value == "" ||
        document.getElementById("flight-to2").value == "" ||
        document.getElementById("passport_ID2").value == "" ||
        document.getElementById("choosecourse").value == "" ||
        document.getElementById("Price2").value == "" ||
        ittt == "") {
        alert("fill the form")
    }
    else {
        let foronepersoninschool = [
            thatuser.name,
            document.getElementById("schoolname").value,
            document.getElementById("flight-from2").value,
            document.getElementById("flight-to2").value,
            document.getElementById("passport_ID2").value,
            document.getElementById("choosecourse").value,
            document.getElementById("Price2").value,
            ittt
        ]


        let amount= document.getElementById("Price2").value
        console.log(amount);
        
        function makePayment() {
           
         
          }
          makePayment()

        console.log(foronepersoninschool);
        allschool.push(foronepersoninschool)
        console.log(allschool);
        localStorage.setItem('allschool', JSON.stringify(allschool))
        localStorage.setItem('foronepersoninschool', JSON.stringify(foronepersoninschool))
        window.location.href="testt.html"

    }
}
