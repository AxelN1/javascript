
console.log(process.argv);

var args = process.argv.slice(2);
console.log('arguments : ', args);

console.log(process.argv[2] + process.argv[2]); // retournera '11'

console.log(parseInt(process.argv[2]) + parseInt(process.argv[2])); // retournera 2