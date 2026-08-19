import { app_emoji_bible_tradition_other } from "./app_emoji_bible_tradition_other.mjs";
import { app_emoji_bible_traditions } from "./app_emoji_bible_traditions.mjs";
import { bible_glyph_characters_lookup } from "./bible_glyph_characters_lookup.mjs";
import { property_get } from "./property_get.mjs";
export function app_emoji_bible_tradition_button_text(name) {
  "$plain name";
  "the name says which way of drawing the glyphs the reader is on now. It is a word to look up and nothing that runs.";
  "What the button offering the other way of drawing should say, shown as the cross it would draw.";
  "The button shows the cross the reader would GET rather than the one they already have, because a control that shows the state it is in reads as a label and a control that shows what it does reads as an offer, and a reader meeting this page for the first time has nothing to compare a label against.";
  "The cross itself is looked up rather than written out here, so this button cannot come to disagree with the page beneath it. A control that promised one drawing and delivered another would be a small lie told at the exact moment a reader was deciding whether to trust the page with something they care about.";
  let next = app_emoji_bible_tradition_other(name);
  let traditions = app_emoji_bible_traditions(next);
  let lookup = bible_glyph_characters_lookup(traditions);
  let character = property_get(lookup, "cross");
  let text = "Draw the cross " + character;
  return text;
}
