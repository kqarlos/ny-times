
$("#search").on("click", function () {
    let numberOfRecords = $("#searchFilter [name=numberOfRecords]").val().trim();

    var queryURL = getQuery();
    getArticles(queryURL).then(function (articles) {
        renderArticles(articles);
    });

});

$("#clear").on("click", function () {

});

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

function renderArticles() {
    
}