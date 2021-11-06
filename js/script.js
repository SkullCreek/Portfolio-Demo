//javascript document

window.onload = function()
{
    $(document).ready(
        function(){
            // $("#loader").fadeOut(1000);
            $("#loader").css({
                'padding':'10000%',
                'animation':'none',
            }
            );
            $("#loader-con").fadeOut();
        }
    );
}

//slickNav coding

$(function(){
    $("#menu").slicknav({
        label : '',
        brand : 'SkullCreek'
    });
});

//slicknav coding



// start big slider
$(document).ready(function() {
    $(".skitter-large").skitter({
        label : false,
        dots :false,
    });
  });

  $(document).ready(function(){
    
    $(".picone-header").slideDown(1000,function(){
        $(".picone-btn").fadeIn(1500,function(){
            $(".picone-header, .picone-btn").delay(100).fadeOut();
        });
    });
});
//end big slider