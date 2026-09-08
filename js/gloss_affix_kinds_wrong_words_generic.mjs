import { gloss_chapters_affix_kinds_wrong } from "./gloss_chapters_affix_kinds_wrong.mjs";
import { gloss_offenders_findings_by_word } from "./gloss_offenders_findings_by_word.mjs";
export async function gloss_affix_kinds_wrong_words_generic(fn, known) {
  "Every distinct word in one gloss store whose explanation names a piece the dictionary gives no piece of, each with the chapters it is wrong in, commonest first.";
  "The chapter view answers which chapter to sit down with. This answers how much writing there actually is, which is a different number: the same word is wrong wherever it was met, and the store's twelve hundred wrong claims are four hundred odd words.";
  "Words rather than sightings, because a word's parts do not change from one psalm to the next - the dictionary is asked about the word and knows nothing of where it was read. So one sentence written for a word is the right sentence in every chapter holding it, and writing it once is not a shortcut but the truth about the work.";
  "Every finding is kept, because this sweep only ever hands back findings of the one kind it looks for, and a reading that filtered them again would be saying there is a second kind to sort out when there is not.";
  "The dictionary's root, its breakdown of the word, and the two lists of what each side calls the pieces all travel along, because the reader repairing one of these is choosing between them and cannot do that from the word alone.";
  "The gathering from one row per sighting to one row per word, and the ranking that follows it, are the shared reading four other sweeps over these stores already use.";
  function keep_is(finding) {
    let every = true;
    return every;
  }
  let carried = ["root", "affixes", "given", "said"];
  let offenders = await gloss_chapters_affix_kinds_wrong(fn, known);
  let r = gloss_offenders_findings_by_word(offenders, keep_is, carried);
  return r;
}
