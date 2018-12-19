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
        question1(q1Result, totalScore);
        question2(q2Result, totalScore);
        question3(q3Result, totalScore);
        
    });

});

function question1(a1, score){
    if (a1==="walking away"){
        
        return score+=3
    } if (a1==="cheering"){
        
        return score+=9
    } if (a1==="stopping it"){
        
        return score+=1
    }
}
function question2(a2){
    if (a2==="walk"){
        
        return
    } if (a2==="fly"){
        
    } if (a2==="swim"){
        
    }
    
}
function question3(a3){
    if (a3==="omnivore"){
        
    } if (a3==="carnivore"){
        
    } if (a3==="herbivore"){
        
    }
}
