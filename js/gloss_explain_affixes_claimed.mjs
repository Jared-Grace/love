import { binisaya_affix_kinds } from "./binisaya_affix_kinds.mjs";
import { list_add } from "./list_add.mjs";
import { list_join } from "./list_join.mjs";
export function gloss_explain_affixes_claimed(explain) {
  "Every piece of a word an explanation names in so many words - which kind it called the piece, and the letters it quoted for it - in the order it names them.";
  "A claim is one of the three kind names followed by a quoted run of letters, which is the one shape the corpus writes: the prefix 'gi-', with the suffix '-on', and the infix '-maus-'. Both the straight quote and the curly pair appear, so both are read, and punctuation ending a sentence inside the closing quote is dropped, because 'gi-,' and 'gi-' are the same claim.";
  "The three names are asked for rather than written out here, because they are already one word each in three places and a fourth spelling of any of them would stop matching quietly rather than fail.";
  "An explanation that names a piece some other way claims nothing here, and that is the honest answer rather than a guess. The check that reads this is looking for a claim that disagrees with the dictionary, so a claim it cannot read has to be no claim at all - inventing one would make up the disagreement as well.";
  let kinds = binisaya_affix_kinds();
  let named = list_join(kinds, "|");
  let pattern = new RegExp(
    "(" + named + ")\\s+['‘\"]([^'’\"]+?)[,.;:!?]?['’\"]",
    "g",
  );
  let claimed = [];
  let match = pattern.exec(explain);
  while (match) {
    let claim = {
      kind: match[1],
      letters: match[2],
    };
    list_add(claimed, claim);
    match = pattern.exec(explain);
  }
  return claimed;
}
