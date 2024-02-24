/* 

JSON Stands for javaScript Object Notation.
JSON is a lightWeight
format for storing and transporting data.
JSON is often used when data is sent from a server to a web page.

stringify() : JavaScript object and then transforms it into a JSON string. 
JSON.parse(): JSON string and then transforms it into a JavaScript object.

*/

////////////////////////////////
// const bioData = {
//     name: 'subhadip',
//     age: '23',
//     company: 'Google'
// };
// const jsonData = JSON.stringify(bioData);
// console.log(jsonData);

// const objData = JSON.parse(jsonData);
// console.log(objData);

////////////////////////////////


const fs =require('fs');
const bio = {
    name: 'subhadip',
    age: '23',
    company: 'Google'
};

//step 1 : convert to JSON
//step 2 : file add using fs
//step 3 : readfile
//step 4 : again convert back to js Obj original

const jsontoObj=JSON.stringify(bio);
//step 1 and  step 2 done
// fs.writeFile("jsonfile.json",jsontoObj,(err)=>{
//     console.log('done');
// });

fs.readFile('jsonfile.json','utf-8',(err,data)=>{
    const orgData=JSON.parse(data);
    console.log(data);
    console.log(orgData)
})