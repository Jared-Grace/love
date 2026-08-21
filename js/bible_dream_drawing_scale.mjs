export function bible_dream_drawing_scale() {
  "How many screen pixels one unit of a dream drawing wants at least.";
  "★ IT IS A LEAST AND NOT A SIZE. The drawing still fills whatever width it is given; this only says how small it is allowed to get before the page starts scrolling sideways instead of shrinking any further. On a wide screen it never applies at all.";
  "Seven cows in a row is a width the passage fixes and not a layout choice, because GEN41:26 makes the count the meaning. So a window narrower than seven readable cows has to give up something, and the thing to give up is seeing the whole row at once. A cow shrunk to a fingertip has bumps too small for any ornament to answer, which means the shrinking silently deletes work that is already built and working.";
  "The cost is real and is written here so it is not discovered as a bug: on a narrow window the page scrolls sideways, so a row of seven is read by scrolling along it rather than by looking at it. If that turns out to grate, the next thing to try is a separate strip per row, each scrolling on its own, which keeps the page scrolling only downwards.";
  let r = 1.6;
  return r;
}
