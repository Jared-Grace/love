import { greater_than } from "./greater_than.mjs";
import { equal } from "./equal.mjs";
export function bible_word_article_pointer_spelled(text) {
  "The name a short dictionary entry sends its reader to instead of saying anything itself - Abila. [ ABILENE ] sends to ABILENE - in lower case, or null when the entry is not such a pointer.";
  "$plain text";
  "AN ENTRY OF MORE THAN TWENTY-FIVE WORDS IS NEVER A POINTER, whatever it ends with, because it has said something of its own. The longest pointers counted in Smith's, 2026-11-08, are twenty-five words, most of them the site's note that Nave's or Easton's has the entry too.";
  "THREE WAYS OF POINTING ARE READ, the three Smith's uses: See ABIEL, [ ABILENE ], and Achar = ACHAN. The name pointed to is always in capitals, which is what tells it from the entry's own words.";
  let words = text.split(/\s+/).filter(Boolean);
  if (greater_than(words.length, 25)) {
    return null;
  }
  let match = text.match(
    /(?:\bSee\s+(?:also\s+)?|\[\s*|=\s*)([A-Z][A-Z'-]+(?:[ -][A-Z][A-Z'-]+)*)/,
  );
  if (equal(match, null)) {
    return null;
  }
  let spelled = match[1].toLowerCase().replace(/'/g, "");
  return spelled;
}
