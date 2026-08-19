import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
import { multiply } from "./multiply.mjs";
import { property_get } from "./property_get.mjs";
import { bless_place_sizes } from "./bless_place_sizes.mjs";
import { bless_rung_before } from "./bless_rung_before.mjs";
export function bless_place_people(rung) {
  arguments_assert(arguments, 1);
  ("How many people a place of this size holds - three in a household, twelve in a");
  ("building, sixty on a block.");
  ("Worked out by walking the ladder down rather than written anywhere, so it is the same");
  ("number the addresses are made of. A crowd is laid out by dividing a line of people up,");
  ("so how many a block holds is exactly the product of the divisions between a person and");
  ("a block - and a second listing would be free to disagree with the first the day a");
  ("household stops being three.");
  ("A person holds one person, themselves. That is the bottom and it is where the walk");
  ("stops, and it is a true answer rather than a guard: somebody standing alone is still a");
  ("crowd of one.");
  let inside = bless_rung_before(rung);
  let bottom = not(inside);
  if (bottom) {
    let r = 1;
    return r;
  }
  let sizes = bless_place_sizes();
  let size = property_get(sizes, rung);
  let held = bless_place_people(inside);
  let people = multiply(size, held);
  return people;
}
