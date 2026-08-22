export function bless_step_timing() {
  "The shape of one person's step across a tile: pushing off quickly, carrying, and";
  "easing down as they arrive - so the crowd rises and falls rather than gliding.";
  "A step now lasts the whole wait before the next one, which is what stopped the crowd";
  "looking like it moved in jerks. Crossing at an EVEN rate, though, the fix went one";
  "step too far the other way: a person who never speeds up and never slows down is not";
  "walking either, they are being slid across a board, and the slower they were given the";
  "more obviously it showed.";
  "So the rate rises and falls inside every single tile. Because one step's slide runs";
  "straight into the next one's, what the eye follows is a repeating swell - quick, ease,";
  "quick, ease - which is a walking rhythm arrived at without ever drawing a leg.";
  "The push is faster than the landing rather than the two being mirror images. A foot";
  "leaves the ground sharply and comes down softly, and a curve that eased in and out";
  "equally reads as floating; the shape here is nearly all of the way to the tile in the";
  "first half of the time, and settling for the rest.";
  let timing = "cubic-bezier(0.2, 0.85, 0.45, 1)";
  return timing;
}
