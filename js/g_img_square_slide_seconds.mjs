export function g_img_square_slide_seconds() {
  "how long a square takes to slide from one tile to the next, in seconds";
  "it is a plain number rather than a word of css because two different things need it - the style that does the sliding, and anybody waiting for a slide to be finished before doing something that only makes sense at rest";
  let seconds = 0.15;
  return seconds;
}
