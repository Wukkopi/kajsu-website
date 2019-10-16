$.get("/news.html", function(data)
{
	var dataElements = $(data);
	$('li', dataElements).each(function(index) {
		var x = index + 1;
		if (index < 5)
		{
			var properHtml = $('<div class="col-xs-12">' + $(this).html() + "</div>");
			$('#news').append(properHtml);
		}
		else
		{
			return false;
		}
	});
});


