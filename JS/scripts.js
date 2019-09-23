$(document).ready(function() {
  $("form#questions").submit(function(event) {
    event.preventDefault();

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

    $(".jumbotron").show();

    var math = (hoursInput + adventurousInput + frontOrBackInput + popularityInput + languageInput);
    $(".math").text(math);

    if (math <= 2) {
      $(".results").text("RPG III");
      $(".RPG").show();
      $(".Python, .Ruby, .JavaScript, .C, .Go, .Swift, .V").hide();
    }
    else if (math <= 7) {
      $(".results").text("V");
      $(".V").show();
      $(".RPG, .Python, .Ruby, .JavaScript, .C, .Go, .Swift").hide();
    }
    else if (math <= 9) {
      $(".results").text("Ruby");
      $(".Ruby").show();
      $(".RPG, .Python, .JavaScript, .C, .Go, .Swift, .V").hide();
    }
    else if (math <= 11) {
      $(".results").text("C#");
      $(".C").show();
      $(".RPG, .Python, .Ruby, .JavaScript, .Go, .Swift, .V").hide();
    }
    else if (math <= 14) {
      $(".results").text("Go");
      $(".Go").show();
      $(".RPG, .Python, .Ruby, .JavaScript, .C, .Swift, .V").hide();
    }
    else if (math <= 17) {
      $(".results").text("Swift");
      $(".Swift").show();
      $(".RPG, .Python, .Ruby, .JavaScript, .C, .Go, .V").hide();
    }
    else if (math <= 21) {
      $(".results").text("Python");
      $(".Python").show();
      $(".RPG, .Ruby, .JavaScript, .C, .Go, .Swift, .V").hide();
    }
    else {
      $(".results").text("JavaScript");
      $(".JavaScript").show();
      $(".RPG, .Python, .Ruby, .C, .Go, .Swift, .V").hide();
    }



// SCROLL TO RESULTS:

    let elmnt = document.getElementById("results");
    elmnt.scrollIntoView();
  });
});
