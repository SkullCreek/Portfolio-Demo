//safety
document.onkeydown = function(a)
{
    if(a.ctrlKey && a.keyCode == 85 || a.ctrlKey && a.keyCode == 67){
        return false;
    }
}
//safety
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
        dots : false,
    });
  });

  $(document).ready(function(){
    
    $(".picone-header").slideDown(1000,function(){
        $(".picone-btn").fadeIn(1500,function(){
            $(".picone-header, .picone-btn").delay(50).fadeOut(function(){
                $(".pic2-header").fadeIn(1000,function(){
                    $(".pic2-para").show(1500, function(){
                        $(".pic2-header, .pic2-para").delay(3800).fadeOut();
                    });
                });
            });
        });
    });
});

$(document).ready(function(){
    setInterval(function(){
    
        $(".picone-header").slideDown(1000,function(){
            $(".picone-btn").fadeIn(1500,function(){
                $(".picone-header, .picone-btn").delay(50).fadeOut(function(){
                    $(".pic2-header").fadeIn(1000,function(){
                        $(".pic2-para").show(1500, function(){
                            $(".pic2-header, .pic2-para").delay(3800).fadeOut();
                        });
                    });
                });
            });
        });
    },10500);
});
//end big slider

