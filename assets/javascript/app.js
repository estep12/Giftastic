


var sports = [];

function renderButton(){

    $("#search-button").empty();

    for (i = 0; i < sports.length; i++){

        var sportsB = $("<button>")

        sportsB.addClass("sport");
        sportsB.attr("data-name", sports[i]);
        sportsB.text(sports[i]);
        $("#search-button").append(sportsB);
    }
}

$("#addSport").on("click", function(event){

    event.preventDefault();

    var sportStuff = $("#sports-input").val().trim();

    sports.push(sportStuff);
    
    renderButton();








var queryURL = "https://api.giphy.com/v1/gifs/search?" + sportStuff + "api_key=vofuJPxsvHdoHwjTlbVIn9Htga3yhsbX";


$.ajax({
    url: queryURL,
    method: "GET"
});

});
renderButton();