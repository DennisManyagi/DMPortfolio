//use ajax to load JSON file
let xhr = new XMLHttpRequest();
xhr.onload = function() {
    //save JSON data
    let data = JSON.parse(xhr.responseText);

    console.log(data);



    //Insert the HTML articles & into section ( insertAdjacentHTML)
    let popularSection = document.querySelector('#popular');
    if (popularSection){

        //create variable to store data
        let popular = '';


        //loop through data and place list titles
    for (let i=0; i < data.length; i++) {


        //format HTML with encapsulated variables
        popular += '<div class="col-sm-6">';
        popular += '<section class="card mb-5">';

        popular += '<img class="card-img-top img-fluid" src="'+data.homes[i].image+'" href="#">';
        popular += '<div class="card-header">';
        popular += '<h2 class="card-title">'+data.homes[i].city+'</h2>';
        popular += '</div>';


        popular += '<div class="card-footer">';

        popular += '<h5 class="card-subtitle">'+data.homes[i].location+'</h5>';
        popular += '</div>'


        popular += '</section>';
        popular += '</div>'
        //--Card end HTML-->




    }



        popularSection.insertAdjacentHTML("afterend", popular);



    }

}

//Call Ajax
xhr.open('GET', 'https://raw.githubusercontent.com/DennisManyagi/DMPortfolio/master/homes.json', true);
xhr.send(null);