const os = require('os')

console.log(os.platform())  //will print the platform, machine and home directory name
console.log(os.machine())
console.log(os.homedir())

console.log(os.freemem())  //will print the free memory size

console.log(os.cpus())  //will show details of every CPU Cores