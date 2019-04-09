$(document).ready(function(){
	var prevCount = 0;
	var prevScrollPos = 0;
	
	// function to display the upvotes
	function showUpvotes()
	{
	    // getting the elements from web page
	    var li = document.getElementsByClassName("count hide_in_feed");
	    var newCount = li.length;
	    if(newCount != prevCount){
	    	for(let i=prevCount;i<newCount;i++){
	    		li[i].style.display="inline-block";
	    	}
	    	prevCount = newCount;
	    }
	}
	showUpvotes();
	
	// invoking the function if scrolled
	document.onscroll = function(){
		if($(document).scrollTop() >= prevScrollPos + 700){
			showUpvotes();
		}
	}
});
