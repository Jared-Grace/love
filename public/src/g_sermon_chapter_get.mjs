import { list_map } from "../../../love/public/src/list_map.mjs";
import { g_sermon_generate_chapter_get } from "../../../love/public/src/g_sermon_generate_chapter_get.mjs";
import { g_sermon_verse_to_text } from "../../../love/public/src/g_sermon_verse_to_text.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function g_sermon_chapter_get(chapter_code, verse_number) {
  marker("1");
  let chapter = await g_sermon_generate_chapter_get(chapter_code);
  let passage = object_property_get(chapter, "passage");
  function lambda(v) {
    let joined2 = g_sermon_verse_to_text(v);
    let verse_numbers = object_property_get(v, "verse_numbers");
    let first = list_first(verse_numbers);
    let v2 = first === verse_number;
    return v2;
  }
  let v = list_map(passages, lambda);
  return joined2;
}
