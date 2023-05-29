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
  { input: { r: 0, g: 0, b: 0 }, output: [1] },
  { input: { r: 1, g: 1, b: 1 }, output: [0] },
  {
    input: { r: 0.1392152182977, g: 0.6732364775529724, b: 0.9501013144676105 },
    output: [0],
  },
  {
    input: {
      r: 0.18294327785700903,
      g: 0.11389312183927824,
      b: 0.09448017730486513,
    },
    output: [1],
  },
  {
    input: {
      r: 0.6422627723888188,
      g: 0.7831905429411417,
      b: 0.7917770923334675,
    },
    output: [0],
  },
  {
    input: {
      r: 0.5157451065189631,
      g: 0.9091124115757938,
      b: 0.48629523103890904,
    },
    output: [0],
  },
  {
    input: {
      r: 0.5928242220640034,
      g: 0.4225513374306815,
      b: 0.9070464465099288,
    },
    output: [1],
  },
  {
    input: {
      r: 0.9406090326736201,
      g: 0.44366543433705163,
      b: 0.8995093587321907,
    },
    output: [1],
  },
  {
    input: {
      r: 0.09761137477372595,
      g: 0.493866503626631,
      b: 0.7538998901957257,
    },
    output: [1],
  },
  {
    input: {
      r: 0.009843556248315233,
      g: 0.9452089311159384,
      b: 0.8950779542201466,
    },
    output: [0],
  },
  {
    input: {
      r: 0.2760055449082637,
      g: 0.2500526772505125,
      b: 0.9551280672466884,
    },
    output: [1],
  },
  {
    input: {
      r: 0.6391306031118549,
      g: 0.23576562631635567,
      b: 0.9932897545172765,
    },
    output: [1],
  },
  {
    input: {
      r: 0.3704670205580818,
      g: 0.03401036940777358,
      b: 0.6498050616278215,
    },
    output: [1],
  },
  {
    input: {
      r: 0.4040221914198161,
      g: 0.2136677464130592,
      b: 0.7119330054229587,
    },
    output: [1],
  },
  {
    input: {
      r: 0.7980995535105031,
      g: 0.13482693982454097,
      b: 0.2616036740005687,
    },
    output: [1],
  },
  {
    input: {
      r: 0.2993924826600789,
      g: 0.5120680990119917,
      b: 0.7684761337161821,
    },
    output: [1],
  },
  {
    input: {
      r: 0.13614957289006302,
      g: 0.9639777022660336,
      b: 0.7048337908674547,
    },
    output: [0],
  },
  {
    input: {
      r: 0.7042430596805391,
      g: 0.5506768882615918,
      b: 0.2429237395994086,
    },
    output: [1],
  },
  {
    input: {
      r: 0.5025845344045574,
      g: 0.24058345906342327,
      b: 0.4808751075279287,
    },
    output: [1],
  },
  {
    input: {
      r: 0.0787496951608293,
      g: 0.5445743670486498,
      b: 0.3535246577831783,
    },
    output: [1],
  },
  {
    input: {
      r: 0.8589392947227785,
      g: 0.8256249810793699,
      b: 0.038625002540433995,
    },
    output: [0],
  },
  {
    input: {
      r: 0.7006799475654131,
      g: 0.7801668034040385,
      b: 0.23964849568324786,
    },
    output: [0],
  },
  {
    input: {
      r: 0.758727696191495,
      g: 0.3087696658505479,
      b: 0.8246294698525469,
    },
    output: [1],
  },
  {
    input: {
      r: 0.3095254689327209,
      g: 0.10003954439089613,
      b: 0.9074761564576086,
    },
    output: [1],
  },
  {
    input: {
      r: 0.038744445961507834,
      g: 0.07773255666924461,
      b: 0.30642501473758244,
    },
    output: [1],
  },
  {
    input: {
      r: 0.9757014086065314,
      g: 0.7051955476375014,
      b: 0.621662357074956,
    },
    output: [0],
  },
  {
    input: {
      r: 0.5450130254741699,
      g: 0.7097464357816663,
      b: 0.44472841170079147,
    },
    output: [0],
  },
  {
    input: {
      r: 0.23227024037285582,
      g: 0.406243703007962,
      b: 0.773656559423989,
    },
    output: [1],
  },
  {
    input: {
      r: 0.292733659504012,
      g: 0.21232017625169397,
      b: 0.4196741691665751,
    },
    output: [1],
  },
  {
    input: {
      r: 0.19187348157704065,
      g: 0.8484810009967614,
      b: 0.7244497916497987,
    },
    output: [0],
  },
  {
    input: {
      r: 0.6410519798961056,
      g: 0.27831725511659755,
      b: 0.10038280235114372,
    },
    output: [1],
  },
  {
    input: {
      r: 0.6752779420099833,
      g: 0.07087822597695315,
      b: 0.012633531241111884,
    },
    output: [1],
  },
  {
    input: {
      r: 0.6077709843085135,
      g: 0.869071039760787,
      b: 0.25311160327395976,
    },
    output: [0],
  },
  {
    input: {
      r: 0.6829707847937219,
      g: 0.11088001099067424,
      b: 0.47770497621794505,
    },
    output: [1],
  },
  {
    input: {
      r: 0.15621689047402731,
      g: 0.6585539528784363,
      b: 0.056786359234848316,
    },
    output: [1],
  },
  {
    input: {
      r: 0.8658304790591491,
      g: 0.06833002079093697,
      b: 0.49988111254299716,
    },
    output: [1],
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
printButton.addEventListener("click", print);
function chooseColor(value) {
  data.push({
    input: color,
    output: [value],
  });
  setRamdomColor();
}

function print() {
  console.log(JSON.stringify(data));
}

function setRamdomColor() {
  color = {
    r: Math.random(),
    g: Math.random(),
    b: Math.random(),
  };

  const guess = net.run(color)[0];
  // console.log(guess);
  guessElement.style.color = guess > 0.45 ? "#fff" : "#000";

  colorElement.style.backgroundColor = `rgba(${color.r * 255}, ${
    color.g * 255
  }, ${color.b * 255})`;
}
