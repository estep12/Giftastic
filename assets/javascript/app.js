










var queryURL = "https://api.giphy.com/v1/gifs/search?" + searchTerm + "api_key=vofuJPxsvHdoHwjTlbVIn9Htga3yhsbX";


$.ajax({
    url: queryURL,
    method: "GET"
});