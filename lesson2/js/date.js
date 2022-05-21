const options = {year: 'numeric'}
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);

const Update = document.lastModified
document.querySelector("#update").textContent = Update;

let currentdate = new Date();
let Year = currentdate.getFullYear();
document.getElementById("year").textContent = Year;



