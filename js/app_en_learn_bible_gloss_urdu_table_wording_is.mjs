import { app_en_learn_bible_gloss_urdu_settled_explains } from "./app_en_learn_bible_gloss_urdu_settled_explains.mjs";
import { object_values } from "./object_values.mjs";
import { list_includes } from "./list_includes.mjs";
import { app_en_learn_bible_gloss_urdu_superseded_explains } from "./app_en_learn_bible_gloss_urdu_superseded_explains.mjs";
export function app_en_learn_bible_gloss_urdu_table_wording_is(explain) {
  "Whether an explanation in the store that explains English words to an Urdu reader is word for word one of the wordings the tables hold or once held, and so may be written over by the settled wording belonging to the word it actually stands under.";
  "A settled wording is a good explanation, so this is not the test the shared-label predicate makes. It answers a narrower question: this sentence was not written for the verse it sits in, it was copied from the table, so replacing it with the table's answer for this word loses nothing that was ever authored here.";
  "What it repairs is one fault, measured at five hundred and ninety-eight entries over thirteen words. A word opening its sentence is written with a capital and the table gives the capital its own wording, which is the small-letter wording plus one sentence saying why the letter is big. Entries written before that sentence existed carry the small-letter wording under the capital word, so the reader is shown a wording that is true and is missing the one thing the capital was there to teach. The same fault put the wording for 'a' under forty-nine sightings of 'an', which withholds the rule about the vowel sound.";
  "Safe in the one direction that cannot be undone. An entry already carrying its own word's settled wording is left alone by the writer before this is ever asked, so the worst this can do is hand a word the wording written for that word.";
  "A wording that has been retired counts too, and that is the half without which improving a settled wording would be a loss. The moment a better sentence takes a word's place in the table, every entry already carrying the old one falls out of the current wordings and becomes unreachable, so a table that got better would leave the store behind it. Asking both lists is what keeps the two moving together.";
  let explains = app_en_learn_bible_gloss_urdu_settled_explains();
  let wordings = object_values(explains);
  let settled = list_includes(wordings, explain);
  if (settled) {
    return settled;
  }
  let retired = app_en_learn_bible_gloss_urdu_superseded_explains();
  let was = list_includes(retired, explain);
  return was;
}
