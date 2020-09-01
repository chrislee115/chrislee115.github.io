// Makes header transparent when not at top

var url = 'https://script.google.com/macros/s/AKfycbxtrE7t6HbZVrUhKw-CqZpXJXpLHKpA5MODZzCF9y79A6PT-1E/exec?user_email='


$(document).ready(function () {
    var header = document.getElementById("mainHeader");
    
    // page transition when you click a section
    $("a.scrollLink").click(function (event) {
        // im not entirely sure what this line is doing
        // event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 1000);
    });
    $("a.modifiedScrollLink").click(function (event) {
        // im not entirely sure what this line is doing
        // event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top - 90}, 1000);
    });

});

// changes the header underline/url hash when the section is scrolled over

$(document).bind('scroll',function(e){
    $('section').each(function(){
        if ($(this).offset().top < window.pageYOffset + 10
        && $(this).offset().top + $(this).height() > window.pageYOffset + 20) {
            // replace hash in url
            var urlId = '#' + $(this).attr('id'); 
            history.replaceState(null, null, urlId);

            // change the underline in header
            $(this).attr("href")
            $("li").removeClass();
            $("li > a[href='#"+$(this).attr("id")+"']").parent().addClass("selected");
        }
    });
});

