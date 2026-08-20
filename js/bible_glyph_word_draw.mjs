import { fn_name } from "./fn_name.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
export function bible_glyph_word_draw(word, lookup) {
  "$plain word";
  "$plain lookup";
  "the word is one stored verse word and the lookup is a glyph name to character table. Both are data to read and neither runs.";
  "One stored word of a picture Bible verse, drawn as the plain text a reader sees.";
  ("This is the last step of the chain that starts at ",
    fn_name("bible_glyph_word_parse"),
    ": a person types shorthand, the shorthand is parsed into the word that gets stored, and this draws the stored word. The middle form is the one that ships, so this can be replaced by a renderer that draws pictures without a single stored verse changing.");
  ("A glyph the lookup does not carry is drawn as its NAME between angle brackets rather than as a blank or a dropped word. A blank would hide the fault at exactly the moment a reader met it, and a reader who can see the name can at least read the verse and report what is missing. The gate is what should catch this first; this is the second net.");
  ("A GROUP IS RUN TOGETHER AND THAT IS THE WHOLE MARK, and it is worth saying that this used to be written down here as a shortcoming. A page drew a ring round a group and plain text could not, so this said so and called it a real loss. The ring has since been retired in favour of the gap between words being drawn wider, which is what plain text was doing all along - so the poor relation turns out to have had the right grammar, and the page now draws the same one more clearly rather than a second one.");
  ("What plain text still cannot do is make that gap any wider than one space, so the comparison a reader makes is between touching and one space rather than between touching and half a picture. It is thinner evidence, and it is why a terminal, a log and a test are what this is for and a page is where a reader is sent.");
  let plain = equal(typeof word, "string");
  if (plain) {
    return word;
  }
  let text = "";
  for (let part of word) {
    let words = equal(typeof part, "string");
    if (words) {
      text = text + part;
      continue;
    }
    for (let name of part) {
      let known = property_exists(lookup, name);
      let character = known ? property_get(lookup, name) : "<" + name + ">";
      text = text + character;
    }
  }
  return text;
}
