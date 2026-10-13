import { arguments_assert } from "./arguments_assert.mjs";
import { bible_usfm_version_books } from "./bible_usfm_version_books.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { bible_usfm_version_book_verses_laid_out_write } from "./bible_usfm_version_book_verses_laid_out_write.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_add } from "./list_add.mjs";
export async function bible_usfm_version_verses_laid_out_write_all(version) {
  "$plain version";
  "Every book of a named bible cut into verses with the layout kept, each written where a browser can fetch it and sent up, one book at a time. It answers how many chapters were written in all and, book by book, which would not come apart.";
  "Each book is its own piece of work and is committed as it lands, under its own name, so a run that is stopped halfway has lost nothing and can be asked again.";
  arguments_assert(arguments, 1);
  let books = await bible_usfm_version_books(version);
  let book_codes = list_map_property(books, "book_code");
  await ai_git_noted();
  let written = 0;
  let uncut_books = [];
  for (let book_code of book_codes) {
    let wrote = await function_call_commit(
      bible_usfm_version_book_verses_laid_out_write,
      [version, book_code],
    );
    written = written + property_get(wrote, "written");
    let uncut = property_get(wrote, "uncut");
    if (list_empty_not_is(uncut)) {
      list_add(uncut_books, {
        book_code,
        uncut,
      });
    }
  }
  let all = {
    written,
    uncut_books,
  };
  return all;
}
