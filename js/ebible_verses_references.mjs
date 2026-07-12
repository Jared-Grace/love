import { list_join_newline_2 } from "./list_join_newline_2.mjs";
import { list_map } from "./list_map.mjs";
import { text_wrap_parenthesis } from "./text_wrap_parenthesis.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_version_books } from "./ebible_version_books.mjs";
import { ebible_parts_chapter_code_to_reference } from "./ebible_parts_chapter_code_to_reference.mjs";
import { ebible_verses } from "./ebible_verses.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function ebible_verses_references(bible_folder, chapter_code) {
  let books = await ebible_version_books(bible_folder);
  let vs = await ebible_verses(bible_folder, chapter_code);
  function lambda(v) {
    let text = property_get(v, "text");
    let verse_number = property_get(v, "verse_number");
    let reference = ebible_parts_chapter_code_to_reference(
      chapter_code,
      books,
      [verse_number],
    );
    let v2 = text_combine_multiple([
      text,
      " ",
      text_wrap_parenthesis(reference),
    ]);
    return v2;
  }
  let mapped = list_map(vs, lambda);
  let text = list_join_newline_2(mapped);
  return text;
}
