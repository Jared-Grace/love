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
  ("Plain text CANNOT DRAW THE GROUPING RING, and that is a real loss rather than a detail. The ring is what says three glyphs standing together are one word and not three, so in plain text a group is simply run together and the reader is left to infer it from the spacing between words. A page that can draw is where the ring belongs, and this stays for the places that cannot - a terminal, a log, a test.");
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
