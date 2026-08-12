import { ebible_chapter_main_ready } from "./ebible_chapter_main_ready.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { html_parse_text } from "./html_parse_text.mjs";
export async function ebible_chapter_text(bible_folder, chapter_code) {
  arguments_assert(arguments, 2);
  "One chapter as a single run of words, beside the mark the page puts at the start of each verse.";
  "The words of the verses and the words that stand for their numbers arrive mixed together in one run, because flattening a page forgets where its elements were. What to do about that is the caller's to decide.";
  let opened = await ebible_chapter_main_ready(bible_folder, chapter_code);
  let d = property_get(opened, "d");
  let main = property_get(opened, "main");
  let verse_numbers = property_get(opened, "verse_numbers");
  let text = html_parse_text(d, main);
  let result = {
    verse_numbers,
    text,
  };
  return result;
}
