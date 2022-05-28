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
