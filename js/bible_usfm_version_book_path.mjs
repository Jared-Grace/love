import { bible_usfm_version_book_path_or_null } from "./bible_usfm_version_book_path_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { bible_usfm_version_get } from "./bible_usfm_version_get.mjs";
import { property_get } from "./property_get.mjs";
import { error_json } from "./error_json.mjs";
export async function bible_usfm_version_book_path(version, book_code) {
  "$plain version";
  "$plain book_code";
  "Where one book of one bible is written on this disk, whichever of the three shelves that bible came off.";
  "THE SHELVES NAME THEIR FILES DIFFERENTLY, AND WHICH PUBLISHER SPELLS ITS FILENAMES WHICH WAY IS ANSWERED NEXT DOOR RATHER THAN HERE. This is that answer with a refusal put on the end of it, so the two can never come to disagree about where a book is written; they differ in one thing only, which is what to do when it is not found.";
  "A book the bible does not carry is a refusal here rather than nothing handed back, unlike next door where nothing is the right answer. A translation may honestly be the New Testament alone; but by the time somebody is asking for the words to put on a screen they have already chosen the passage, and silently handing back nothing would show them an empty video instead of telling them the book is not there.";
  let found = await bible_usfm_version_book_path_or_null(version, book_code);
  let unfound = null_is(found);
  if (not(unfound)) {
    return found;
  }
  let known = bible_usfm_version_get(version);
  let folder = property_get(known, "folder");
  error_json({
    hint: "this bible does not carry that book",
    version,
    book_code,
    folder,
  });
}
