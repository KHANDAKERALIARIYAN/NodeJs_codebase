// import { isUtf8 } from 'buffer';
// import fs from 'fs';

// readFile() - callback 

// fs.readFile('test.txt', 'utf8' ,(err, data) => {
//     if(err) throw err;
//     console.log(data);
// });

// readFileSync() - synchronous

// const data=fs.readFileSync('./test.txt', 'utf8');
// console.log(data);

// readFile() - promise.then()

// import fs from 'fs/promises';
// fs.readFile('./test.txt', 'utf8')
// .then((data) => console.log(data))
// .catch((err) => console.log(err));
// readFile();

// readFile() - async await

// import fs from 'fs/promises';
// const readFile=async () => {
//     try {
//         const data=await fs.readFileSync('./test.txt', 'utf8');
//         console.log(data);
//     } catch (error) {
//         console.log(error);        
//     }
// };


// writeFile()

// import fs from 'fs/promises';
// const writeFile=async () => {
//     try {
//         await fs.writeFile('./test.txt', 'Hello , I am Ariyan');
//         console.log('File written successfully ...');
//     } catch (error) {
//         console.log(error);        
//     }
// };
// writeFile();

// appendFile()

// const appendFile=async () => {
//     try {
//         await fs.appendFile('./test.txt', '\nHello , I am Ariyan');
//         console.log('File appended successfully ...');
//     } catch (error) {
//         console.log(error);        
//     }
// }
// appendFile();