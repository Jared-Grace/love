import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { ebible_version_usfm_book_path_or_null } from "./ebible_version_usfm_book_path_or_null.mjs";
import { door43_version_book_path_or_null } from "./door43_version_book_path_or_null.mjs";
export async function bible_usfm_shelf_book_path_or_null(
  shelf,
  folder,
  book_code,
) {
  arguments_assert(arguments, 3);
  ("$plain shelf");
  ("$plain folder");
  ("$plain book_code");
  ("Where one book of a bible sits inside its download folder, asked of whichever shelf that bible came off, or nothing when the bible does not carry the book.");
  ("★ IT IS THE FILE NAMING AND NOTHING ELSE THAT DIFFERS. Both shelves reached here put a shelf number in front of the book code, so both have to be looked through rather than spelled out; but eBible writes its own folder word behind the code as well, so a search that works on one finds nothing on the other. Finding nothing is how a bible says it does not carry the book, which is why the wrong search does not announce itself.");
  ("The shelf a bible came off is the one thing the layer above should not have to know, so this is asked with the word rather than with a branch written out again at every reader. A fourth shelf is one more line here and nothing anywhere else.");
  let ebible = equal(shelf, "ebible");
  if (ebible) {
    let found_ebible = await ebible_version_usfm_book_path_or_null(
      folder,
      book_code,
    );
    return found_ebible;
  }
  let found = await door43_version_book_path_or_null(folder, book_code);
  return found;
}
