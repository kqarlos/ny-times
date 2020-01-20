
//Call to build query. Sends query to another function that return the articles according to the query. 
//Calls to render the articles
$("#search").on("click", function () {
    let numberOfRecords = $("#searchFilter [name=numberOfRecords]").val().trim();

    var queryURL = getQuery();
    getArticles(queryURL).then(function (articles) {
        renderArticles(articles, numberOfRecords);
    });

});

$("#clear").on("click", function () {
    $("#articles").empty();
});

//Build query given the users parameters
function getQuery() {
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
    let terms = $("#searchFilter [name=term]").val().trim();
    let startYear = $("#searchFilter [name=startYear]").val().trim();
    let endYear = $("#searchFilter [name=endYear]").val().trim();

    var queryParams = { "api-key": "3NYM77KW72ndmEaRDzr2cjaOcabhAIRW" };
    queryParams.q = terms;
    if (parseInt(startYear)) {
        queryParams.begin_date = startYear + "0101";
    }
    if (parseInt(endYear)) {
        queryParams.end_date = endYear + "0101";
    }

    return queryURL + $.param(queryParams);

}

//returns array of articles from query
function getArticles(queryURL) {
    return new Promise(function (resolve, reject) {
        if (!queryURL) return reject(Error("Empty query"));
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(queryURL);
            console.log(response);
            resolve(response.response.docs)
        });
    });
}

//Renders articles to the HTML up to the number of records specified by the user
function renderArticles(articles, numberOfRecords) {
    $("#articles").empty();
    for (var i = 0; i < numberOfRecords; i++) {

        var row = $("<div class='row'>");
        var col = $("<div class='col-12'>");
        
        var card = $("<div class='card'>");
        var cardHeader = $("<div class='card-header h3'>");
        cardHeader.text((i+1) + ". " + articles[i].headline.main);
        var cardBody = $("<div class='card-body'>");

        var cardTitle = $("<h5 class='card-title h4'>");
        cardTitle.text(articles[i].abstract)
        var cardText = $("<p class='card-text'>");
        cardText.text(" Date Published: " + articles[i].pub_date);
        var calIcon = $("<i class='far fa-calendar-alt'>");
        cardText.prepend(calIcon);
        var button = $("<a class='mt-2 btn btn-primary'>");
        button.attr("href", articles[i].web_url);
        button.text(" Go to News Article");
        var buttonIcon = $("<i class='fas fa-external-link-square-alt'>");
        button.prepend(buttonIcon);

        cardBody.append(cardTitle);
        cardBody.append(cardText);
        cardBody.append(button);
        card.append(cardHeader);
        card.append(cardBody);
        col.append(card);
        row.append(col);
        $("#articles").append(row);
    }

}