var cycle = 0; 

var allBackgrounds = [
                    "images/ollivanders.jpg",
                     "images/green.jpg",
                       "images/hogwarts.jpg",
                       "images/class.jpg",
                       "images/corridor.jpg",
                       "images/quidditch.jpg"
                       
                       
                       


                       
					    ]; 
 
setInterval(function() { 
	if (cycle < 6) { 
        
        document.getElementById("background").style.backgroundImage = "url('" + allBackgrounds[cycle] + "')"; 
		cycle += 1; 
	} else {  
		cycle = 0; 
    } 
    
    
}, 10000); 

