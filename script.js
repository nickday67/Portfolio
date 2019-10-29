$(".jumper").on("click", function( e ) {    
    e.preventDefault();
    $("body, html").animate({ 
        scrollTop: $( $(this).attr('href') ).offset().top 
    }, 500);    
});

function onClickMenu(){
	document.getElementById("menu").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
}