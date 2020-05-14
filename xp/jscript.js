$("#toplinks, #toplnks, #toplnked").on('click','a', function(event){ 
    event.preventDefault();
    var o =  $( $(this).attr("href") ).offset();   
    var sT = o.top - $("#fixedbar").outerHeight(true); 
    window.scrollTo(0,sT);
    });