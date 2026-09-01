import { arguments_assert } from "./arguments_assert.mjs";
import { bless_rung_word } from "./bless_rung_word.mjs";
import { equal } from "./equal.mjs";
import { bless_rung_preposition } from "./bless_rung_preposition.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function bless_rung_phrase(rung) {
  arguments_assert(arguments, 1);
  ("How a rung is named inside the prayer, as somewhere the person BELONGS - in their");
  ("neighborhood, on their block.");
  ("'Their' and never 'this', and that one word is the whole design: the place is reached");
  ("through the person rather than through the ground the player is standing on. So the");
  ("player never has to see the place, be inside it, or know its name - they have to see a");
  ("face. It is also what lets a stranger passing through an airport extend to the country");
  ("they came FROM rather than the one they are in.");
  ("English does not use one word for all of them - you are ON a block and IN a town - and");
  ("which of them take which is asked for rather than listed here, because the line that");
  ("counts a place says the same word about the same rung and the two must not drift.");
  let word = bless_rung_word(rung);
  ("The top rung drops the possessive, and it is the only one that may. Everywhere else");
  ("'their' is doing work - it is what carries the prayer out from the person instead of");
  ("out from the ground. Nobody has a world of their own, so at the last rung the word");
  ("stops distinguishing anything and only sounds wrong in the mouth.");
  let all = equal(word, "world");
  if (all) {
    let shared = "in the world";
    return shared;
  }
  let preposition = bless_rung_preposition(rung);
  let phrase = text_combine_multiple([preposition, " their ", word]);
  return phrase;
}
