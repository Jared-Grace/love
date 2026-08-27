import { list_size_assert } from "./list_size_assert.mjs";
import { html_loading_spinner_breath_halves } from "./html_loading_spinner_breath_halves.mjs";
import { list_first } from "./list_first.mjs";
import { list_add } from "./list_add.mjs";
export function html_loading_spinner_breath_scales() {
  "one radius for every half-breath of a round, alternating expanded and collapsed, so that no two expansions in the round are the same size. the round then closes on the radius it opened with, so it can repeat forever without a jump";
  "THE RADII ARE AUTHORED AND NOT DRAWN FRESH, AND THAT IS THE WHOLE OF WHAT MAKES A BUILD REPEATABLE. They used to be drawn at random every time this was asked, which reads as harmless - the ring breathes the same way whichever numbers come out, and nobody looking at a page could tell one round from another. What it actually meant was that every regeneration of a page wrote a different file out of the same commit. A build waiting to be sent is checked against a short word standing for each of its pieces, and pieces differing by nine random numbers no longer match what was written down beside them, so the app is judged unaccounted for - and the sending, which puts out every app waiting at once, then refuses for everybody. Measured 2026-08-26: one page regenerated at eight in the evening held up a sending that had nothing to do with it, and waiting it out was hopeless, because there was no unfinished work for anybody to finish.";
  "VARIETY WITHIN A ROUND IS THE POINT AND IT IS KEPT EXACTLY. Eight radii, no two alike, large and small in turn, each one inside the range the drawing used to pick from. Variety BETWEEN builds was never worth anything to a reader and cost a build that can be made twice, which is worth a great deal.";
  let scales = [1.28, 0.86, 1.14, 0.94, 1.32, 0.81, 1.19, 0.9];
  ("how many half-breaths make a round is written down next door, so the count is asserted here rather than assumed - somebody changing it there would otherwise leave a round quietly short of its last breath");
  let halves = html_loading_spinner_breath_halves();
  list_size_assert(scales, halves);
  let first = list_first(scales);
  list_add(scales, first);
  return scales;
}
