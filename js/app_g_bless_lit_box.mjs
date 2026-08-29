import { arguments_assert } from "./arguments_assert.mjs";
import { tiles_sides } from "./tiles_sides.mjs";
import { sides_middle_point } from "./sides_middle_point.mjs";
import { property_get } from "./property_get.mjs";
import { subtract } from "./subtract.mjs";
import { add } from "./add.mjs";
import { list_max } from "./list_max.mjs";
export function app_g_bless_lit_box(tiles) {
  arguments_assert(arguments, 1);
  ("The smallest box that holds a patch of ground: where its middle is, and how many");
  ("squares across the wider of its two sides is.");
  ("Both answers come from the same four numbers, so they are read together rather than");
  ("twice. The middle is what the camera is pointed at and the width is how big a light");
  ("has to be to cover the patch, and a light sized from a middle worked out separately");
  ("could drift off the very thing it is lighting.");
  ("The middle of the BOX and not the average of the squares, and the two differ the");
  ("moment the patch is not a rectangle. A building finished by its last household is a");
  ("wide block of ground with one strip of it counted three times, and an average would be");
  ("dragged towards that strip - so the camera would stop with the thing it came to show");
  ("sitting off to one side. The box has no such lean: it is decided by the far edges and");
  ("by nothing in between.");
  ("The middle may fall between two squares, which is what a patch an even number across");
  ("needs. Rounded to a whole square the picture would sit half a square off centre, and");
  ("on a phone that is a noticeable part of the screen.");
  ("The wider side rather than each side on its own, because what this is measuring for is");
  ("round. A circle wide enough for the long way is wide enough for the short way as well,");
  ("and one that split the difference would leave the ends of a long thin house dark.");
  let sides = tiles_sides(tiles);
  let middle = sides_middle_point(sides);
  let left = property_get(sides, "left");
  let right = property_get(sides, "right");
  let top = property_get(sides, "top");
  let bottom = property_get(sides, "bottom");
  let wide = subtract(right, left);
  let across = add(wide, 1);
  let tall = subtract(bottom, top);
  let down = add(tall, 1);
  let span = list_max([across, down]);
  let box = {
    middle,
    span,
  };
  return box;
}
