// .call() is a method of function
var owen = {
    name: "Owen"
}

function sayTo(person, first, second) {
    return first + " " + person.name + " " + second;
}
sayTo(owen, "Hi", "how are you?");
// returns "Hi Owen how are you?"




// what if sayTo was defined a little differently?

var owen = {
    name: "Owen"
}
function sayTo(first, second) {
    console.log(this);
    return first + " " + this.name + " " + second;
}
sayTo(owen, "Hi", "how are you?");
// returns "[Object] undefined Hi"



// using .call() forces the value in this in whichever function it is applied to. 
var owen = {
    name: "Owen"
}
function sayTo(first, second) {
    console.log(this);
    return first + " " + this.name + " " + second;
}
sayTo.call(owen, "Hi", "how are you?");
// this is now the owen object
// returns "Hi Owen how are you?"
