/**
 * @author jstone
 */

var AboutView = new KONtx.Class({
 	ClassName: 'MyCustomAboutView',
	
	Extends: KONtx.views.AboutBox,
	
	config: {
		BackButtonTitle: $_('settings'),
		pages: [
			{
                id: 'about-copyright',
                name: $_('copyright_policy'),
                srcString: $_('copyright_string')
            },
            {
                id: 'about-tos',
                name: $_('tos'),
                srcString: $_('tos_string')
            },
            {
                id: 'about-privacy',
                name: $_('privacy_policy'),
                srcString: $_('privacy_string')
            }
		],
	}
});