/**
 * @author Horia Dragomir horia.dragomir@od-eon.com
 */

include("Framework/kontx/1.0.0/src/all.js");

include("Javascript/views/MainView.js");
include("Javascript/views/CustomView.js");
include("Javascript/views/AboutView.js");
include("Javascript/views/SnippetView.js");

//currentAppData.delete('twitter-upair');

include('Javascript/app/API.js');

KONtx.application.init({
    views: [
        { id: 'view-Main', viewClass: MainView },
        { id: 'view-UserTimeline', viewClass: UserTimeline, data: {timeline: 'user_timeline'} },
        { id: 'view-FriendsTimeline', viewClass: UserTimeline, data: {timeline: 'friends_timeline'} },
        { id: 'view-UserReplies', viewClass: UserTimeline, data: {timeline: 'mentions'} },
        { id: 'view-About', viewClass: AboutView },
        { id: 'snippet-tweets', viewClass: SnippetView, data: { message: "Tweets" } },
    ],
    defaultViewId: 'view-Main',
    settingsViewId: 'view-About'
});

