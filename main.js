function preload() {
}

function setup() {
    canvas = createCanvas(450, 400);
    canvas.center;
}

function draw() {
    circle(320, 190, 70);
    describe('A white circle with black outline in the middle of a grey canvas');

    ellipse(420, 190, 55, 100);
    describe('A white ellipse with black outline in middle of a gray canvas');
    
    rect(30, 20, 55, 55);
describe('A white rectangle with a black outline on a gray canvas.');

rect(30, 20, 55, 55, 20);
describe('A white rectangle with a black outline and round edges on a gray canvas.'
);
}

function take_snapshot(){
    save('myFilterImage.png');
}

function createCanvas(){
    
    }
