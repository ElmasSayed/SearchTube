
$( document ).ready(function(){
    console.log("ready");

    // searchbar handler
    $(function(){
        var searchField = $('#query');
        var icon = $('#search-btn');

        // focus event handler
        $(searchField).on('focus', function(){
            $(this).animate({
                width:'100%'
            }, 500);
            $(icon).animate({
                right:'10px'
            }, 500);
        }) ;

        // blur event handler
        $(searchField).on('blur', function(){
            $(this).animate({
                width:'45%'
            }, 500);
            $(icon).animate({
                right:'360px'
            }, 500);
        }) ;

        $("#search-form").submit(function(e){
            event.preventDefault();
        })
    });

    var APIkey = 'AIzaSyBgjDNdtEIIE5fLY_MgFhXiqR02LnwkTD4'   

    $("#search-btn").click(function(){
        event.preventDefault();
        var searchTerm = $("#query").val();
        var endpoint = "https://www.googleapis.com/youtube/v3/search";
        var querystring = "?q=" + searchTerm  + "&type=video&part=snippet,id&key=" + APIkey  ;
        var queryURL = endpoint + querystring;
        // console.log(queryURL);

        $.ajax({
            url: queryURL,
            method: "GET",
            data{

            }
        
        .done(function(response){ 
            console.log(queryURL);
            // Log data
            console.log(response);
            $.each(response.items, function(i, item){
                // Get output
                var output = getOutput(item);
                // Display results
                $("#results").append(output);
            });
            var buttons = getButtons(prevPageToken, nextPageToken);

            // Display buttons
            $("#buttons").append(buttons);

        });        // .done ends
            
    }); // search ends 

    // Transfer content to html
    function getOutput(item){
        var title = item.snippet.title;         
        var description = item.snippet.description;            
        var thumbnails = item.snippet.thumbnails.high.url ;           
        var channelTitle = item.snippet.channelTitle ;           
        var videoDate = item.snippet.publishedAt; 
        var nextPageToken = data.nextPageToken;
        var prevPageToken = data.prevPageToken;

    // Build Output String
        var output = 
        '<li>'+
            '<div class="list-left">' +
                '<img src="' + thumbnails +'">' +
            '</div>' +

            '<div class="list-right">'+
                '<h3>' + title + '</h3>' +
                '<small>By <span class="cTitle">' + channelTitle+'</span>'  +
                '<p>' + description + '</p>' +
            '</div>' +
        '</li>' +
        '<div class = "clearfix"></div>'+
        '';   
        return output;
        }
       
       

      
}); //ready

    // console.log(response);
//    {
//         "kind": "youtube#searchListResponse",
//         "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/pnNgs2TyaacE0E-GCuTTcdAahQE\"",
//         "nextPageToken": "CAUQAA",
//         "regionCode": "US",
//         "pageInfo": {
//             "totalResults": 1000000,
//             "resultsPerPage": 5
//         },
//         "items": [
//             {
//                 "kind": "youtube#searchResult",
//                 "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/XoUwSfxtr18XZotcDar0NIA0qp0\"",
//                 "id": {
//                     "kind": "youtube#video",
//                     "videoId": "S0PaJ1V1fmo"
//                 },
//                 "snippet": {
//                     "publishedAt": "2019-01-30T10:04:46.000Z",
//                     "channelId": "UCfyKktpUgdV5xDEhakicCsw",
//                     "title": "Beggar Asks For Food From Salman Khan's Damaad Aayush Sharma..What Happens Next will Melt ur Heart",
//                     "description": "Welcome to Home Bollywud, your one stop destination for everything and anything around Movies, Celebrities and Indian Television stars.",
//                     "thumbnails": {
//                         "default": {
//                             "url": "https://i.ytimg.com/vi/S0PaJ1V1fmo/default.jpg",
//                             "width": 120,
//                             "height": 90
//                         },
//                         "medium": {
//                             "url": "https://i.ytimg.com/vi/S0PaJ1V1fmo/mqdefault.jpg",
//                             "width": 320,
//                             "height": 180
//                         },
//                         "high": {
//                             "url": "https://i.ytimg.com/vi/S0PaJ1V1fmo/hqdefault.jpg",
//                             "width": 480,
//                             "height": 360
//                         }
//                     },
//                     "channelTitle": "Home Bollywud",
//                     "liveBroadcastContent": "none"
//                 }
//             },


// $.ajax({
//     method: 'GET',
//     url: 'https://www.googleapis.com/youtube/v3/channels?',
//     data: { 
//     part : 'contentDetails',
//     forUsername: channelName,
//     key: '(My personal key)'
//     },
//     dataType: 'jsonp'
// })


// $("#search").click(function() {
//     event.preventDefault();
//     var location = $("#location").val();
//     var queryURL = "https://api.openweathermap.org/data/2.5/weather" + "?q=" + location + "&units=imperial" + "&APPID=" + APIkey;
//     // console.log(queryURL);
//     // console.log(response);
//     $.ajax({
//             url: queryURL,
//             method: "GET"
//         })
//         .done(function(response) {
//             // console.log(queryURL);
//             // console.log(response);
//             console.log(JSON.stringify(response, null, 4));

//             // Transfer content to html
//             $("#cityName").html(response.name);
//             $("#wind").html(response.wind.speed);
//             $("#humidity").html(response.main.humidity);
//             $("#temp").html(response.main.temp);
//             $("#rain").html(response.weather[0].description);
//         })
