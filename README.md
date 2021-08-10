# NY Times

</br>
<p align="center">
    <img src="https://img.shields.io/github/languages/count/kqarlos/ny-times?style=for-the-badge" alt="Languages" />
    <img src="https://img.shields.io/github/languages/top/kqarlos/ny-times?style=for-the-badge" alt="Top Language" />
    <img src="https://img.shields.io/github/languages/code-size/kqarlos/ny-times?style=for-the-badge" alt="Code Size" />
    <img src="https://img.shields.io/github/repo-size/kqarlos/ny-times?style=for-the-badge" alt="Repo Size" />   
    <img src="https://img.shields.io/tokei/lines/github/kqarlos/ny-times?style=for-the-badge" alt="Total Lines" />   
    <img src="https://img.shields.io/github/last-commit/kqarlos/ny-times?style=for-the-badge" alt="Last Commit" />  
    <img src="https://img.shields.io/github/issues/kqarlos/ny-times?style=for-the-badge" alt="Issues" />  
    <img src="https://img.shields.io/github/followers/kqarlos?style=social" alt="Followers" />  
</p>

## Description 

Easily search for NY Times articles.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
    * [Screenshots](#screenshots)
    * [Snippets](#snippets)
* [Credits](#credits)
* [License](#license)


## Installation

This application is compatible with the most commonly used web browsers.

<p align="center">
    <a href="https://kqarlos.github.io/ny-times/"><img src="https://img.shields.io/badge/-👉 See Live Site-success?style=for-the-badge"  alt="Live Site" /></a>
</p>

## Usage

### Screeshots

1. Working Site

![Site](assets/images/live.gif)

2. Returned articles

![Site](assets/images/articles.png)


### Snippets


1. Search

```javascript

//Call to build query. Sends query to another function that return the articles according to the query. 
//Calls to render the articles
$("#search").on("click", function () {
    let numberOfRecords = $("#searchFilter [name=numberOfRecords]").val().trim();
    var queryURL = getQuery();
    getArticles(queryURL).then(function (articles) {
        renderArticles(articles, numberOfRecords);
    });
});
    
```
* This listerner takes care of th esteps necessary to go from getting the user's information to rendering the articles on the user's web. Calls a functon to build the query. Then with the query it calls a function that will get the articles from the NYT api. Once the articles are ready, they are sent to another function that renders the articles to the HTML.


2. Query building

```javascript

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

```
* This function takes care of building the query. It gets the values from the fields that were filled form the user. These then add to an object of all the necesary parameters for the query. Then, the _queryParams_ object is added to the _queryURL_ with the _$.param()_ function.


## Credits 

### Author

- 💼 Carlos Toledo: [portfolio](https://kqarlos.github.io)
- :octocat: Github: [kqarlos](https://www.github.com/kqarlos)
- LinkedIn: [carlos-toledo415](https://www.linkedin.com/in/carlos-toledo415/)


### Built With
    
<p align="center">
    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="https://img.shields.io/badge/-HTML-orange?style=for-the-badge"  alt="HMTL" /></a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://img.shields.io/badge/-CSS-blue?style=for-the-badge" alt="CSS" /></a>
    <a href="https://www.javascript.com/"><img src="https://img.shields.io/badge/-Javascript-yellow?style=for-the-badge" alt="Javascript" /></a>
    <a href="https://getbootstrap.com/"><img src="https://img.shields.io/badge/-Bootstrap-blueviolet?style=for-the-badge" alt="Bootstrap" /></a>
</p>
</br>

## License

<p align="center">
    <img align="center" src="https://img.shields.io/github/license/kqarlos/ny-times?style=for-the-badge" alt="MIT license" />
</p>