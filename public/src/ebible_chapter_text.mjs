import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { ebible_chapter_verse_numbers } from "../../../love/public/src/ebible_chapter_verse_numbers.mjs";
import { html_parse_text } from "../../../love/public/src/html_parse_text.mjs";
export async function ebible_chapter_text(bible_folder, chapter_code) {
  let v = await ebible_chapter_verse_numbers(bible_folder, chapter_code);
  let verse_numbers = object_property_get(v, "verse_numbers");
  let main = object_property_get(v, "main");
  let d = object_property_get(v, "d");
  let text = html_parse_text(d, main);
  let result = {
    verse_numbers,
    text,
  };
  return result;
}
