$API = (function(){
    
    var _key = 'twitter-upair';
    
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
    
    
    function credentials(callback){
        var upair = currentAppData.get(_key);
        if(! upair){
            var dialog = new KONtx.dialogs.Login({
                title: $_('dialog-login-title'),
                message: $_('dialog-login-message'),
                callback: function(response){
                    currentAppData.set(_key, JSON.stringify(response));
                    credentials(callback);
                }
            });
            dialog.initialize();
            dialog.show();
        } else {
            callback(JSON.parse(upair));
        }
    }
    
    return {
        
        'getTweets': function(timeline, since_id){
            timeline = timeline || 'user_timeline';
            credentials(function(userpass){
                get('http://' + userpass.username + ':'
                    + userpass.password +
                    '@twitter.com/statuses/' + timeline + '.json' +
                ( since_id ? '?since_id=' + since_id : '' ),
                function(response){
                    KONtx.messages.store('tweets-r-here', JSON.parse(response));
                })
            })
        },
        key: _key
        
    }
})()