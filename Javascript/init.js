/**
 * @author jstone
 */

include("Framework/kontx/1.0.0/src/all.js");

include("Javascript/views/MainView.js");
include("Javascript/views/CustomView.js");
include("Javascript/views/AnotherCustomView.js");
include("Javascript/views/AboutView.js");
include("Javascript/views/SnippetView.js");

KONtx.application.init({
	views: [
		{ id: 'view-Main', viewClass: MainView },
		{ id: 'view-Custom', viewClass: CustomView },
		{ id: 'view-AnotherCustomEdit', viewClass: AnotherCustomView, data: { mode: "edit" } },  // sample of having a view config data toggle
		{ id: 'view-AnotherCustomInsert', viewClass: AnotherCustomView, data: { mode: "insert" } },  // sample of having a view config data toggle
		{ id: 'view-About', viewClass: AboutView },
		{ id: 'snippet-1', viewClass: SnippetView, data: { message: "I'm snippet #1" } }, // sample of storing something for the snippet to use
		{ id: 'snippet-2', viewClass: SnippetView, data: { message: "I'm #2 .. :(" } }, // sample of storing something for the snippet to use
	],
	defaultViewId: 'view-Main',
	settingsViewId: 'view-About',
});