$(document).ready(function(){
	var prevCount = 0;
	var prevScrollPos = 0;
	function showUpvotes()
	{
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
	document.onscroll = function(){
		if($(document).scrollTop() >= prevScrollPos + 700){
			showUpvotes();
		}
	}
});