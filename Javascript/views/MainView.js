/**
 * @author jstone
 */

var MainView = new KONtx.Class({
    ClassName: 'MyCustomMainView',
    
    Extends: KONtx.system.SidebarView,
    
    createView: function() {
        this.controls.button1 = new KONtx.control.TextButton({
            label: $_('view_0'),
            guid: "button0",
            events: {
                onSelect: function(event) {
                    KONtx.application.loadView('view-UserTimeline');
                }
            }
        }).appendTo(this);
        
        this.controls.button2 = new KONtx.control.TextButton({
            label: $_('view_1'),
            guid: "button1",
            styles: {
                vOffset: this.controls.button1.outerHeight
            },
            events: {
                onSelect: function(event) {
                    KONtx.application.loadView('view-FriendsTimeline');
                }
            }
        }).appendTo(this);
        
        this.controls.button3 = new KONtx.control.TextButton({
            label: $_('view_2'),
            guid: "button1",
            styles: {
                vOffset: this.controls.button2.outerHeight
            },
            events: {
                onSelect: function(event) {
                    KONtx.application.loadView('view-UserReplies');
                }
            }
        }).appendTo(this);
      
        
        
      
    },
    
    
    
    updateView: function() {
    }
});