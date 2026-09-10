import { arguments_assert } from "./arguments_assert.mjs";
import { bible_usfm_versions } from "./bible_usfm_versions.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { bible_usfm_version_books } from "./bible_usfm_version_books.mjs";
import { property_get } from "./property_get.mjs";
import { bible_usfm_version_book_text } from "./bible_usfm_version_book_text.mjs";
import { add } from "./add.mjs";
import { list_size } from "./list_size.mjs";
import { bible_usfm_markers_named_book } from "./bible_usfm_markers_named_book.mjs";
import { list_add } from "./list_add.mjs";
export async function bible_usfm_markers_named_shelf() {
  arguments_assert(arguments, 0);
  ("Every book of every usfm bible on this disk read for its line marks, and every mark the layout reader refuses to name, said with the bible and the book it was found in.");
  ("The refusal is asked of the reader itself rather than worked out again here. A check that decided for itself which marks are named would be a second copy of the four lists, agreeing today and drifting the first time one of them is added to, and the fault it is watching for is exactly a mark nobody has named.");
  ("How many books each bible gave up is counted and handed back, because a shelf that is not there reads as a shelf with nothing wrong on it. A folder moved or a download half unpacked leaves every bible offering no books, no mark is ever looked at, and the list of refusals comes out empty for want of anything to refuse.");
  let versions_held = bible_usfm_versions();
  let versions = object_property_names(versions_held);
  let unnamed = [];
  let rows = [];
  for (let version of versions) {
    let books = await bible_usfm_version_books(version);
    let marks = 0;
    for (let book of books) {
      let book_code = property_get(book, "book_code");
      let usfm = await bible_usfm_version_book_text(version, book_code);
      let right = bible_usfm_markers_named_book(
        version,
        book_code,
        usfm,
        unnamed,
      );
      marks = add(marks, right);
    }
    let row = {
      version,
      books: list_size(books),
      marks,
    };
    list_add(rows, row);
  }
  let found = {
    unnamed,
    rows,
  };
  return found;
}
