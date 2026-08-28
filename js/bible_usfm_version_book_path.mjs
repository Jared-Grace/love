import { bible_usfm_shelf_book_path_or_null } from "./bible_usfm_shelf_book_path_or_null.mjs";
import { property_equals } from "./property_equals.mjs";
import { bible_usfm_version_get } from "./bible_usfm_version_get.mjs";
import { property_get } from "./property_get.mjs";
import { berean_book_path } from "./berean_book_path.mjs";
import { error_json } from "./error_json.mjs";
export async function bible_usfm_version_book_path(version, book_code) {
  "$plain version";
  "$plain book_code";
  "Where one book of one bible is written on this disk, whichever of the three shelves that bible came off.";
  "THE SHELVES NAME THEIR FILES DIFFERENTLY AND THAT IS WHY THIS EXISTS. The Berean publisher writes PSA.usfm and nothing else, so the name can be spelled out; the Door43 publisher writes 19-PSA.usfm and eBible writes 20-PSAengwebu.usfm, both with a shelf number in front that differs between bibles, so those folders have to be looked through to find the book. No one reading works on another publisher's shelf, and a caller that only wants the words of a psalm should not have to know which publisher it is talking to.";
  "A book the bible does not carry is a refusal here rather than nothing handed back, unlike one shelf down where nothing is the right answer. A translation may honestly be the New Testament alone; but by the time somebody is asking for the words to put on a screen they have already chosen the passage, and silently handing back nothing would show them an empty video instead of telling them the book is not there.";
  let known = bible_usfm_version_get(version);
  let berean = property_equals(known, "shelf", "berean");
  if (berean) {
    let spelled = berean_book_path(book_code);
    return spelled;
  }
  let folder = property_get(known, "folder");
  let shelf = property_get(known, "shelf");
  let found = await bible_usfm_shelf_book_path_or_null(
    shelf,
    folder,
    book_code,
  );
  if (found) {
    return found;
  }
  error_json({
    hint: "this bible does not carry that book",
    version,
    book_code,
    folder,
  });
}
