/**
 * @author Horia Dragomir horia.dragomir@od-eon.com
 */

var MainView = new KONtx.Class({
    ClassName: 'TwitterWidgetMainView',
    
    Extends: KONtx.system.SidebarView,
    
    createView: function() {
        this.controls.button1 = new KONtx.control.TextButton({
            label: $_('view_0'),
            guid: "button0",
            styles:{
                height: 60
            },
            events: {
                onSelect: function(event) {
                    KONtx.application.loadView('view-FriendsTimeline');
                }
            }
        }).appendTo(this);
        
        this.controls.button2 = new KONtx.control.TextButton({
            label: $_('view_1'),
            guid: "button1",
            styles: {
                height: 60,
                vOffset: this.controls.button1.outerHeight
            },
            events: {
                onSelect: function(event) {
                    KONtx.application.loadView('view-UserReplies');
                }
            }
        }).appendTo(this);
        
        this.controls.button3 = new KONtx.control.TextButton({
            label: $_('view_2'),
            guid: "button2",
            styles: {
                height: 60,
                vOffset: this.controls.button2.outerHeight
            },
            events: {
                onSelect: function(event) {
                    KONtx.application.loadView('view-UserTimeline');
                }
            }
        }).appendTo(this);
      
        
        
      
    },
    
    
    
    updateView: function() {
    }
});