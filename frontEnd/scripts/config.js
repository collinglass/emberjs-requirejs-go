define({
	app_name: "appName", 
	shim : {
		'ember' : {
			deps: ['handlebars', 'jquery'],
			exports: 'Ember'
		}
	},
	paths : {
		'App': 'app/application',		
		'models': 'app/models',
		'views': 'app/views',
		'controllers': 'app/controllers',
    	'templates': 'app/templates',
		/*libs*/
		'jquery': 'lib/jquery/jquery',
		'handlebars': 'lib/handlebars/handlebars',
		'ember': 'lib/ember/ember',
		/*requirejs-plugins*/
		'text': 'lib/requirejs-plugins/text',
		'hbs': 'lib/requirejs-plugins/hbs',
		'domReady': 'lib/requirejs-plugins/domReady'
	},
	/*hbs plugin options*/
	hbs: {
		disableI18n: true,
		templateExtension: "html"
	}

}); 

