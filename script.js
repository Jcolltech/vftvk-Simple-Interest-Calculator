function compute()
{
    
    
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    // skip "years" later on since it's just an intermediate var used for computations.
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);



    
    if (principal < 1)
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
    else
    {
        
        
        // string that will be the inner text of the "result" element.
        var interestString =  document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>"
    }
    
}
function updateRate() 
{  
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";  
}