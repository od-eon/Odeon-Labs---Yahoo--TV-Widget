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
        log('twitter initialized')
    },
    
    createView: function() {

        this.controls.backButton = new KONtx.control.BackButton({
            label: $_('custom_view_backbutton'),
            guid: "back_button"
        }).appendTo(this);
        
        this.controls.tweets = new KONtx.control.Grid({
            columns: 1,
            rows: 11,
            cellCreator: this.cellCreator,
            cellUpdater: this.cellUpdater,
            styles: {
                vOffset: this.controls.backButton.outerHeight,
                width: this.width,
                height: this.height - this.controls.backButton.outerHeight
            }
        }).appendTo(this);
        
        
        
        $API.getTweets();
    },

    cellUpdater: function(cell, dataitem) {
        cell.tweetText.data = dataitem.text;
    },
    
    cellCreator: function(){      
        var cell = new KONtx.control.GridCell({
            styles: {
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
                hAlign: 'center'
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
        if(ev.type != KONtx.messages.eventType) return;
        if(ev.payload.key == this.config.tweetsLoadedKey) {
            this.updateGridData(ev.payload.value);
        }
    },
    
	updateView: function() {
        var tweets = KONtx.messages.fetch(this.config.tweetsLoadedKey);
        tweets && this.updateGridData(tweets);
	}
});