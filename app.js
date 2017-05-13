let buildArticle = function(article) {
    let item = $("<div>").addClass("info-column");
    let title = $("<a>");
    let date = $("<p>");
    let snippet = $("<p>");
    let byLine = $("<p>");

    title.append($("<h1>").text(article.headline.main));
    title.attr("href", article.web_url);
    title.addClass("titleText");

    snippet.addClass("snippet");
    snippet.text(article.snippet);

    date.text(article.pub_date);
    date.addClass("publish-date");

    byLine = $("<p>")
    byLine.text(article.byline.original);

    item.append(title);
    item.append(snippet);
    item.append(date);
    item.append(byLine);
    $(".results-column").append(item);
}

let listArticles = function(artCount) {
    for (var i = 0; i < artCount; i++) {
        buildArticle(articleArray[i]);
    }
}
