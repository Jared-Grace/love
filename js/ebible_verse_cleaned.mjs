import { property_get } from "./property_get.mjs";
import { whitespace_normalize } from "./whitespace_normalize.mjs";
import { ebible_bible_folder_text_repaired } from "./ebible_bible_folder_text_repaired.mjs";
import { ebible_verse_new_text } from "./ebible_verse_new_text.mjs";
export function ebible_verse_cleaned(bible_folder, item) {
  "$plain bible_folder";
  "One verse as it was cut out of the page, tidied into the verse every reading here hands on: its spacing evened out and whatever that publisher got wrong about one of their own words put right.";
  "The repair is asked of the bible the verse came from rather than of the words alone. Pointed at the words alone it is the same repair pointed at every translation the archive ships, and the archive ships translations that mean different things by the same spelling.";
  "It is a function of its own because two readings need it and they part company immediately afterwards: one drops a verse with no words in it, the other keeps it and writes a mark in its place. Everything they do the same way is in here, so neither can quietly stop matching the other.";
  let text = property_get(item, "text");
  let normalized = whitespace_normalize(text);
  let worded = ebible_bible_folder_text_repaired(bible_folder, normalized);
  let number = property_get(item, "verse_number");
  let v = ebible_verse_new_text(worded, number);
  return v;
}
