
// Get the modal
var modal = document.getElementById("myForm");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var currentCurse = "";
let data = "";

// Setting the request infos
const req = new XMLHttpRequest();
req.responseType = "json";
//const data = JSON.stringify({
    //sheet1: {
      //nombre: "Syed C",
      //telefono: "+52 811 880 8700",
      //curso: "curso 1"
    //}
  //});
const endpoint = "https://v2-api.sheety.co/8904d4f1895c775d2ed2e587cade5cbc/jupiterClients/sheet1";

const addInfo = (ev) => {
  ev.preventDefault();
  data = JSON.stringify({
    sheet1: {
      nombre: document.getElementById('namee').value,
      telefono: document.getElementById('contt').value,
      curso: currentCurse, 
      correo: document.getElementById('emmm').value
    }
  });
  document.forms[0].reset();
  postRequest(endpoint, data);
  closeForm();
}


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btnSub').addEventListener('click', addInfo);
});


function openFormWalk() {
    document.getElementById("myForm").style.display = "block";
    currentCurse = "walk";
}

function openFormEmpr() {
  document.getElementById("myForm").style.display = "block";
  currentCurse = "empresa";
}

function openFormConta() {
  document.getElementById("myForm").style.display = "block";
  currentCurse = "contacto";
}

function openFormSkate() {
  document.getElementById("myForm").style.display = "block";
  currentCurse = "skate";
}

function openFormPlane() {
  document.getElementById("myForm").style.display = "block";
  currentCurse = "plane";
}
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
    currentCurse = "";
}





function getRequest(endpoint) {
    req.onreadystatechange = function() {
        console.log(1);
        if (req.readyState === XMLHttpRequest.DONE) {
          console.log(req);
          //sheetyDB = req.response;
            //console.log(sheetyDB);
        }
      };
    req.open('POST', endpoint);
    req.send(data);
}


//data must be in the following form as a JSON OBJECT -> {"data":[{ "name": "Scott", "age": "25" }]}
function postRequest(endpoint,data){
    req.open("POST", endpoint);
    req.setRequestHeader('Content-Type', 'application/json');
    //req.setRequestHeader("Authorization", "BEARER " + 'Y2VyZGExMTlkZWxFbmNpbm8yMjE');
    req.send(data);
}


