$(document).ready(function() {
  $("form#questions").submit(function(event) {
    event.preventDefault();

		$(".jumbotron").show();

		var nameInput = $("#firstName").val();
    $(".firstName").text(nameInput);

		var hoursInput = parseInt($("#hours").val());
    $(".hours").text(hoursInput);

		var adventurousInput = parseInt($("#adventurous").val());
		$(".adventurous").text(adventurousInput);

		var frontOrBackInput = $('input[name=customRadioInline1]:checked').val();
		$(".frontOrBack").text(frontOrBackInput);

		var popularityInput = parseInt($("#popularity").val());
		$(".popularity").text(popularityInput);

		var languageInput = $("#language").val();
		$(".language").text(languageInput);

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
