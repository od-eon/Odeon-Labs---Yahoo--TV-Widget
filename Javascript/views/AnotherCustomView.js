/**
 * @author jstone
 */

var AnotherCustomView = new KONtx.Class({
 	ClassName: 'MySecondCustomView',
	
	Extends: KONtx.system.SidebarView,
	
	createView: function() {
		// put your code here for creating the elements on the page
		
		// sample of having a view config data toggle
		this.controls.backButton = new KONtx.control.BackButton({
			label: this.config.data.mode == "edit" ? $_('edit_mode') : $_('insert_mode'),
			guid: "back_button",
		}).appendTo(this);
		
	},
	
	updateView: function() {
		// put your code here for updating the contents of the page
	}
});