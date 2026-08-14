import { text_accent_marks_removed } from "./text_accent_marks_removed.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { whitespace_normalize } from "./whitespace_normalize.mjs";
export function wolff_word_key(headword) {
  "The spelling to file one of Wolff's headwords under, so that a word met in a Cebuano text finds it.";
  "$plain headword";
  "the headword is a word printed in a dictionary. It is respelled and handed back; nothing here reads a file, reaches anywhere, or runs what it is given.";
  "The dictionary writes a word with the marks that say where the stress falls and how the last vowel closes, and no Cebuano text outside a dictionary writes them - not a Bible, not a newspaper, not anything a reader will ever be holding. So a headword found by its printed spelling would be a headword found by nobody, and the marks come off here rather than at each place a word is looked up.";
  "The small digits the book uses to keep two unrelated words apart come off for the same reason. They are the book's own bookkeeping and no part of how the word is written; a reader meeting the word has no way to know which of the two they are looking at, and answering with both is the honest reply.";
  "Two letters are then folded onto two others, and this is the book's own instruction rather than a guess at what looks close. Its introduction says Cebuano has three vowels written i, u and a; that published Cebuano writes the first sometimes as i and sometimes as e, and the second sometimes as u and sometimes as o, with no consistency either way; and that the letters e and o are not used in the dictionary at all. So a word printed here can never carry them and a word met in a Bible often does - fold them and the two spellings are one word, leave them and the dictionary answers nothing for a word it holds a full entry on.";
  "The folding is safe in the one direction it runs. Nothing in the dictionary is changed by it, because nothing in the dictionary is spelled with either letter; all it does is bring the spellings outside the book in to meet it.";
  let plain = text_accent_marks_removed(headword);
  let lowered = text_lower_to(plain);
  let undigited = lowered.replace(/[0-9]/g, "");
  let folded = undigited.replace(/e/g, "i").replace(/o/g, "u");
  let r = whitespace_normalize(folded);
  return r;
}
