//use ajax to load JSON file
var xhr = new XMLHttpRequest();
xhr.onload = function() {
    //save JSON data
    var data = JSON.parse(xhr.responseText);

}

//Call Ajax
xhr.open('GET', 'https://dennismanyagi.github.io/comic/comics.json', true);
xhr.send(null);