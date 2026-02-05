import { ebible_version_books } from "../../../love/public/src/ebible_version_books.mjs";
import { list_join_newline_2 } from "../../../love/public/src/list_join_newline_2.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { g_sermon_generate_chapter_get } from "../../../love/public/src/g_sermon_generate_chapter_get.mjs";
import { g_sermon_verse_to_text } from "../../../love/public/src/g_sermon_verse_to_text.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function g_sermon_chapter_get(chapter_code) {
  let books = await ebible_version_books("engbsb");
  let chapter = await g_sermon_generate_chapter_get(chapter_code);
  let passages = object_property_get(chapter, "passages");
  function lambda(v) {
    let joined2 = g_sermon_verse_to_text(v, chapter_code, books);
    return joined2;
  }
  let list = list_map(passages, lambda);
  let joined = list_join_newline_2(list);
  return joined;
}
