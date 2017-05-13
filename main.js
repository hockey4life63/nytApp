// var q = $("#search");
// var numRec = $("#numberofRecords");
// var sYear = $("#startYear");
// var eYear = $("#endYear");

var q = "marijuana";
var numRec = $("#numberofRecords");
var sYear = "20150623";
var eYear = "20160623";
var articleArray = [];



// Built by LucyBot. www.lucybot.com
function apiPull(q, sYear, eYear) {
    var queryurl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    queryurl += '?' + $.param({
        'api-key': "749dfe5607974a399b902a67c4adc4d2",
        'q': q,
        'begin_date': sYear,
        'end_date': eYear,
    });

    $.ajax({
        url: queryurl,
        method: 'GET',
    }).done(function(result) {
        console.log(result.response.docs);
        articleArray = result.response.docs;

    }).fail(function(err) {
        throw err;
    });
};

apiPull(q, sYear, eYear);

// var nytSearch = {
//     q: "",
//     numRec: "",
//     sYear: "",
//     eYear: "",

//     apiPull: function(q, sYear, eYear) {
//         var queryurl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
//         queryurl += '?' + $.param({
//             'api-key': "749dfe5607974a399b902a67c4adc4d2",
//             'q': q,
//             'begin_date': sYear,
//             'end_date': eYear,
//         });

//         $.ajax({
//             url: queryurl,
//             method: 'GET',
//         }).done(function(result) {
//             console.log(result.response.docs);
//             articleArray = result.response.docs;

//         }).fail(function(err) {
//             throw err;
//         });
//     };

// }
