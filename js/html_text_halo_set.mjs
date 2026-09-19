import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
export function html_text_halo_set(component, width, color) {
  arguments_assert(arguments, 3);
  ("draws a ring of one colour tight around the shape of some lettering, so the lettering is read against that colour rather than against whatever it happens to be standing on");
  ("THIS IS A GROUND CLIPPED TO THE LETTER INSTEAD OF TO A BOX. What makes lettering readable is the colour immediately around it, and a filled box supplies that by covering a rectangle. A ring supplies the same thing by following the letter, which is what to reach for when the rectangle is the part that is wrong - a box drawn inside a picture reads as something put into the picture, where a ring reads as the letter being written on it.");
  ("EIGHT RINGS RATHER THAN A DRAWN OUTLINE ON THE GLYPH, WHICH IS THE ONE DECISION HERE. The drawn kind is a stroke centred on the letter's own edge, so half of it falls inside and eats the letter; kept off the inside it needs a second property to say so, and where that property is not obeyed the letter is quietly thinned instead of haloed. A copy of the lettering offset in eight directions cannot touch the original at all - it is painted behind it - so the letter comes out the width it was drawn.");
  ("Eight and not four, because four leave the corners open. A letter has diagonal edges and a ring made of up, down, left and right alone breaks at every one of them.");
  ("No softening on any of them. A soft edge spreads the colour thinner the further out it goes, so the colour right beside the letter - the only part doing the work - is no longer the colour that was asked for, and what a check measured would not be what a reader sees.");
  let negative = text_combine_multiple(["-", width]);
  let zero = "0";
  let places = [
    [negative, negative],
    [zero, negative],
    [width, negative],
    [negative, zero],
    [width, zero],
    [negative, width],
    [zero, width],
    [width, width],
  ];
  let shadows = [];
  for (let place of places) {
    let x = place[0];
    let y = place[1];
    let shadow = text_combine_multiple([x, " ", y, " 0 ", color]);
    shadows.push(shadow);
  }
  let value = list_join_comma(shadows);
  html_style_assign(component, {
    "text-shadow": value,
  });
}
