/**
 * @author jstone
 */

var UserTimeline = new KONtx.Class({
 	ClassName: 'UserTimelineView',
	
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
                width: this.width,
                height: this.height - this.controls.backButton.outerHeight
            }
        }).appendTo(this);
        
        this.controls.page_indicator = new KONtx.control.PageIndicator({
            threshold: 333,
            styles: {'vOffset': this.controls.tweets.height }
        }).appendTo(this);
        
        this.controls.tweets.attachAccessories( this.controls.page_indicator );
        
        $API.getTweets( this.config.data.timeline || 'user_timeline' );
    },

    cellUpdater: function(cell, dataitem) {
        cell.tweetText.data = dataitem.text;
        cell.avatar.src =  dataitem.user.profile_image_url;
        cell.username.data = dataitem.user.name;
        
    },
    
    cellCreator: function(){      
        var grid_cell = new KONtx.control.GridCell({
            styles: {
                width: this.width
            },
            events: {
                onSelect: function(event) {
                    log("You selected a tweet");
                }
            }
        } );
        
        grid_cell.imageBox = new KONtx.element.Container({
            styles: { 'hOffset': 10, 'vOffset': 10, 'width': 64, 'height': 64 }
        }).appendTo(grid_cell);
        
        grid_cell.avatar = new KONtx.element.Image({
			styles: { 'hAlign': 'center', 'vAlign': 'center' },
			events: {
				'onLoaded': function() {
					
				}
			}
		}).appendTo(grid_cell.imageBox);
        
        grid_cell.tweetText = new KONtx.element.Text({
            styles: {
                color: '#FFFFFF',
                fontSize: KONtx.utility.scale(14),
                hAlign: 'center',
                width: this.width,
                wrap: true,
                vOffset: 80
            }
        }).appendTo(grid_cell);
        
		
		
		grid_cell.username = new KONtx.element.Text({
			wrap: true,
            label: 'A very very long name here',
			styles: { 'fontFamily': 'Helvetica Neue Condensed',
            'fontSize': 18, 'color': "#AAAAAA",
            'vOffset': 20, 'hOffset': 80, 'height': 50, 'width': 150 }
		}).appendTo(grid_cell)
        
        return grid_cell;
    },
    
    updateGridData: function(tweets){
        if(tweets instanceof Array && this.controls.tweets instanceof KONtx.control.Grid){
            //this.controls.tweets.config.rows = Math.min(tweets.length, 10);
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