function loadHtml(page, elementId)
{
	$.get("../" + page + ".html", function(data)
	{
		$("#" + elementId).html(data);
	});	
};

function getQueryVariable(variable)
{
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i = 0; i < vars.length; i++)
	{
		var pair = vars[i].split("=");
		if(pair[0] == variable)
		{
			return pair[1];
		}
	}
	return false;
};

$(function() {
	var page = getQueryVariable("page");
	
	loadHtml("header", "header");
	loadHtml("footer", "footer");
	if (page == false)
	{
		page = "front";
	}
	loadHtml("pages/" + page , "content");
});

