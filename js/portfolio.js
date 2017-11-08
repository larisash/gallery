'use strict'


function initPage() {
    var gProjs = [{
            "id": "sokoban",
            "name": "sokoban",
            "title": "Better push those boxes",
            "desc": "lorem ipsum lorem ipsum lorem ipsum",
            "publishedAt": 1,
            "date": "1/11/17",
            "labels": ["Matrixes", "keyboard events"]

        },
        {
            "id": "minesweeper",
            "name": "minesweeper",
            "title": "don't spet on the mines",
            "desc": "lorem ipsum lorem ipsum lorem ipsum",
            "publishedAt": 2,
            "date": "3/11/17",
            "labels": ["Matrixes", "keyboard events"]

        },
        {
            "id": "calc",
            "name": "calc",
            "title": "calc!",
            "desc": "lorem ipsum lorem ipsum lorem ipsum",
            "publishedAt": 3,
            "date": "6/11/17",
            "labels": ["Matrixes", "keyboard events"]

        }
    ];



    var layout = document.querySelector('.portofolios');
    layout.innerHTML = '';
    for (var i = 0; i < gProjs.length; i++) {
        var strHtml = 
            '<div class="col-md-4 col-sm-6 portfolio-item">' +
            '<a class="portfolio-link" data-toggle="modal" href="' + i + 1 + '">' +
            '<div class="portfolio-hover">' +
            '<div class="portfolio-hover-content">' +
            '<i class="fa fa-plus fa-3x"></i>' +
            '</div>' +
            '</div>' +
            '<img class="img-fluid" src="img/portfolio/' + gProjs[i].id + '.png' + '" alt="">' +
            '</a>' +
            '<div class="portfolio-caption">' +
            '<h4>' + gProjs[i].name + '</h4>' +
            '<p class="text-muted">' + gProjs[i].desc + '</p>' +
            '</div>' +
            '</div>'

        layout.innerHTML += strHtml;
    }

}






var strHtmlModal = ''
for (var i = 0; i < gProjs.length; i++){

 strHtmlModal +='<div class="portfolio-modal modal fade" id=' + gProjs[i+1].id +'tabindex="-1" role="dialog" aria-hidden="true">'+
  '<div class="modal-dialog">'+
    '<div class="modal-content">'+
      '<div class="close-modal" data-dismiss="modal">'+
        '<div class="lr">'+
         '<div class="rl"></div>'+
        '</div>'+
      '</div>'+
      '<div class="container">'+
        '<div class="row">'+
          '<div class="col-lg-8 mx-auto">'+
            '<div class="modal-body">'+

              '<h2>'+ gProjs[i].name +'</h2>'+
              '<p class="item-intro text-muted">'+ gProjs[i].title + '</p>'+
              '<img class="img-fluid d-block mx-auto" src="img/portfolio/01-full.jpg" alt="">'+
              '<p>'+ gProjs[i].desc + '</p>'+
              '<ul class="list-inline">'+
                '<li>Date:'+ gProjs[i].date + '</li>'+
                '<li>Client: Threads</li>'+
                '<li>Category: Illustration</li>'+
              '</ul>'+
              '<button class="btn btn-primary" data-dismiss="modal" type="button">'+
                  '<i class="fa fa-times"></i>'+
                  'Close Project</button>'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>'+
  '</div>'+
'</div>'
}
document.querySelector('body') += strHtmlModal;
