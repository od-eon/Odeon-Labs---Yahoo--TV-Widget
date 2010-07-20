/**
 * @author jstone
 */

var SnippetView = new KONtx.Class({
 	ClassName: 'MyCustomSnippetView',
	
	Extends: KONtx.system.SnippetView,
	
	config: {
		counterPrefix: "Selected Count: "
	},
	
	initView: function() {
		this.selected_count = 0;
	},
	
	createView: function() {
		this.controls.apptitle = new KONtx.element.Text({
            label: 'Twitter',
            styles: {
                hOffset: KONtx.utility.scale(10),
                vOffset: KONtx.utility.scale(16),
                fontSize: KONtx.utility.scale(12),
                color: '#AAAAAA'
            }
        }).appendTo(this);
        
        this.controls.message = new KONtx.element.Text({
            label: this.config.data.message,
            styles: {
                hAlign: 'center',
                vAlign: 'center',
                fontSize: KONtx.utility.scale(16),
                color: '#FFFFFF'
            }
        }).appendTo(this);

	},
	
	updateView: function() {
	}
});