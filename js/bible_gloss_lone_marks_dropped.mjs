import { text_split } from "./text_split.mjs";
import { text_letters_digits_none_is } from "./text_letters_digits_none_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_join_space } from "./list_join_space.mjs";
export function bible_gloss_lone_marks_dropped(gloss) {
  "$plain gloss";
  "the wording is one the interlinear printed under a word. It is text to look at and nothing that runs.";
  "One wording with any word of it that holds no letter and no digit taken out, so a mark left standing on its own stops looking like a word of English.";
  "THE TABLES CARRY ENGLISH PUNCTUATION AND THE ORIGINAL WORD ORDER AT THE SAME TIME, and the two do not survive each other. Judges thirteen glosses one Hebrew verb as am, closing-quote he said, because the English of that sentence runs through the verb from both sides. Laid out in the order of the Hebrew, the closing quote lands next to nothing, and the band reads spoke to my wife am, closing-quote he said I.";
  "A MARK WITH NOTHING TO MARK IS DECORATION. The whole corpus of written bands holds one closing quote and not a single opening one, so the reader who meets it has nothing to close and nothing to look back to. It is the same argument that takes the brackets off a supplied word next door: the mark is honest in the table, where the rows stand under the original words, and unresolvable in the band, where the line has been read out flat.";
  "A WORD IS KEPT IF IT CAN BE SAID OR COUNTED. A comma hanging on the end of a word goes with the word, because the word still reads; a numeral is kept whole, because a number is something a reader can say even with no letter in it. Only a run that is nothing but marks comes out.";
  "IT IS FOUND BY A PROPERTY AND NOT BY A LIST OF MARKS. Naming the quote here would leave the next mark to be discovered by whoever reads that chapter, which is how the dash got in. Asking whether a word can be pronounced at all catches the mark nobody has met yet by the same line.";
  "THE SPACE THE WORD LEAVES IS CLOSED UP, because a band with two spaces in it has the same unreadable hole the mark had, only invisible.";
  let words = text_split(gloss, " ");
  let kept = [];
  for (let word of words) {
    let marks_only = text_letters_digits_none_is(word);
    if (marks_only) {
      continue;
    }
    list_add(kept, word);
  }
  let text = list_join_space(kept);
  return text;
}
