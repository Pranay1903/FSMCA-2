const skills = new Set(['JavaScript', 'HTML', 'CSS']);

skills.add('React');
skills.add('Node.js');
skills.add('JavaScript');//this will not added again 

console.log('Size of set', skills.size);

console.log(skills.has('JavaScript')); //true because it is there
console.log(skills.has('Python'));  // false


let text = "";
for (const value of skills) {
    text += `${value}\n`;
}
console.log(text);

skills.delete('CSS');
console.log('after deleting', skills);

skills.clear();
console.log('after clearing:', skills);
