import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_text_halo_directions } from "./html_text_halo_directions.mjs";
import { numbers_up_to } from "./numbers_up_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
export function html_text_halo_set(component, radius, color) {
  arguments_assert(arguments, 3);
  ("draws a ring of one colour tight around the shape of some lettering, reaching the given number of em out from it in every direction, so the lettering is read against that colour rather than against whatever it happens to be standing on");
  ("THIS IS A GROUND CLIPPED TO THE LETTER INSTEAD OF TO A BOX. What makes lettering readable is the colour immediately around it, and a filled box supplies that by covering a rectangle. A ring supplies the same thing by following the letter, which is what to reach for when the rectangle is the part that is wrong - a box drawn inside a picture reads as something put into the picture, where a ring reads as the letter being written on it.");
  ("COPIES OF THE LETTERING SET BEHIND IT RATHER THAN A DRAWN OUTLINE ON THE GLYPH, WHICH IS THE ONE DECISION HERE. The drawn kind is a stroke centred on the letter's own edge, so half of it falls inside and eats the letter; kept off the inside it needs a second property to say so, and where that property is not obeyed the letter is quietly thinned instead of haloed. A copy painted behind the original cannot touch it at all, so the letter comes out the width it was drawn.");
  ("★ THE COPIES STAND ROUND A CIRCLE, WHICH IS THE WHOLE REASON THE RADIUS MEANS WHAT IT SAYS. They were first put at the eight places round a square - the four sides and the four corners - and a square's corner is not its side's distance away but half as far again. So the ring reached a seventh further on the diagonals than on the axes: lumpy, and reaching further into the letter's own holes than the number asked for. On a hairline nobody could see either fault. Ask for a ring thick enough to notice and both arrive at once, which is why this had to be settled before the ring could be thickened rather than after.");
  ("Set round the circle by angle, so the count is the only thing to choose and the places follow from it. Written out as pairs they would be sixteen numbers somebody had to get right, and a ring with one place mistyped has a notch in it that nothing would report.");
  ("No softening on any of them. A soft edge spreads the colour thinner the further out it goes, so the colour right beside the letter - the only part doing the work - is no longer the colour that was asked for, and what a check measured would not be what a reader sees.");
  let count = html_text_halo_directions();
  let steps = numbers_up_to(count);
  let shadows = [];
  for (let step of steps) {
    let share = divide(step, count);
    let left = multiply(share, 2);
    let turn = multiply(left, Math.PI);
    let right = Math.cos(turn);
    let across = multiply(radius, right);
    let right2 = Math.sin(turn);
    let down = multiply(radius, right2);
    let x = across.toFixed(4);
    let y = down.toFixed(4);
    let shadow = text_combine_multiple([x, "em ", y, "em 0 ", color]);
    shadows.push(shadow);
  }
  let value = list_join_comma(shadows);
  html_style_assign(component, {
    "text-shadow": value,
  });
}
