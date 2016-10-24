//Adding Ticket

// var iframe = jQuery("<iframe></iframe>");
// jQuery(iframe).attr("src","Create.do?module=Cases");
// jQuery(iframe).attr("onload","add_Ticket()");

// jQuery("body").append(iframe);

// function add_Ticket(){
// jQuery(iframe).contents().find("input:text").val('hack@jhj.com') ;
// jQuery(iframe).contents().find('#saveButtonId').click();
// }
for( var i=0 ; i<1000 ; i++){
  jQuery.post("https://support.localzoho.com/support/nandhalocal/CreateCommonModule.do", { 'rowCount':'1','ActionType':'Create','previousPage':'false','operation':'create', 'property(Department)':'12883000000006907','property(Contact Name)':'dsad','property(newAutoLookup_property(Contact Name)_7)':'true','property(newAutoLookup_property(Account Name)_4)':'false', 'property(Subject)':'dasdas','property(Status)':'Open','property(Case Owner)':'6b28c32dddd03edf8e167a8f8ddd68f8e612657a51fd5fbe', 'property(ownerId)':'6b28c32dddd03edf8e167a8f8ddd68f8e612657a51fd5fbe', 'property(newAutoLookup_property(Product Name)_6)':'false', 'property(Mode)':'Phone','property(module)':'Cases','module':'Cases', 'currentModule':'Cases', 'crmcsrfparam':'6f9311410b96fb9213532afd1763d0687b7c95693477d3c21e9648bf48fe6ade8d8bc7d2c1e25ec95f4c3b1ef38e78dc362ee63134ee78ec77ea4fbb36ca132b','uhome':'requestqueue'});
}
