import { regex_word } from "./regex_word.mjs";
import { bible_word_section_mark_lone_is } from "./bible_word_section_mark_lone_is.mjs";
import { add } from "./add.mjs";
export function gloss_words_replaced(t, words) {
  "One explanation's word with its words swapped for the ones given, in order, a Hebrew paragraph mark standing alone left where it was, and every other mark left standing exactly where it was.";
  "It is given exactly the words the bare cut finds in the text, because that cut drops a lone paragraph mark; swapping that mark as though it were a word would take one word more than was given, and an author's last word of a section would come back ending in the text undefined.";
  let r = regex_word();
  let at = 0;
  function word_take(run) {
    let mark = bible_word_section_mark_lone_is(run);
    if (mark) {
      return run;
    }
    let word = words[at];
    at = add(at, 1);
    return word;
  }
  let replaced = t.replace(r, word_take);
  return replaced;
}
