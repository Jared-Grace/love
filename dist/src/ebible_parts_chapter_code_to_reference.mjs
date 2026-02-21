import { ebible_parts_to_reference } from "../../../love/public/src/ebible_parts_to_reference.mjs";
import { ebible_chapter_code_parse } from "../../../love/public/src/ebible_chapter_code_parse.mjs";
export function ebible_parts_chapter_code_to_reference(
  chapter_code,
  books,
  verse_numbers,
) {
  let { book_code, chapter_name } = ebible_chapter_code_parse(chapter_code);
  const reference = ebible_parts_to_reference(
    books,
    book_code,
    verse_numbers,
    chapter_name,
  );
  return reference;
}
