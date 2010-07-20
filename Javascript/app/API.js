$API = (function(){
    
    function get(url, callback){
        var u = new URL();
        u.callback = callback;
        u.location = url;
            
        log( "  > Twitter API [get] :: " + u.location );
        
        u.fetchAsync( function(u) {
            log( "  < Twitter API [" + u.response + "] :: " + u.location );
            if ( u.response == 200 ) {
                KONtx.application.setNetworkRequestFailed(false);
                u.callback( u.result );
            }
            else {          
                KONtx.application.setNetworkRequestFailed(true);
                log('\n%%% Twitter API: bonk! %%%  --- http response --->' + u.response + "\nResult:\n" + u.result);
            }
        } );
    }
    
    return {
        
        'getTweets': function(timeline, since_id){
            timeline = timeline || 'user_timeline'
            get('http://hornicator:simplepassword@twitter.com/statuses/' + timeline + '.json' +
                ( since_id ? '?since_id=' + since_id : '' ),
                function(response){
                    log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!tweets-r-here!!');
                    KONtx.messages.store('tweets-r-here', JSON.parse(response));
                })
        }
        
    }
})()