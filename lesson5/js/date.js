const options = {year: 'numeric'}
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);

const Update = document.lastModified
document.querySelector("#update").textContent = Update;

let currentdate = new Date();
let Year = currentdate.getFullYear();
document.getElementById("year").textContent = Year;


// select the elements to manipulate (output to)
const datefield = document.querySelector(".current-date");
const datefieldUK = document.querySelector("aside"); // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
// long, medium, short options ... try them

datefield.innerHTML = `<em>${fulldate}</em>`;
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;


//Hamburger Menu
function toggleMenu(){
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburgerBtn').classList.toggle('open');
}

const x = document.getElementById('hamburgerBtn');

x.onclick = toggleMenu;

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


const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");



gridbutton.addEventListener("click", () => {
	
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); 

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

