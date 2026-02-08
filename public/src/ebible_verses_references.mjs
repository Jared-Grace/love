import { list_join_newline_2 } from "../../../love/public/src/list_join_newline_2.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { text_wrap_parenthesis } from "../../../love/public/src/text_wrap_parenthesis.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { ebible_version_books } from "../../../love/public/src/ebible_version_books.mjs";
import { ebible_parts_chapter_code_to_reference } from "../../../love/public/src/ebible_parts_chapter_code_to_reference.mjs";
import { ebible_verses } from "../../../love/public/src/ebible_verses.mjs";
export async function ebible_verses_references(bible_folder, chapter_code) {
  let books = await ebible_version_books(bible_folder);
  let vs = await ebible_verses(bible_folder, chapter_code);
  function lambda(v) {
    let text = object_property_get(v, "text");
    let verse_number = object_property_get(v, "verse_number");
    let reference = ebible_parts_chapter_code_to_reference(
      chapter_code,
      books,
      [verse_number],
    );
    let v2 = text + " " + text_wrap_parenthesis(reference);
    return v2;
  }
  let mapped = list_map(vs, lambda);
  let text = list_join_newline_2(mapped);
  return text;
}
