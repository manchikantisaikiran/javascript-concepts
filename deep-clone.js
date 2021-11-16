const profile = {
    name:'abcd',
    age:3242,
    place:'adsada',
    address:{
        state:'AP',
        country:'india'
    }
}

//clone
const profile1 = profile;

//deep clone
const profile2 = JSON.parse(JSON.stringify(profile));

profile1.name = "sai";
profile1.address.state = 'Delhi'

profile2.name = "sai kiran";
profile2.address.state = 'punjab'

console.log('profile = ',profile);
console.log('profile1 = ',profile1);
console.log('profile2 = ',profile2);
