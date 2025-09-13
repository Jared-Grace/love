import { string_empty_not_is } from "./string_empty_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { string_split_space } from "./string_split_space.mjs";
import { ebible_chapter_text } from "./ebible_chapter_text.mjs";
import { marker } from "./marker.mjs";
export async function ebible_verses(bible_folder, chapter_code) {
  marker("1");
  let { verse_numbers, text } = await ebible_chapter_text(
    bible_folder,
    chapter_code,
  );
  let split = string_split_space(text);
  function lambda(item) {}
  let ne = string_empty_not_is(name);
  let filtered = list_filter(list, lambda);
  return text;
}
