//  hello guys this will be for javascript project
// //javascript is a dynamic programming language that is used to create small tasks
// //so we will see how to create an output using javascript
// console.log("hello world!")
// //this shows the output hello world that is declared on the console and saved to the log
// //*variable*//
// var number = 25;
// var myName = "leul";
// myName = 8

// console.log(number)
// let ourName = "zerox"

// const pi = 3.14

// var a;
// var b = 2;
// // b = a
// console.log(b)
// var person = {
//     id: 1,
//     name: "henok",
//     age:21,
//    func: function() {
//         switch(this.age){
//             case age >= 21:
//                 console.log(true);
//                 break;
//             case age <= 21:
//                 console.log    
//         }
//    }
// }


// create 


setInterval(() => {
    var upto = 100
    var rand = Math.floor(Math.random()*upto);
    var dis = (num) => {
        if(num % 2 === 0){
            return "even"
        }
        return "odd"
    }
    console.log(rand)
    console.log(dis(rand))

}, 5000);