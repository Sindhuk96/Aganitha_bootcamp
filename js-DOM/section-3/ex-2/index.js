function showContent(tabId){
    	document.querySelectorAll('.tab-content').forEach(function(content){
            content.style.display="none";
        });

        document.getElementById(tabId).style.display="block";
}   