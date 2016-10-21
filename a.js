//Adding Ticket

var iframe = jQuery("<iframe></iframe>");
jQuery(iframe).attr("src","Create.do?module=Cases");
jQuery(iframe).attr("onload","add_Ticket()");

jQuery("body").append(iframe);

function add_Ticket(){
jQuery(iframe).contents().find("input:text").val('hack@jhj.com') ;
jQuery(iframe).contents().find('#saveButtonId').click();
}
