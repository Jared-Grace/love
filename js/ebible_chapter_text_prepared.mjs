import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_chapter_main_ready } from "./ebible_chapter_main_ready.mjs";
import { property_get } from "./property_get.mjs";
import { html_parse_text } from "./html_parse_text.mjs";
export async function ebible_chapter_text_prepared(
  bible_folder,
  chapter_code,
  prepare$d$main,
) {
  arguments_assert(arguments, 3);
  ("One chapter as a single run of words, beside the mark the page puts at the start of each verse, after the page has been given one last chance to be changed.");
  ("Flattening a page into words forgets where its elements were, so anything a reading wants to know about their places has to be written into them while they still have places. That last chance is what is handed in here: the parser and the element, before either is flattened.");
  ("A reading that wants the page left alone hands in identity, which is what leaving it alone looks like when it has to be said out loud.");
  let opened = await ebible_chapter_main_ready(bible_folder, chapter_code);
  let d = property_get(opened, "d");
  let main = property_get(opened, "main");
  let verse_numbers = property_get(opened, "verse_numbers");
  prepare$d$main(d, main);
  let text = html_parse_text(d, main);
  let result = {
    verse_numbers,
    text,
  };
  return result;
}
