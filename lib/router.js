Router.configure({
  layoutTemplate: 'Main'
});

Router.route('/', function() {

	// get a random list of homepage is hit, hard coded just for example - don't do this.
	var randomList = Math.floor(Math.random() * (4 - 1)) + 1; 
	this.redirect('/list-' + randomList);

});

Router.route('/list-:number', function() {

	this.wait(Meteor.subscribe('list', this.params.number));

	if ( this.ready() ) {
		this.render('list', { 
			data: { 
				listNumber: this.params.number,
				list: Lists.findOne( { listNumber: parseInt( this.params.number ) })
			}
		});
	} else { 
		this.render('Loading');
	}
		
});


