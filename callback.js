function displayer(something) {
  return something;
}

function calculator (number1, number2, myCallback){
  let result = number1+number2;
  console.log(myCallback(result));
}

calculator (5,5,displayer);


function greet() {
  console.log("Hello World");
}

function sayName(name) {
  console.log("Hello" + " " + name);
}

setTimeout(greet, 2000);
sayName("David");

callSayName(sayName, "John");
callSayName(greet);

  function callSayName(callback, name=""){
    callback();
  }
