import { text_upper_to } from "./text_upper_to.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_usfm_version_get } from "./bible_usfm_version_get.mjs";
import { property_equals } from "./property_equals.mjs";
import { berean_book_path } from "./berean_book_path.mjs";
import { property_get } from "./property_get.mjs";
import { bible_usfm_shelf_book_path_or_null } from "./bible_usfm_shelf_book_path_or_null.mjs";
export async function bible_usfm_version_book_path_or_null(version, book_code) {
  arguments_assert(arguments, 2);
  ("$plain version");
  ("$plain book_code");
  ("Where one book of one bible is written on this disk, whichever of the three shelves that bible came off, or nothing at all when that bible does not carry the book.");
  ("IT IS THE SAME FINDING THE REFUSING ONE DOES, WITH THE REFUSAL TAKEN OFF THE END. A reader that has already chosen a passage should be told plainly that the book is not there, which is why the door next to this one refuses; but a sweep that walks all sixty-six books of nineteen bibles meets a missing book several hundred times over and means nothing by it. Refusing there would turn the ordinary shape of the shelf into an error, and the sweep would have to catch and discard the very thing it is measuring.");
  ("The branch that knows which publisher spells its filenames which way lives here now and is called from there, so the two answers cannot come to disagree about where a book is. They differ in one thing only: what to do when it is not found.");
  ("THE BOOK IS PUT INTO CAPITALS HERE AND NOWHERE ELSE, BECAUSE THIS IS THE ONE DOOR EVERY USFM READER GOES THROUGH. All three shelves write the code in capitals in their filenames, so a book asked for in small letters is spelled as a file that is not there on the berean shelf and searched for and never found on the other two - and not found is how a bible says it does not carry the book, so a wrongly spelled word comes back wearing the bible's own honest answer and nobody is told they typed it. Every reader above this is made to stop caring about capitals by this one line, and no two of them can drift apart over it, because there is only the one line.");
  let book_code_upper = text_upper_to(book_code);
  let known = bible_usfm_version_get(version);
  let berean = property_equals(known, "shelf", "berean");
  if (berean) {
    let spelled = berean_book_path(book_code_upper);
    return spelled;
  }
  let folder = property_get(known, "folder");
  let shelf = property_get(known, "shelf");
  let found = await bible_usfm_shelf_book_path_or_null(
    shelf,
    folder,
    book_code_upper,
  );
  return found;
}
