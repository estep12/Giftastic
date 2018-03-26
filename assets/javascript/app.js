


var sports = ["Kobe Bryant", "Lebron James", "Basketball", "Football"];

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



function displaySport(){

    var sportz = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + sportz + "&api_key=vofuJPxsvHdoHwjTlbVIn9Htga3yhsbX&limit=10";


    $.ajax({
    url: queryURL,
    method: "GET"
    })

    .then(function(response){
        var results = response.data;
        console.log(response)
        for(let j=0; j<results.length; j++) {
            if (results[i].rating !== "r"){
                var gifDiv = $("<div class ='item'>");

                var rating = results[j].rating;

                var para = $("<p>").text("Rating: " + rating);

                var sportImage = $("<img>");

                sportImage.attr("src", results[j].images.fixed_height.url);
                sportImage.addClass("gif")
                gifDiv.prepend(para);
                gifDiv.prepend(sportImage);

                $("#sportsGifs").prepend(gifDiv);

                $(".gif").on("click", function(click){
                    console.log(click);
                    
                })


            }
        }
})
}

$("#addSport").on("click",  function(event){

    event.preventDefault();

    var sportStuff = $("#sports-input").val().trim();

    sports.push(sportStuff);

    renderButton();
})

 



$(document).on("click", ".sport", displaySport);

renderButton();