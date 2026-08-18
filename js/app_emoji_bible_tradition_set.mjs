import { storage_local_set } from "./storage_local_set.mjs";
import { app_emoji_bible_tradition_get } from "./app_emoji_bible_tradition_get.mjs";
export function app_emoji_bible_tradition_set(name) {
  "$plain name";
  "the name says which way of drawing the glyphs the reader has chosen. It is a word to remember and nothing that runs.";
  "Remember which way of drawing the glyphs this reader chose.";
  "The reading half of this pair owns the place it is kept, and its own name is what names that place, so the two cannot end up looking in different drawers.";
  storage_local_set(app_emoji_bible_tradition_get, "tradition", name);
}
