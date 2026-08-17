import { fn_name } from "./fn_name.mjs";
import { subtract } from "./subtract.mjs";
import { equal } from "./equal.mjs";
export function bible_glyph_word_text(word) {
  "$plain word";
  "the word is one stored verse word, either a plain string or a list of its parts. It is data to write out and nothing that runs.";
  "One stored word of a picture Bible verse, written back out in the shorthand a person types.";
  ("This is the other half of ",
    fn_name("bible_glyph_word_parse"),
    ", and having both is what lets a stored verse be handed back to somebody to edit. Writing a word out and parsing it again gives back the same word, which is the only claim either function makes and the one a test can check.");
  ("A dollar in the English is doubled on the way out, because a single one would open a group when it was read back.");
  ("A group that ends the word is left OPEN, with no closing dollar, because the end of the word closes it. Writing the closing one would be harmless to read back but would mean the shorthand a person typed and the shorthand handed back to them differed by a character they never wrote, which reads as the tool correcting them.");
  let plain = equal(typeof word, "string");
  if (plain) {
    let escaped = word.replaceAll("$", "$$$$");
    return escaped;
  }
  let text = "";
  let index = 0;
  for (let part of word) {
    let words = equal(typeof part, "string");
    if (words) {
      text = text + part.replaceAll("$", "$$$$");
      index = index + 1;
      continue;
    }
    let right = subtract(word.length, 1);
    let last = equal(index, right);
    let closing = last ? "" : "$";
    text = text + "$" + part.join("+") + closing;
    index = index + 1;
  }
  return text;
}
