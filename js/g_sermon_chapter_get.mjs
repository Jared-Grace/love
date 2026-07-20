import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { ebible_version_books } from "./ebible_version_books.mjs";
import { list_join_newline_2 } from "./list_join_newline_2.mjs";
import { list_map } from "./list_map.mjs";
import { g_sermon_generate_chapter_get } from "./g_sermon_generate_chapter_get.mjs";
import { g_sermon_verse_to_text } from "./g_sermon_verse_to_text.mjs";
import { property_get } from "./property_get.mjs";
export async function g_sermon_chapter_get(chapter_code) {
  let books = await ebible_version_books(ebible_folder_english());
  let chapter = await g_sermon_generate_chapter_get(chapter_code);
  let passages = property_get(chapter, "passages");
  function lambda(v) {
    let joined2 = g_sermon_verse_to_text(v, chapter_code, books);
    return joined2;
  }
  let list = list_map(passages, lambda);
  let joined = list_join_newline_2(list);
  return joined;
}
