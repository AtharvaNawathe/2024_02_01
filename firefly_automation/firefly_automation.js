/**
 * Firefly program where a Firefly is trapped inside a layout of height 50 and width 30.
 * The '*' should move in any 9 directions but should not go outside of the layout.
 * The initial position of the star can be random.
 */

const Width = 50;
const Height = 30;

// Initialize the layout box with empty spaces
const box = Array.from({ length: Height }, () => Array(Width).fill(" "));
let X = 25;

/**
 * Draws the layout with the star at its current position.
 */
function draw() {
  console.log("+" + "-".repeat(Width) + "+");

  for (let row = 0; row < Height; row++) {
    console.log("|" + box[row].join("") + "|");
  }

  console.log("+" + "-".repeat(Width) + "+");
}

/**
 * Moves the star within the layout.
 * The star is removed from the current position, and its new position is updated.
 */
function moveStar() {
  box[Height - 15][X] = " ";

  X = (X + 1) % Width;

  box[Height - 15][X] = "*";
}

/**
 * Animates the movement of the star within the layout.
 */
function animate() {
  moveStar();
  draw();

  setTimeout(animate, 2000);
}

// Set the initial position of the star in the layout
box[Height - 15][X] = "*";

// Start the animation
animate();
