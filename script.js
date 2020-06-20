function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return null;
}
class Flower {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
  }
}
let F = (name, description, price) => new Flower(name, description, price);
let flowers = {
  "0000": F("Sample Flower", "A nice set of flowers", 3),
  "0001": F("Sample 2", "Amazing flower set", 5)+
};
function getFlower(id) {
  return flowers[id];
}
function listFlowers() {
  let temp = "";
  Object.keys(flowers).forEach(
    flower =>
      (temp +=
        `<a href="${window.location.href + "?flower_id=" + flower}">` +
        flowers[flower].name +
        "</a><br>")
  );
  return temp;
}
function displayFlower(id) {
  let temp = 
`
<marquee>Hello World!</marquee>
<div class="flower">
<h2>${getFlower(id).name}</h2>
<br>${getFlower(id).description}
<br>Cost: $${getFlower(id).price}
</div>
<a href="/">Back</a>`;
  return temp
}
document.getElementsByTagName("body")[0].innerHTML =
  getQueryVariable("flower_id") == null
    ? "<h1>Flowers</h1><br>" + listFlowers()
    : displayFlower(getQueryVariable("flower_id"));
console.log(getFlower("0000"), getFlower("0001"));
console.log(1, 2, 3);
