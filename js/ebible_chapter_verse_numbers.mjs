import { ebible_chapter_main_parsed } from "./ebible_chapter_main_parsed.mjs";
import { ebible_main_verse_numbers } from "./ebible_main_verse_numbers.mjs";
import { property_get } from "./property_get.mjs";
export async function ebible_chapter_verse_numbers(bible_folder, chapter_code) {
  let opened = await ebible_chapter_main_parsed(bible_folder, chapter_code);
  let d = property_get(opened, "d");
  let main = property_get(opened, "main");
  let verse_numbers = ebible_main_verse_numbers(d, main);
  let v = {
    d,
    main,
    verse_numbers,
  };
  return v;
}
