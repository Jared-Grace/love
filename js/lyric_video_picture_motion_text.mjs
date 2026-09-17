import { arguments_assert } from "./arguments_assert.mjs";
import { random_seed_generator_from_text } from "./random_seed_generator_from_text.mjs";
import { multiply } from "./multiply.mjs";
import { add } from "./add.mjs";
import { subtract } from "./subtract.mjs";
import { list_max } from "./list_max.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { number_round_places } from "./number_round_places.mjs";
import { divide } from "./divide.mjs";
import { math_max } from "./math_max.mjs";
export function lyric_video_picture_motion_text(
  picture,
  width,
  height,
  frames,
) {
  arguments_assert(arguments, 4);
  ("$plain picture");
  ("$plain width");
  ("$plain height");
  ("$plain frames");
  ("The part of a render instruction that moves one picture of a lyric video for as many frames as it is shown: two boxes the shape of the frame are chosen at random inside the picture, and what is seen travels smoothly from the first box to the second, so no picture sits completely still.");
  ("★ THE TWO BOXES ARE THE WHOLE IDEA, AND THEY WERE THE HUMAN'S. Each has a random size and a random place, and each lies wholly inside the picture, so every zoom and every pan there is - in, out, sideways, diagonally, or both at once - is just some pair of boxes, and nothing outside the picture can ever come into view. What stood here before chose a zoom and a pan direction separately and had to reason about how far the pan could go; the boxes make that reasoning unnecessary.");
  ("★ THE BOX IN BETWEEN STAYS INSIDE THE PICTURE TOO. Its corner moves in a straight line and its size changes by the same ratio every frame, so zooming looks steady instead of rushing at one end. A size changing by ratio is never larger than one changing by equal steps between the same two sizes, and a box with equal steps stays inside because both ends do - so the box actually used, being no larger, stays inside as well.");
  ("★ THE RANDOM CHOICES ARE KEYED TO THE PICTURE'S PATH, SO RENDERING THE SAME VIDEO AGAIN MOVES EVERY PICTURE THE SAME WAY. A picture whose motion somebody dislikes can then be named and dealt with, instead of changing every time it is looked at.");
  ("★ A SECOND BOX TOO CLOSE TO THE FIRST IS DRAWN AGAIN. Two boxes chosen at random can land almost on top of each other, and the picture would then sit still, which is the one thing this is for preventing. Some corner has to move by at least a tenth of the picture; the draws stay keyed to the path, so the redraw is as repeatable as the first.");
  ("A BOX IS BETWEEN HALF AND SEVENTEEN TWENTIETHS OF THE PICTURE ACROSS, so the closest view is at most twice as near as the whole and a picture is never zoomed until it turns to mush. The whole picture is never a box: the human watched boxes reaching all the way out and asked for more zoom overall.");
  ("★ THE BOX IS CUT BETWEEN PIXELS, NEVER ON THEM, AND THAT IS WHY THIS DOES NOT USE THE TOOL MADE FOR ZOOMING. That tool rounds the box's corner and its size to whole pixels separately, so a slow move becomes a run of small jumps and every few frames the two roundings disagree and the picture jerks back the other way. The human watched it and saw pulses that were not all the same direction. Measured on a black bar moving across 600 frames, 352 of the steps went backwards even with the picture enlarged twice first; cut between pixels, none did and every step was the same size to within a tenth of a pixel.");
  ("★ A PICTURE MAY NAME ITS OWN TWO BOXES, AND THEN THOSE ARE USED INSTEAD OF THE RANDOM ONES. Some pictures carry a motion of their own meaning: the human asked for the torn temple curtain to travel from top to bottom, the way the curtain was torn. The document holds it as motion with a from box and a to box, each a size, an x and a y given as parts of the picture, exactly the shape the random boxes have. The random boxes are still drawn first, so choosing a motion for one picture leaves every other picture's draws where they were.");
  ("THE PICTURE IS NOT ENLARGED BEFORE IT IS MOVED. Enlarging was only ever a way to make the whole-pixel steps smaller, and cutting between pixels makes them vanish instead; measured, the enlarged and the plain version moved equally smoothly and the plain one took a quarter of the time. The pictures are drawn at the size of the frame, so enlarging added no detail either.");
  ("It is fitted and padded with nothing into the frame first, exactly as a still picture is fitted, so a picture of another shape keeps a see-through margin rather than being stretched. It is then repeated once for every frame it is shown, because the tool that cuts between pixels moves frames that already exist rather than making them.");
  let next = random_seed_generator_from_text(picture.path);
  next();
  next();
  function box() {
    let left = next();
    let right = multiply(left, 0.35);
    let size = add(0.5, right);
    let room = subtract(1, size);
    let left2 = next();
    let x = multiply(left2, room);
    let left3 = next();
    let y = multiply(left3, room);
    let b = {
      size,
      x,
      y,
    };
    return b;
  }
  function moved(a, b) {
    let grown = subtract(b.size, a.size);
    let difference = subtract(b.x, a.x);
    let difference2 = subtract(b.y, a.y);
    let left4 = subtract(b.x, a.x);
    let sum = add(left4, grown);
    let left5 = subtract(b.y, a.y);
    let sum2 = add(left5, grown);
    let changes = [difference, difference2, sum, sum2];
    let sizes = changes.map(Math.abs);
    let largest = list_max(sizes);
    return largest;
  }
  let first = box();
  let second = box();
  while (less_than(moved(first, second), 0.1)) {
    second = box();
  }
  let authored = picture.motion;
  let b2 = equal(authored, undefined);
  if (not(b2)) {
    first = authored.from;
    second = authored.to;
  }
  let size_from = number_round_places(first.size, 4);
  let value = divide(second.size, first.size);
  let ratio = number_round_places(value, 4);
  let x_from = number_round_places(first.x, 4);
  let value3 = subtract(second.x, first.x);
  let x_change = number_round_places(value3, 4);
  let y_from = number_round_places(first.y, 4);
  let value4 = subtract(second.y, first.y);
  let y_change = number_round_places(value4, 4);
  let a2 = subtract(frames, 1);
  let last = math_max(a2, 1);
  let frame = width + ":" + height;
  let t = "(in/" + last + ")";
  let box_size = "(" + size_from + "*pow(" + ratio + "," + t + "))";
  let box_left = "W*(" + x_from + "+" + x_change + "*" + t + ")";
  let box_right =
    "W*(" + x_from + "+" + x_change + "*" + t + "+" + box_size + ")";
  let box_top = "H*(" + y_from + "+" + y_change + "*" + t + ")";
  let box_bottom =
    "H*(" + y_from + "+" + y_change + "*" + t + "+" + box_size + ")";
  let text =
    ",scale=" +
    frame +
    ":force_original_aspect_ratio=decrease:flags=lanczos,format=yuva420p,pad=" +
    frame +
    ":(ow-iw)/2:(oh-ih)/2:color=black@0,loop=loop=" +
    subtract(frames, 1) +
    ":size=1,perspective=x0='" +
    box_left +
    "':y0='" +
    box_top +
    "':x1='" +
    box_right +
    "':y1='" +
    box_top +
    "':x2='" +
    box_left +
    "':y2='" +
    box_bottom +
    "':x3='" +
    box_right +
    "':y3='" +
    box_bottom +
    "':interpolation=cubic:eval=frame";
  return text;
}
