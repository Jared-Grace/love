import { equal } from "./equal.mjs";
import { property_list_first } from "./property_list_first.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { ebible_version_books } from "./ebible_version_books.mjs";
import { g_sermon_verse_to_text } from "./g_sermon_verse_to_text.mjs";
import { g_sermon_generate_chapter_passages_get } from "./g_sermon_generate_chapter_passages_get.mjs";
import { list_find } from "./list_find.mjs";
export async function g_sermon_passage_get(chapter_code, verse_number) {
  let bible_folder = ebible_folder_english();
  let books = await ebible_version_books(bible_folder);
  let passages = await g_sermon_generate_chapter_passages_get(chapter_code);
  function lambda(v3) {
    let first = property_list_first(v3, "verse_numbers");
    let v2 = equal(first, verse_number);
    return v2;
  }
  let v = list_find(passages, lambda);
  let joined = g_sermon_verse_to_text(v, chapter_code, books);
  return joined;
}
