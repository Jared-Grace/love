import { arguments_assert } from "./arguments_assert.mjs";
import { list_includes } from "./list_includes.mjs";
import { text_combine } from "./text_combine.mjs";
import { bless_rung_word } from "./bless_rung_word.mjs";
export function bless_rung_phrase(rung) {
  arguments_assert(arguments, 1);
  ("How a rung is named inside the prayer, as somewhere the person BELONGS - in their");
  ("neighborhood, on their block.");
  ("'Their' and never 'this', and that one word is the whole design: the place is reached");
  ("through the person rather than through the ground the player is standing on. So the");
  ("player never has to see the place, be inside it, or know its name - they have to see a");
  ("face. It is also what lets a stranger passing through an airport extend to the country");
  ("they came FROM rather than the one they are in.");
  ("English does not use one word for all of them: you are ON a block and ON a continent,");
  ("but IN a town and IN a country. A rule that took the commoner of those and applied it");
  ("everywhere would come out wrong at exactly the moment the player is reading the words");
  ("aloud, so the two that differ are named here instead of derived.");
  let word = bless_rung_word(rung);
  let upon = ["block", "continent"];
  let atop = list_includes(upon, word);
  if (atop) {
    let on = text_combine("on their ", word);
    return on;
  }
  let within = text_combine("in their ", word);
  return within;
}
