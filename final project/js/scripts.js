const options = {weekday:'long',year: 'numeric', month:'long', day:'numeric'}
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);

const Update = document.lastModified
document.querySelector("#update").textContent = Update;

let currentdate = new Date();
let Year = currentdate.getFullYear();
document.getElementById("year").textContent = Year;

//Hamburger Menu
function toggleMenu(){
    document.getElementById('primaryNav').classList.toggle('hide');
}


//Last Modifition
document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`;


//Banner colocar dia 1 ou 2

let d = new Date().getDay();

const banner = document.getElementById("banner");
if (d === 1 || d === 2) { //teste
    banner.style.display = "block";
} 

const close = document.querySelector("#close");

close.addEventListener("click", () => {
    banner.style.display = "none";
})
