jQuery(document).ready(function() {
   
    function slideAnimate() {
	    var i = document.getElementById('span');
	    var h = window.innerHeight;
	    var x = 2*h;
	    var y = 3*h;
	    var Yoffset  = window.pageYOffset;
  	 	
  	 	if(Yoffset < h){
			i.style.marginLeft = "2.5%";
		}
		else if(Yoffset < (2*h)-100) {
			i.style.marginLeft = "22.5%";
		}
		else if(Yoffset < (3*h)) {
			i.style.marginLeft = "42.5%";
		}
		else if (Yoffset >= (3*h)){
			i.style.marginLeft = "62.5%";
		}        
    }
    window.addEventListener('scroll',slideAnimate);
    


});