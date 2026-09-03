export function html_subset_choices_max_height() {
  "How tall the box of things on offer is allowed to grow before it starts scrolling inside itself, as a CSS length.";
  "Two fifths of the screen, so that on the shortest phone the card of chosen things underneath is on the screen at the same time as the list being chosen from. That is the whole point of the cap: the list of the world's languages runs to hundreds, and left to its own height it pushed the order of what had been chosen so far several screens down, where a reader had no reason to believe anything was.";
  "Measured against the SMALL viewport, which is the screen with the browser's own bars showing. The large one is the screen once they have slid away, and sizing to that puts the bottom of the box under a bar that is there when the page opens.";
  let v = "40svh";
  return v;
}
