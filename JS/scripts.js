$(document).ready(function() {
  $("#questions").submit(function(event) {
    event.preventDefault();
    // let side2Input = parseInt($("#side2").val());
    // let side3Input = parseInt($("#side3").val());
		var nameInput = $("#name").val();
    $("#name").text(nameInput);

    console.log(name);
    $(".jumbotron").show();
    // if (side1Input === side2Input && side2Input === side3Input) {
    //   $("#results").text("an Equilateral");
    // }
    // else if (side1Input === side2Input || side2Input === side3Input || side1Input === side3Input) {
    //   $("#results").text("an Isoceles");
    // }
    // else if (side1Input + side2Input <= side3Input || side2Input + side3Input <= side1Input || side1Input + side3Input <= side2Input) {
    //   $("#results").text("something other than a");
    // }
    // else {
    //   $("#results").text("a Scalene");
    // }



    let elmnt = document.getElementById("results");
    elmnt.scrollIntoView();

  });
});
