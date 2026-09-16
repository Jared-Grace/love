import { arguments_assert } from "./arguments_assert.mjs";
import { random_seed_generator_from_text } from "./random_seed_generator_from_text.mjs";
import { multiply } from "./multiply.mjs";
import { add } from "./add.mjs";
import { subtract } from "./subtract.mjs";
import { list_max } from "./list_max.mjs";
import { less_than } from "./less_than.mjs";
import { divide } from "./divide.mjs";
import { number_round_places } from "./number_round_places.mjs";
import { math_max } from "./math_max.mjs";
import { lyric_video_frames_per_second } from "./lyric_video_frames_per_second.mjs";
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
  ("THE PICTURE IS ENLARGED TWICE OVER BEFORE IT IS MOVED. The tool that moves it places the cut on whole pixels, and a cut stepping a whole pixel of the finished frame at a time is seen as a shudder; on a picture twice the size each step is half a pixel of the finished frame, which reads as smooth.");
  ("It is fitted and padded with nothing into the enlarged frame first, exactly as a still picture is fitted, so a picture of another shape keeps a see-through margin rather than being stretched.");
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
  let value = divide(1, first.size);
  let zoom_from = number_round_places(value, 4);
  let value2 = divide(first.size, second.size);
  let ratio = number_round_places(value2, 4);
  let x_from = number_round_places(first.x, 4);
  let value3 = subtract(second.x, first.x);
  let x_change = number_round_places(value3, 4);
  let y_from = number_round_places(first.y, 4);
  let value4 = subtract(second.y, first.y);
  let y_change = number_round_places(value4, 4);
  let a2 = subtract(frames, 1);
  let last = math_max(a2, 1);
  let big_width = multiply(width, 2);
  let big_height = multiply(height, 2);
  let big = big_width + ":" + big_height;
  let t = "(on/" + last + ")";
  let text =
    ",scale=" +
    big +
    ":force_original_aspect_ratio=decrease:flags=lanczos,format=yuva420p,pad=" +
    big +
    ":(ow-iw)/2:(oh-ih)/2:color=black@0,zoompan=z='" +
    zoom_from +
    "*pow(" +
    ratio +
    "," +
    t +
    ")':x='iw*(" +
    x_from +
    "+" +
    x_change +
    "*" +
    t +
    ")':y='ih*(" +
    y_from +
    "+" +
    y_change +
    "*" +
    t +
    ")':d=" +
    frames +
    ":s=" +
    width +
    "x" +
    height +
    ":fps=" +
    lyric_video_frames_per_second();
  return text;
}
