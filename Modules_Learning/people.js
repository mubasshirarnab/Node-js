const people = ["Shakib", "Tamim"]

var a = 10;

function test(){
    console.log("Test")
}

// module.exports = people

module.exports = {
    people,
    a,
    test,
};

console.log(module)