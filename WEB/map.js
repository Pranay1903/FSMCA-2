const person = new Map([['name', 'Pranay']]);

person.set('age', 21);
person.set('profession', 'Software Developer');

console.log(person.get('name'));
console.log(person.get('age'));

console.log(typeof person)

console.log(person instanceof Map);


console.log(person.size);

console.log(person.has('name'))


let text = "";
person.forEach(function (value, key) {
    text += " " + key + ' = ' + value;
})
console.log(text)

text = "";
for (const x of person.entries()) {
    text += " " + x;
}
console.log(text)

text = "";
for (const x of person.keys()) {
    text +=" " + x;
}

text = "";
for (const x of person.keys()) {
  text += " " + x;
}