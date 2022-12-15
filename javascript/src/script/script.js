
//For ციკლი
// for([მრიცხველის ინიციალიზაცია]; [პირობა] [ მრიცხველის შეცვნა]){
//     მოქმედებეი
// }

// var people = ["Tom", "Alice", "Bob","Sam",];

// for(var i = 0; i < people.length; i++){
//     console.log(people[i])
// }
// for .. in ციკლი

// for (ინდექსი in მასივი) {
//     მოქმედებები
// }

// var people = ["Tom", "Alice", "Bob","Sam",];

// for (var index in people) {
//     console.log(people[index])
// }

// While ციკლი

// while (პირობა){
//     მოქმედებები
// }

var people = ["Tom", "Alice", "Bob","Sam",];
var index = 0;

while (index < people.length){
    console.log(people[index],[index])
    index++;
}

// function display() {
//     document.write("Hello world")
//   }
// display()

// function goodMorning() {
//     document.write("good morning")
//   }

//   function goodEvning() {
//     document.write("good night")
//   }

//   var message = goodEvning
//   message();

// function display(x,y) {
//     if( y === undefined) y=x;
//     var z = x * y;
//     console.log(z)
//   }

// display(6) //36

// display(6 ,4) //24


// function display() {
//     var z = 1;
//     for (var i = 0; i<arguments.length; i++) 
//     z = arguments[i]
//     console.log(z)
//   }
//   display(6)
//   display(6,4,5)


function display(x, func) { 
    var message = func(x);
    document.write(message)
 }

function welcomeMessage (time){
    if (time < 12)
    return "good morning"
    else
    return "good evning"
}


