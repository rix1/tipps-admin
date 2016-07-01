import {SignUps, Beacons} from '../imports/api/tasks.js';

Meteor.startup(() => {
    // code to run on server at startup
    if(SignUps.find().count() === 0){
        console.log("DATABASE IS EMPTY!");
    }

    if(Beacons.find().count() === 0){
        let beacons = [{
            name: "BLUEBERRY",
            inserted: Date.now(),
            macAddress: "C3:59:25:1E:CF:B0",
            proximityUUID: "b9407f30-f5f8-466e-aff9-25556b57fe6d",
            major: 53168,
            minor: 9502,
            title: "Tipps fra Heisen!",
            message: "Se dagens meny!",
			type: 0,
            price: -1
        }, {
            name: "BLUE",
            inserted: Date.now(),
            macAddress: "EC:81:4D:A1:7E:26",
            proximityUUID: "b9407f30-f5f8-466e-aff9-25556b57fe6d",
            major: 32294,
            minor: 19873,
            title: "Tipps fra Børsbaren!",
            message: "Kjøp lommebok og få penger på kjøpet",
			type: 0,
            price: 1
        }];

        for (var i = 0; i < beacons.length; i++) {
            Beacons.insert(beacons[i]);
        }
    }
});
