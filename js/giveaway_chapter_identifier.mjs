import { text_lower_to } from "./text_lower_to.mjs";
import { list_join_underscore } from "./list_join_underscore.mjs";
import { giveaway_identifier_prefix } from "./giveaway_identifier_prefix.mjs";
export function giveaway_chapter_identifier(chapter_code) {
  "$plain chapter_code";
  "The name of the archive.org box holding one passage's singing, its video and its pictures.";
  "Keyed on the chapter code this repo already uses rather than on a spelling invented here. That code is already padded - Psalms to three digits and every other book to two - so a plain listing of the boxes runs in passage order instead of 1, 10, 100, 11, which is the order a reader of a bare list gets for free and cannot fix afterwards.";
  "Lowercased, because the word comes back to us inside addresses people retype and inside file names on machines we will never see, and a name that differs only by case is a name two people spell two ways.";
  "The translated text is deliberately not in this box. The download it would serve is the one somebody searches, and a search over a single chapter answers nothing - so a whole translation is its own box, and the two are joined by spelling the passage the same way inside both rather than by sitting together.";
  let chapter_lower = text_lower_to(chapter_code);
  let prefix = giveaway_identifier_prefix();
  let identifier = list_join_underscore([prefix, chapter_lower]);
  return identifier;
}
