//1: Create a folder name it Subhadip
//2: Create a file in it name subha.txt and add data into it
//3: Add more data into the file at the end of the existing data 
//4: Read the the data without getting the buffer data at first
//5: Rename the file name to dip.txt
//6: now delete both the file and the folder


const fs=require('fs');
// fs.mkdirSync('Subhadip')//make directory
fs.writeFileSync('./Subhadip/dip.txt',"I am a good Boy");
fs.appendFileSync('./Subhadip/dip.txt','Good Morning');
console.log(fs.readFileSync('./Subhadip/dip.txt','utf8'))
fs.renameSync('./Subhadip/subha.txt','./Subhadip/dip.txt')
// fs.unlinkSync('./Subhadip/dip.txt')//-->file delete
//fs.rmkdirSync('Subhadip') //-->folder delete