export function bible_dream_corridor_width() {
  "How wide the faint corridor around a stroke is drawn, in the drawing's own units.";
  "★ IT IS A FRACTION OF THE SHAPE AND NOT A NUMBER OF PIXELS, WHICH IS WHY MAKING THE PICTURE BIGGER IS A REAL IMPROVEMENT AND NOT ONLY A NICER ONE. Everything here is measured in the drawing's units, so a corridor is always the same share of a cow however large the cow is drawn. Shrinking it makes the tracing finer against the shape; drawing the shape larger makes the same corridor wider against a fingertip. Doing both at once is the only way to get a trace that is both demanding and reachable, and neither alone can.";
  "It is here rather than written where the corridor is drawn because what a trace is allowed to stray is derived from it. Two numbers, one saying how wide the corridor looks and one saying how far off the line counts as off it, can disagree - and when they do the corridor is a lie, showing room that is not there or hiding room that is.";
  let r = 5;
  return r;
}
