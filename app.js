
var name = prompt("what is your name ?")

alert("Welcome to the museum ..!" + name)

var fav = prompt("what is your favourite art subject of these (modern, archi, abstract) " + name + "?")

if (fav == "modern") {

  var answer = prompt(name + " who is your favourite artist ?")
  document.write("<div>" +
    "<img src='https://cdn-anmal.nitrocdn.com/vJgtiwkCsLhvhzZzqhfdngZGCtTVAAGD/assets/static/optimized/rev-25bc62b/wp-content/uploads/2020/03/modern-paintings-art-4-768x768.jpg'/>" +
    "<h4>" + "Modern Art" + "</h4>" +
    "</div>")

  document.write("Welcome to Modern art " + name + " fan of " + answer)
}
else if (fav == "archi") {
  var answer = prompt(name + " who is your favourite artist ?")

  document.write("<div>" +
    "<img src='https://onehundrededition.com/wp-content/uploads/2018/12/PARIS-in-100%C2%BA-The-10-Top-Contemporary-Art-Galleries-8.jpg'/>" +
    "<h4>" + "Architecture" + "</h4>" +
    "</div>")
  document.write("Welcome to Architecture art " + name + " fan of " + answer)

}
else if (fav == "abstract") {
  var answer = prompt(name + " who is your favourite artist ?")

   document.write("<div>" +
      "<img src='https://onehundrededition.com/wp-content/uploads/2018/12/PARIS-in-100%C2%BA-The-10-Top-Contemporary-Art-Galleries-10.jpg'/>" +
      "<h4>" + "Abstractical" + "</h4>" +
      "</div>")
      document.write("Welcome to Abstractical art " + name + " fan of " + answer)

}
else {
  alert("sorry we can't help you we do not have this subject")
}


