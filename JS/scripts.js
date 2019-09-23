$(document).ready(function() {
  $("form#questions").submit(function(event) {
    event.preventDefault();

		$(".jumbotron").show();

// VARIABLES:

		var nameInput = $("#firstName").val();
    $(".firstName").text(nameInput);

		var hoursInput = parseInt($("#hours").val());
    $(".hours").text(hoursInput);

		var adventurousInput = parseInt($("#adventurous").val());
		$(".adventurous").text(adventurousInput);

		var frontOrBackInput = parseInt($('input[name=customRadioInline1]:checked').val());
		$(".frontOrBack").text(frontOrBackInput);

		var popularityInput = parseInt($("#popularity").val());
		$(".popularity").text(popularityInput);

		var languageInput = parseInt($("#language").val());
		$(".language").text(languageInput);

// BRANCHING:

    var math = (hoursInput + adventurousInput + frontOrBackInput + popularityInput + languageInput);
    $(".math").text(math);

    if (math <= 2) {
      $("#results").text("RPG III");
    }
    else if (math <= 7) {
      $("#results").text("V");
    }
    else if (math <= 9) {
      $("#results").text("Ruby");
    }
    else if (math <= 10) {
      $("#results").text("C#");
    }
    else if (math <= 12) {
      $("#results").text("Go");
    }
    else if (math <= 13) {
      $("#results").text("Swift");
    }
    else if (math <= 16) {
      $("#results").text("Python");
    }
    else {
      $("#results").text("JavaScript");
    }



// SCROLL TO RESULTS:

    let elmnt = document.getElementById("results");
    elmnt.scrollIntoView();
  });
});
