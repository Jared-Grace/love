import { ebible_version_books } from "../../../love/public/src/ebible_version_books.mjs";
import { g_sermon_verse_to_text } from "../../../love/public/src/g_sermon_verse_to_text.mjs";
import { g_sermon_generate_chapter_passages_get } from "../../../love/public/src/g_sermon_generate_chapter_passages_get.mjs";
import { list_find } from "../../../love/public/src/list_find.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export async function g_sermon_passage_get(chapter_code, verse_number) {
  let books = await ebible_version_books("engbsb");
  let passages = await g_sermon_generate_chapter_passages_get(chapter_code);
  function lambda(v) {
    let verse_numbers = property_get(v, "verse_numbers");
    let first = list_first(verse_numbers);
    let v2 = first === verse_number;
    return v2;
  }
  let v = list_find(passages, lambda);
  let joined2 = g_sermon_verse_to_text(v, chapter_code, books);
  return joined2;
}
