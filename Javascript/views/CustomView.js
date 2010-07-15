/**
 * @author jstone
 */

var CustomView = new KONtx.Class({
 	ClassName: 'MyCustomView',
	
	Extends: KONtx.system.SidebarView,
    config: {
        tweetsLoadedKey: 'tweets-r-here'
    },
    initialize: function(){
        this.parent();
        this.registerMessageCenterListenerCallback(this.messageHandler);
    },
    
    createView: function() {

        this.controls.backButton = new KONtx.control.BackButton({
            label: $_('custom_view_backbutton'),
            guid: "back_button"
        }).appendTo(this);
        
        this.controls.tweets = new KONtx.control.Grid({
            columns: 1,
            rows: 1,
            cellCreator: this.cellCreator,
            cellUpdater: this.cellUpdater,
            styles: {
                vOffset: this.controls.backButton.outerHeight,
                width: this.width
            }
        }).appendTo(this);
    },

    cellUpdater: function(cell, dataitem) {
        log(dataitem.text)
        cell.tweetText.data = dataitem.text;
    },
    
    cellCreator: function(){      
        var cell = new KONtx.control.GridCell({
            styles: {
            height: KONtx.utility.scale(35),
            width: this.width
        },
        events: {
            onSelect: function(event) {
                log("You selected a tweet");
            }
        } } );
        cell.tweetText = new KONtx.element.Text({
            styles: {
                color: '#FFFFFF',
                fontSize: KONtx.utility.scale(18),
                vAlign: 'center'
            }
        }).appendTo(cell);
        return cell;
    },
    
    updateGridData: function(tweets){
        if(tweets instanceof Array && this.controls.tweets instanceof KONtx.control.Grid){
            this.controls.tweets.changeDataset(tweets);
        }
    },
    
    messageHandler: function(ev){
        if(event.type != KONtx.messages.eventType) return;
        if(event.payload.key == this.config.tweetsLoadedKey) {
            log('halalala**&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&')
            this.updateGridData(event.payload.value);
        }
    },
    
	updateView: function() {
		// put your code here for updating the contents of the page
	}
});