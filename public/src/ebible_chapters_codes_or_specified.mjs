import { ebible_chapter_code_to_book } from "../../../love/public/src/ebible_chapter_code_to_book.mjs";
import { null_not_is } from "../../../love/public/src/null_not_is.mjs";
import { ebible_chapters } from "../../../love/public/src/ebible_chapters.mjs";
export async function ebible_chapters_codes_or_specified(
  bible_folder,
  book_code,
  chapter_code_specified,
) {
  if (null_not_is(chapter_code_specified)) {
    book_code = ebible_chapter_code_to_book(chapter_code_specified);
  }
  let chapters = await ebible_chapters(bible_folder, book_code);
  if (null_not_is(chapter_code_specified)) {
    chapters = [chapter_code_specified];
  }
  return chapters;
}
