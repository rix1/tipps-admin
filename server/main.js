import {SignUps, Beacons} from '../imports/api/tasks.js';

Meteor.startup(() => {
    // code to run on server at startup
    if(SignUps.find().count() === 0){
        console.log("DATABASE IS EMPTY!");
    }

    if(Beacons.find().count() === 0){
        let beacons = [{
            name: "DNB 3",
            inserted: Date.now(),
            macAddress: "EB:93:86:03:ED:D5",
            proximityUUID: "B9407F30-F5F8-466E-AFF9-25556B57FE6D",
            major: 58865,
            minor: 34307,
            title: "Tipps fra Rikard!",
            message: "Se dagens meny!",
            type: 0,
            price: -1
        }];

        for (var i = 0; i < beacons.length; i++) {
            Beacons.insert(beacons[i]);
        }
    }
});

