alert("Welcome to the museum ..!")
var name = prompt("what is your name artist :) ?")

var fav = prompt("what is your favourite art subject of these (modern, archi, abstract) " + name + "?")



if (fav == "modern") {

  var answer = prompt(name + " would you like to see this type ?")

  if (answer == "yes") {

    document.write("<div>" +
      "<img src='https://cdn-anmal.nitrocdn.com/vJgtiwkCsLhvhzZzqhfdngZGCtTVAAGD/assets/static/optimized/rev-25bc62b/wp-content/uploads/2020/03/modern-paintings-art-4-768x768.jpg'/>" +
      "<h4>" + "Modern Art" + "</h4>" +
      "</div>")


  }
  else {
    alert("Have a nice day ! ")
  }
}
else if (fav == "archi") {
  var answer = prompt(name + " would you like to see this type ?")

  if (answer == "yes") {

    document.write("<div>" +
      "<img src='https://onehundrededition.com/wp-content/uploads/2018/12/PARIS-in-100%C2%BA-The-10-Top-Contemporary-Art-Galleries-8.jpg'/>" +
      "<h4>" + "Architecture" + "</h4>" +
      "</div>")
  }
  else {
    alert("Have a nice day ! ")
  }

}
else if (fav == "abstract") {
  var answer = prompt(name + " would you like to see this type ?")

  if (answer == "yes") {

    document.write("<div>" +
      "<img src='https://onehundrededition.com/wp-content/uploads/2018/12/PARIS-in-100%C2%BA-The-10-Top-Contemporary-Art-Galleries-10.jpg'/>" +
      "<h4>" + "Abstractical" + "</h4>" +
      "</div>")
  }
  else {
    alert("Have a nice day ! ")
  }

}
else {
  alert("sorry we can't help you we do not have this subject")
}


