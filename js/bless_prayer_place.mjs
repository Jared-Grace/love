import { arguments_assert } from "./arguments_assert.mjs";
import { bless_place_phrase } from "./bless_place_phrase.mjs";
import { bless_prayer_of } from "./bless_prayer_of.mjs";
import { text_combine } from "./text_combine.mjs";
export function bless_prayer_place(place) {
  arguments_assert(arguments, 1);
  "The prayer for a whole place - everyone on this street, everyone in this city.";
  "Said of the ground rather than of a number, and that IS the rung: the player stops";
  "counting faces and names the place they are standing in. It is the same summarising the";
  "count rungs do, one step further up, which is why it opens with the same two words.";
  let where = bless_place_phrase(place);
  let right = text_combine("everyone ", where);
  let text = bless_prayer_of(right);
  return text;
}
