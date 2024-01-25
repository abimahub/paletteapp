import Color from 'colorjs.io';


    let r = Color.range("rebeccapurple", "gold");
    let stops = Color.steps(r, {steps: 10});
    let grad1 = document.querySelector(".col1").style.backgroundColor = `linear-gradient(to right, ${
        stops.map(c => c.display()).join(", ")
    })`;

let rpurp = new Color("rebeccapurple");
 let magenta = new Color("srgb", [1, 0, .4]);
 let indigo = new Color("hsl", [274.6,100,25.5]);

export {magenta, rpurp, grad1, indigo};