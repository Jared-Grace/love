import { arguments_assert } from "./arguments_assert.mjs";
import { text_punctuation_split } from "./text_punctuation_split.mjs";
import { bible_word_section_mark_lone_is } from "./bible_word_section_mark_lone_is.mjs";
import { not } from "./not.mjs";
export function gloss_words_bare_split(text) {
  "$plain text";
  "The words a gloss walks a reader through, cut out of one piece of a Bible line, with anything that is not a word left out.";
  "★ BOTH SIDES OF THE ALIGNMENT CHECK CUT THEIR WORDS HERE, the line on one side and the explanations on the other, so the two can never be cut by different rules and report a fault that is only the difference between the rules.";
  "★ A HEBREW PARAGRAPH MARK STANDING ALONE IS DROPPED, because it is a scribe's mark for where a section ends rather than a word: nobody explains it, no voice says it, and counting it as a word makes the last word of every such line look unexplained. No other script writes that character, so a line in any other language comes back exactly as the plain cut left it.";
  arguments_assert(arguments, 1);
  let parts = text_punctuation_split(text);
  function word_is(part) {
    let mark = bible_word_section_mark_lone_is(part);
    let r = not(mark);
    return r;
  }
  let words = parts.filter(word_is);
  return words;
}
