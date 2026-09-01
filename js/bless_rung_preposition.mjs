import { arguments_assert } from "./arguments_assert.mjs";
import { bless_rung_word } from "./bless_rung_word.mjs";
import { list_includes } from "./list_includes.mjs";
export function bless_rung_preposition(rung) {
  arguments_assert(arguments, 1);
  ("Whether a person is IN a rung or ON one - in their family, on their block.");
  ("English does not use one word for all of them, and the two that take on are not the two");
  ("a rule would guess: a block and a continent take on, and a town, a county and a country");
  ("take in. So they are named rather than derived, and named ONCE, because every sentence");
  ("in this game that puts a person somewhere needs the same answer.");
  ("Asked of the word the player SAYS rather than of the rung the ladder files it under, so");
  ("that renaming a rung for the player cannot leave the preposition answering about a word");
  ("nobody reads.");
  ("The top rung is not asked about here. Nobody is on or in a world of their own, so what");
  ("the sentence does there is a whole different sentence, and each of the callers writes");
  ("it out rather than gluing it together from parts that do not fit.");
  let word = bless_rung_word(rung);
  let upon = ["block", "continent"];
  let atop = list_includes(upon, word);
  if (atop) {
    let on = "on";
    return on;
  }
  let within = "in";
  return within;
}
