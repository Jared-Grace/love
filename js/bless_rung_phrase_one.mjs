import { arguments_assert } from "./arguments_assert.mjs";
import { bless_rung_word } from "./bless_rung_word.mjs";
import { equal } from "./equal.mjs";
import { bless_rung_preposition } from "./bless_rung_preposition.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function bless_rung_phrase_one(rung) {
  arguments_assert(arguments, 1);
  ("How a rung is named when it is being COUNTED rather than travelled to - in one family,");
  ("on one block.");
  ("One and never their, because this says where a number of people were, and the people");
  ("are several. Their family reads as one person's family; one family reads as the place");
  ("the whole count came from, which is what the sentence is for.");
  ("It is the same place said two ways as the phrase that names it through a person, and");
  ("they share the preposition rather than each listing the words that take on. Two lists");
  ("would not break, they would drift: a rung added later gets its preposition set in one");
  ("of them and the other goes on saying in their continent.");
  ("The top rung is the world and there is only one of it, so one world says nothing that");
  ("the world does not say better.");
  let word = bless_rung_word(rung);
  let all = equal(word, "world");
  if (all) {
    let shared = "in the world";
    return shared;
  }
  let preposition = bless_rung_preposition(rung);
  let phrase = text_combine_multiple([preposition, " one ", word]);
  return phrase;
}
