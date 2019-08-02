var x = Math.floor(Math.random()*(12));
console.log(data.results[x].picture.thumbnail)
const pog = document.getElementById("picture");
console.log(pog)
pog.src = data.results[x].picture.large;
// innertext
    var first = data.results[x].name.title  + "." + data.results[x].name.first + " " + data.results[x].name.last;
console.log(first);
document.getElementById("name").innerText = first
console.log(first);
// document.getElementById("name");

var second = data.results[x].location.city + "," + data.results[0].location.state;
document.getElementById("location").innerText=second;

var third= data.results[x].phone
document.getElementById("phoneNum").innerText = third