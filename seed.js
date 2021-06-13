const admin = require('firebase-admin');
admin.initializeApp();


const faker = require('faker');

const db = admin.firestore();
//Used to create 1 dimensional array of 2-3 interests for each document in db
const interests = [
    "Cooking",
    "Reading",
    "Music",
    "Watching Movies",
    "Fishing",
    "Hunting",
    "Gaming",
    "Art",
    "Hiking",
    "Swimming",
    "Sports",
    "Traveling",
    "Politics",
    "Programming",
    "Horticulture",
    "Tiktok",
    "Standup Comedy",
    "Yoga",
    "Exercising",
    "Camping",
    "Beekeeping",
    "Foraging for berries",
    "Bees",
    "Blacksmithing",
    "Biking",
    "Cycling",
    "Welding",
    "Underwater Welding",
    "Surfing",
    "DIY Repair",
    "Mixing all fountain drinks into one cup",
    "Hacking",
    "Studying Bird Law",
];
function fakeArray() {
    let fakelist = [];
    const randInterest = interests[Math.floor(Math.random() * interests.length)]
    let iterval = 2;
    //Decides whether user shall have two or 3 interests
    if (Math.random() >= 0.5) {
        iterval = 3;
    }
    //Create interest array for user
    for(let i = 0; i < iterval; i++) {
        fakelist.push(randInterest);
    }

    return fakelist;
}


const fakeIt = () => {
    const callfake = fakeArray();
    
    return db.collection('algo-index').add({
        username: faker.internet.userName(),
        avatar: faker.internet.avatar(),
        bio: faker.hacker.phrase(),
        list: fakeArray()
    });
}

fakeIt();