const data = [];

let resultInt = parseInt(prompt("Enter an integer"));

//create an array of digits 0 through 10
for (let x = 0; x < 10; x++) {
  data.push(x);
}

var operators = [
  [
    function(x, y) {
      return x + y;
    },
    "+"
  ],
  [
    function(x, y) {
      return x - y;
    },
    "-"
  ],
  [
    function(x, y) {
      return x * y;
    },
    "*"
  ],
  [
    function(x, y) {
      return x / y;
    },
    "/"
  ]
];
let result;
for (let i = 0; i < data.length; i++) {
  for (let j = 0; j < operators.length; j++) {
    for (let k = 0; k < operators.length; k++) {
      result = operators[j][0](operators[k][0](data[i], data[i]), data[i]);

      // if result was found before finding square root of entire equation
      if (result === resultInt) {
        document.write(
          `${data[i]} ${operators[j][1]} ${data[i]} ${operators[k][1]} ${
            data[i]
          } = ${result}`
        );
        document.write("<br>");
      }
    }
  }
}

function factorial(x) {
  if (Number.isInteger(x)) {
    if (x === 0 || x === 1) {
      return 1;
    } else {
      return x * factorial(x - 1);
    }
  } else {
    return -1;
  }
}
