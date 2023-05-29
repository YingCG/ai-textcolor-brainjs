const net = new brain.NeuralNetwork();

// net.train([
//   {
//     input: [0, 0],
//     output: [0],
//   },
//   {
//     input: [1, 0],
//     output: [1],
//   },
//   {
//     input: [0, 1],
//     output: [1],
//   },
//   {
//     input: [1, 1],
//     output: [0],
//   },
// ]);

// const diagram = document.getElementById("diagram");
// diagram.innerHTML = brain.utilities.toSVG(net);

// // console.log(net.run([1, 1]));
// console.log(net.run({ r: 1, g: 0.5, b: 0 }));

const data = [
  {
    // usually colour is 0 to 255, but neural network usually work best to get value between 0 and 1
    input: { r: 0, g: 0, b: 0 } /* white */,
    output: [1],
  },
  {
    input: { r: 1, g: 1, b: 1 } /* black */,
    output: [0],
  },
];

net.train(data);

const colorElement = document.getElementById("color");
const guessElement = document.getElementById("guess");
const whiteButton = document.getElementById("white-button");
const blackButton = document.getElementById("black-button");
const printButton = document.getElementById("print-button");

let color;
setRamdomColor();

whiteButton.addEventListener("click", () => {
  chooseColor(1);
});
blackButton.addEventListener("click", () => {
  chooseColor(0);
});

function chooseColor(value) {
  data.push({
    input: color,
    output: [value],
  });
  setRamdomColor();
}

function setRamdomColor() {
  color = {
    r: Math.random(),
    g: Math.random(),
    b: Math.random(),
  };

  const guess = net.run(color)[0];
  console.log(guess);
  guessElement.style.color = guess > 0.4 ? "#fff" : "#000";

  colorElement.style.backgroundColor = `rgba(${color.r * 255}, ${
    color.g * 255
  }, ${color.b * 255})`;
}
