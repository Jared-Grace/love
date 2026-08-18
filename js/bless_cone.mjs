export function bless_cone(x, y, direction, depth) {
  "Where the player is looking, over the tile grid - the tile they stand on, the way they";
  "face, and how far ahead they can make a face out.";
  "This is the 2-D answer to what a 3-D first person camera gives for free. Aiming the";
  "eyes is this game's whole verb, so a 2-D view keeps a facing and a cone rather than";
  "showing everything around the player at once - lose the facing and the game stops being";
  "first person and stops being an inversion of the shooter.";
  "The direction is one of the four the characters are drawn facing, so it is the same";
  "vocabulary the art already uses.";
  let cone = { x: x, y: y, direction: direction, depth: depth };
  return cone;
}
