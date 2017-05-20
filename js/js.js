var countjson = 0;
var fileNames = ["json.json", "json2.json"];

$(function() {
	
  
    $( "#carga" ).click(function() { loadNews();});
  
  
});

function cargarNoticia(json){
	
  $.each( json, function( i, noticia ) {
    $("#noticiascargadas").append( '<div class="' + "news" + '">'+"<h1 id='" + i + "'>" + noticia.titulo + "</h1>"+ "<center>"+'<img id="imgnews1" class="'+ "img-responsive"+'" src="'+noticia.img+'" />'+"</center>"+"<br>"+"<strong>"+noticia.categoria+"</strong>"+"<br><br>" +"<p>"+noticia.descripcion+"</p>"+"<p class='text-right'>"+noticia.fecha+"</p>"+"</div>" );
  	$("#barralado").append("<li>"+"<a>"+noticia.categoria+"</a>"+"</li>");
  });  
}

function loadNews() {
	
    if (countjson < fileNames.length) {
        var name = fileNames[countjson];
        countjson++;
        $.getJSON("https://rawgit.com/jimenopro/PaginaNoticias/master/data/" + name, function (jsonObject) {
            cargarNoticia(jsonObject);
        });
    } else {
        alert("Ya has visto todas las noticias");
    }
}