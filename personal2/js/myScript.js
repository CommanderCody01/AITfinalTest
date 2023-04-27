
$(document).ready(function(){

    var photo = "<img src='images/tongxue.png'/>"
    $("#html").click(function(){
        $("#red的text").html( photo );
    });


    $("#css").click(function(){
        $("body").css("background","white");
    });


    $("#fadeOut").click(function(){
        $(".photo").fadeOut();
    });

    $("#fadeIn").click(function(){
        $(".photo").fadeIn();
    });


    $("#effect").click(function(){
        $(".photo").velocity("callout.bounce");
    });






});






// $(document).ready(function(){
//     //write code here...
//     var htmlText = "<h4>Hello World!</h4>";

//     //CONTENT
//     $("#html").click(function(){
//         $(".exampleHTML").html( htmlText );
//     });

//     $("#text").click(function(){
//         $(".exampleHTML").text( htmlText );
//     });

//     $("#append").click(function(){  
//         $(".exampleHTML").append( htmlText );
//     });

//     //STYLES
//     $("#css").click(function(){
//         $(".exampleCSS").css("background","red");
//     });

//     $("#cssClass").click(function(){
//         $(".exampleCSS").addClass("addClassExampleStyle");
//     });

//     $("#removeCssClass").click(function(){
//         $(".exampleCSS").removeClass("addClassExampleStyle");
//     });

//     //EFFECTS

//     $("#fadeOut").click(function(){
//         $(".exampleFX").fadeOut();
//     });

//     $("#fadeIn").click(function(){
//         $(".exampleFX").fadeIn();
//     });

//     $("#hide").click(function(){
//         $(".exampleFX").hide();
//     });

//     $("#show").click(function(){
//         $(".exampleFX").show();
//     });

//     $("#left").click(function(){
//         $(".exampleFX").animate({"left":"-=50px"}, "slow");
//     });

//     $("#right").click(function(){
//         $(".exampleFX").animate({"left":"+=50px"}, "slow");
//     });

//     $("#bounce").click(function(){
//         $(".exampleVelocity").velocity("callout.bounce");
//     });

//     $("#shake").click(function(){
//         $(".exampleVelocity").velocity("callout.shake");
//     });

//     $("#pulse").click(function(){
//         $(".exampleVelocity").velocity("callout.pulse");
//     });

    






// });
