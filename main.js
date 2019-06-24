console.log('working');
let obj = {
    name: "Jon Doe",
    age: 24,
    title: "Mr."
}

for ( let foo in obj) {
    console.log('For-in keys:', foo);
}
for ( let foo in obj) {
    console.log('For-in key&values:', obj[foo]);
}

for ( let foo of Object.values(obj)) {
    console.log('For-of values:',foo);
}
for ( let foo of Object.keys(obj)) {
    console.log('For-of keys:', foo);
}
for ( let foo of Object.entries(obj)) {
    console.log('For-of entries:', foo);
}