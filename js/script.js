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