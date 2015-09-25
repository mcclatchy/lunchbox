/* Check for a previously selected market to start with via cookieds */
if(document.cookie && document.cookie.indexOf("market=")>-1){
	$("#market").val(
		document.cookie.substring(
			document.cookie.indexOf("market=")+"market=".length,
			document.cookie.indexOf(";",document.cookie.indexOf("market="))>-1 ? document.cookie.indexOf(";",document.cookie.indexOf("market=")) : document.cookie.length
		)
	);
}
/* Global listener to see if we have specified a specific market */
$("#market").change(function(){
	var now=new Date();
	if($(this).val() != "null"){
		$("html").attr("market",$(this).val());
		document.cookie="market="+$(this).val()+";path=\/;expires="+escape(new Date(now.getTime()+365*24*60*60*1000));
	} else {
		$("html").removeAttr("market");
		document.cookie="market=null;path=\/;expires="+escape(new Date(now.getTime()-24*60*60*1000));
	}
}).trigger("change");