import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { random_seed_generator_from_text } from "./random_seed_generator_from_text.mjs";
import { add } from "./add.mjs";
import { multiply } from "./multiply.mjs";
import { subtract } from "./subtract.mjs";
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
  ("The part of a render instruction that moves one picture of a lyric video for as many frames as it is shown: a slow zoom in or out and a slow pan in one direction at the same time, both chosen at random, so no picture sits completely still.");
  ("★ THE RANDOM CHOICES ARE KEYED TO THE PICTURE'S PATH, SO RENDERING THE SAME VIDEO AGAIN MOVES EVERY PICTURE THE SAME WAY. A picture whose motion somebody dislikes can then be named and dealt with, instead of changing every time it is looked at.");
  ("★ THE PAN NEVER RUNS PAST THE EDGE OF THE PICTURE. The zoom is never below its smaller end, and at that zoom the picture already reaches past the frame by a known share on every side - the pan travels at most that share, split evenly either side of the middle, so whatever the direction the frame stays inside the picture and nothing black is dragged in from outside it.");
  ("★ ZOOMING IN CUTS THE EDGES OFF, WHICH THE STILL PICTURES NEVER DID. Asked for, not stumbled into: the human watched a moving test and asked for more zoom and more pan, at least sometimes. The zoom is squared toward its small end, so most pictures move gently and a few move a lot.");
  ("THE PICTURE IS ENLARGED TWICE OVER BEFORE IT IS MOVED. The tool that moves it places the cut on whole pixels, and a cut stepping a whole pixel of the finished frame at a time is seen as a shudder; on a picture twice the size each step is half a pixel of the finished frame, which reads as smooth.");
  ("It is fitted and padded with nothing into the enlarged frame first, exactly as a still picture is fitted, so a picture of another shape keeps a see-through margin rather than being stretched.");
  let next = random_seed_generator_from_text(picture.path);
  next();
  next();
  let left = next();
  let right = multiply(left, 0.2);
  let zoom_small = add(1.05, right);
  let r = next();
  let left2 = multiply(r, r);
  let right2 = multiply(left2, 0.4);
  let zoom_extra = add(0.05, right2);
  let zoom_large = add(zoom_small, zoom_extra);
  let a = next();
  let inward = less_than(a, 0.5);
  let zoom_from = inward ? zoom_small : zoom_large;
  let zoom_to = inward ? zoom_large : zoom_small;
  let left3 = next();
  let right3 = multiply(2, Math.PI);
  let angle = multiply(left3, right3);
  let left4 = next();
  let right4 = multiply(left4, 0.7);
  let share = add(0.3, right4);
  let right5 = divide(1, zoom_small);
  let room = subtract(1, right5);
  let travel = multiply(share, room);
  let left5 = Math.cos(angle);
  let value = multiply(left5, travel);
  let across = number_round_places(value, 4);
  let left6 = Math.sin(angle);
  let value2 = multiply(left6, travel);
  let down = number_round_places(value2, 4);
  let from = number_round_places(zoom_from, 4);
  let value3 = subtract(zoom_to, zoom_from);
  let change = number_round_places(value3, 4);
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
    from +
    "+" +
    change +
    "*" +
    t +
    "':x='iw/2-iw/zoom/2+iw*" +
    across +
    "*(" +
    t +
    "-0.5)':y='ih/2-ih/zoom/2+ih*" +
    down +
    "*(" +
    t +
    "-0.5)':d=" +
    frames +
    ":s=" +
    width +
    "x" +
    height +
    ":fps=" +
    lyric_video_frames_per_second();
  return text;
}
