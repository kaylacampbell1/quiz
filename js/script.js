/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore = 0;
        q1Result.toLowerCase();
        q2Result.toLowerCase();
        q3Result.toLowerCase();
        totalScore += question1(q1Result);
        totalScore += question2(q2Result);
        totalScore += question3(q3Result);
        
        total(totalScore, name, q2Result);
    });

});

function question1(a1){
    if (a1==="moving away"){
        return 3
    } if (a1==="cheering"){
        
        return 9
    } if (a1==="stopping it"){
        
        return 1
    }
}

function question2(a2){
    if (a2==="walk"){
        
        return 6
    } if (a2==="fly"){
        
        return 1
    } if (a2==="swim"){
        
        return 3
    }
    
}
function question3(a3){
    if (a3==="omnivore"){
        
        return 5
    } if (a3==="carnivore"){
        
        return 12
    } if (a3==="herbivore"){
        
        return 3
    }

    
} 
function total(score, name,q2){
    if (score<=6){
            $(".result").html(name + " your spirit animal is a Butterfly");
            $(".img").append("<img src=\"https://images-na.ssl-images-amazon.com/images/I/71H-XvaGZwL.png\">");
        }else if(score>6 && score<=20){
            $(".result").html(name + " your spirit animal is a Lion");
            $(".img").append("<img src=\"http://www.stickpng.com/assets/images/580b57fbd9996e24bc43bc89.png\">");
        }if(q2==="swim"){
            $(".result").html(name + " your spirit animal is a Dolphin");
            $(".img").append("<img src=\"https://cdn.iflscience.com/images/aed9b8cd-e206-57ee-bc3f-5ec1c52e3bb5/default-1535474393-cover-image.jpg\">");
        }else if(score>20){
            $(".result").html(name + " your spirit animal is an Alligator");
            $(".img").append("<img src=\"https://cdn3.volusion.com/kapts.nrbqf/v/vspfiles/photos/ALLIGATOR114-2.jpg?1496409148\">");

        }
}
