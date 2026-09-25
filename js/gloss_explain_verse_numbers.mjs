import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_explain_verse_numbers_english } from "./gloss_explain_verse_numbers_english.mjs";
import { gloss_explain_verse_numbers_urdu } from "./gloss_explain_verse_numbers_urdu.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_unique } from "./list_unique.mjs";
export function gloss_explain_verse_numbers(explain, verse_numbers) {
  "The verses of its own chapter that one word explanation names, whichever language it is written in, as a list with nothing said twice.";
  "THIS IS THE ONE DOOR, AND IT ASKS EVERY LANGUAGE RATHER THAN BEING TOLD WHICH TO ASK. Each reading finds only what its own language writes, and no two of those writings share a single character: an English sentence has no word آیت in it, and an Urdu one has no word verse. So asking both always gives exactly what asking the right one would have given, and gives it without anybody having to know which store the explanation came out of.";
  "The other way round was written out and turned down: a reader chosen per store, a sibling of the one that chooses how a store's words are keyed. It was the right shape there, where the two choices genuinely conflict and running both would be wrong. Here they cannot conflict, and choosing would have meant threading the choice through four readings that each take an exact count of arguments, and through both of the Cebuano callers, to arrive at the same answer. The cost of asking twice is one more pass over one sentence.";
  "A store written in a language nothing here reads yet answers with nothing, which is the same silence a store with no claims in it gives. That is the trap this was built to get out of, so a new language is added by writing its reading and naming it here, and never by leaving it out.";
  arguments_assert(arguments, 2);
  let english = gloss_explain_verse_numbers_english(explain, verse_numbers);
  let urdu = gloss_explain_verse_numbers_urdu(explain, verse_numbers);
  let named = [];
  list_add_multiple(named, english);
  list_add_multiple(named, urdu);
  let once = list_unique(named);
  return once;
}
