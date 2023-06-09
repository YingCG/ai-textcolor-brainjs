const net = new brain.NeuralNetwork({ hiddenLayers: [4, 5, 6] });

net.train([
  {
    input: [0, 0],
    output: [0],
  },
  {
    input: [1, 0],
    output: [1],
  },
  {
    input: [0, 1],
    output: [1],
  },
  {
    input: [1, 1],
    output: [0],
  },
]);
const diagram = document.getElementById("diagram");
diagram.innerHTML = brain.utilities.toSVG(net);
