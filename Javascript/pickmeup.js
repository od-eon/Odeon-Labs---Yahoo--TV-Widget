/**
 * @author Horia Dragomir horia.dragomir@od-eon.com
 */

include("Framework/kontx/1.0.0/src/all.js");

include("Javascript/views/MainView.js");
include("Javascript/views/CustomView.js");
include("Javascript/views/AnotherCustomView.js");
include("Javascript/views/AboutView.js");
include("Javascript/views/SnippetView.js");

include('Javascript/app/API.js');

KONtx.application.init({
    views: [
        { id: 'view-Main', viewClass: MainView },
        { id: 'view-Custom', viewClass: UserTimeline },
        { id: 'view-About', viewClass: AboutView },
        { id: 'snippet-tweets', viewClass: SnippetView, data: { message: "Tweets" } }, // sample of storing something for the snippet to use
    ],
    defaultViewId: 'view-Main',
    settingsViewId: 'view-About'
});

