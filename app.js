//name box prompt
var name = prompt("what is your name ?")

nameValidate(name);

function nameValidate(name) {
  while (name.length < 1 || name == null) {
    var name = prompt("what is your name ?")
  }
  alert("Welcome to the museum ..!" + name)
}

//favourite subject prompt
var fav = prompt("what is your favourite art subject of these (modern, archi, abstract) " + name + "?")

artValidate(fav);

function artValidate(fav) {
  while (fav !== "modern" && fav !== "archi" && fav !== "abstract") {
    fav = prompt("what is your favourite art subject of these (modern, archi, abstract) " + name + "?")
  }
  if (fav == "modern") {

    document.write("<section>" + "<div>" +
      "<img src='https://cdn-anmal.nitrocdn.com/vJgtiwkCsLhvhzZzqhfdngZGCtTVAAGD/assets/static/optimized/rev-25bc62b/wp-content/uploads/2020/03/modern-paintings-art-4-768x768.jpg'/>" +
      "<h4>" + "Modern Art" + "</h4>" +
      "</div>" + "</section>")

  }
  else if (fav == "archi") {

    document.write("<section>" + "<div>" +
      "<img src='https://onehundrededition.com/wp-content/uploads/2018/12/PARIS-in-100%C2%BA-The-10-Top-Contemporary-Art-Galleries-8.jpg'/>" +
      "<h4>" + "Architecture" + "</h4>" +
      "</div>" + "</section>")

  }
  else if (fav == "abstract") {

    document.write("<section>" + "<div>" +
      "<img src='https://onehundrededition.com/wp-content/uploads/2018/12/PARIS-in-100%C2%BA-The-10-Top-Contemporary-Art-Galleries-10.jpg'/>" +
      "<h4>" + "Abstractical" + "</h4>" +
      "</div>" + "</section>")
  }
  else {
    alert("sorry we can't help you we do not have this subject")
  }

}


//favourite artist prompt
var favArtist = prompt(name + " who is your favourite artist ?")
artistValidate(favArtist);
function artistValidate(favArtist) {
  while (favArtist.length < 1 || favArtist == null) {
    favArtist = prompt(name + " who is your favourite artist ?");
  }

  // welcome to museum prompt
  document.write("<p>" + "Welcome to Our museum " + name + " fan of artist " + favArtist + "</p>")
}



//rating prompt
document.write("<div>" + "Thanks for rating us" + "</div>")

var counterstars = parseInt(prompt("how many stars would rate us 1 - 5 stars?"));

rateValidate(counterstars);

function rateValidate(counterstars) {
  while (counterstars > 5 || counterstars == null) {
    counterstars == 0
    counterstars = prompt("how many stars would rate us 1 - 5 stars?");
  }

  for (var x = 0; x < counterstars; x++) {
    document.write("&#11088; ");
  }
}


