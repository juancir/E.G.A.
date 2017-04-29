
$(document).ready(function() {
    $("#submit").click(function() {
        var answer="";
        if ($("#Q4").val() !== "dont"){
            answer = answer + "<p>Please try not to smoke because it could bring up alot of diseases.</p>";
        }
        else{
            answer = answer +"<p>Great job not smoking.</p>";
        }
        if ($("input:checked[name='excercises']").length === 0  ) {
            answer = answer + "<p>You should begin to exercise it is a life changin experiences and also it will make you healthy.</p>"
            
        }
        else{
            answer = answer + "<p>great job, keep exercising.</p>";
        }
        if($("#Q6").val()>5){
            answer = answer + "<p>Please eat less for your health.</p>";
        }else if($("#Q6").val()<3){
            answer = answer + "<p>Eating too little is bad for your health.</p>"
        }else{
            answer = answer + "<p>Great job keep eating a healthy amount of food.</p>";
        }
        
        if($("#Q7").val()<5){
            answer = answer + "<p>You should eat 5 or more vegetables or fruit to have a healthy life style.</p>";
        }
            else{ 
                answer = answer + "<p>Great job keep it going with the vegetables.</p>"
        }
        
        if($("#Q8").val()<0.5){
            answer = answer + "<p>You shold drink more gallons of water in order to be healthy.</p>";
            
        }
            
            else if($("#Q8").val()>5.3){
                answer = answer + "<p>You are drinking too much water that can make you sick.</p>"
            }
            else{
                answer = answer + "<p>You are drinking a good amount of water.</p>"
            }
        $("#answer").html(answer);
    });
    
})