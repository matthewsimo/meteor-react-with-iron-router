Lists = new Meteor.Collection("lists");

if( Meteor.isServer ) {

	// Fixture
	if( !Lists.findOne() ) {

		console.log("No Lists found. Initializing.");

		Lists.insert({
			title: "The Justice League",
			listNumber: 1,
			items: [
				{ name: "Superman", description: "The Man of Steel" },
				{ name: "Batman", description: "The Dark Knight" },
				{ name: "Wonder Woman", description: "Princess Diana of Themyscira" },
				{ name: "Flash", description: "The Fastest Man Alive" },
				{ name: "Green Lantern", description: "In brightest day, in blackest night..." },
				{ name: "Martian Manhunter", description: "J'onn J'onzz - totally under rated" },
				{ name: "Aquaman", description: "King of Atlantis" },
			]
		});

		Lists.insert({
			title: "The Avengers",
			listNumber: 2,
			items: [
				{ name: "Iron Man", description: "Tony Stark: Genius, Billionaire, Playboy, Philanthropist" },
				{ name: "Captain America", description: "The First Avenger" },
				{ name: "Thor", description: "Son of Odin" },
				{ name: "Hulk", description: "The Strongest there is." },
				{ name: "Black Panther", description: "T'Challa, Wakanda bad ass" },
				{ name: "Hawkeye", description: "Brought all his arrows, your welcome" },
				{ name: "Ant-Man", description: "Dr. Henry \"Hank\" Pym" },
				{ name: "Wasp", description: "Janet van Dyne: The Winsome Wasp - Stingers or something.." },
			]
		});

		Lists.insert({
			title: "The Fellowship of the Ring",
			listNumber: 3,
			items: [
				{ name: "Aragorn", description: "Son of Arathorn, and is called Elessar, the Elfstone, Dúnadain, the heir of Isildur Elendil's son of Gondor" },
				{ name: "Gandalf", description: "Mithrandir" },
				{ name: "Boromir", description: "The eldest son of Denethor II, who was Steward of Gondor during the War of the Ring" },
				{ name: "Gimli", description: "Son of Glóin and a nephew of Óin, both former companions of Bilbo Baggins." },
				{ name: "Legolas", description: "Son of the Elf-king Thranduil of Mirkwood, the Woodland Realm" },
				{ name: "Frodo", description: "A Hobbit of the Shire, the Ring-bearer" },
				{ name: "Samwise", description: "Frodo's Gardener, best friend and does all the work" },
				{ name: "Pippin", description: "Peregrin Took, Frodo's second cousin once removed." },
				{ name: "Merry", description: "Meriadoc Brandybuck, Frodo's cousin and likes maps." },
			]
		});
	}

	Meteor.publish("list", function(listNumber) {
		listNumber = parseInt(listNumber);
		return Lists.find({ listNumber: listNumber });
	});

}




