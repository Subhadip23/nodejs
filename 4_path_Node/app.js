const path = require('path');

console.log(path.dirname('C:/Users/subhadmo/OneDrive - Capgemini/Desktop/Node/4_path_Node/app.js'));
console.log(path.extname('C:/Users/subhadmo/OneDrive - Capgemini/Desktop/Node/4_path_Node/app.js'));
console.log(path.basename('C:/Users/subhadmo/OneDrive - Capgemini/Desktop/Node/4_path_Node/app.js'));
console.log(path.parse('C:/Users/subhadmo/OneDrive - Capgemini/Desktop/Node/4_path_Node/app.js'));

const myPath=path.parse('C:/Users/subhadmo/OneDrive - Capgemini/Desktop/Node/4_path_Node/app.js');
console.log(myPath.name);