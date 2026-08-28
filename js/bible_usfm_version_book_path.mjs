import { bible_usfm_version_get } from "./bible_usfm_version_get.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { berean_book_path } from "./berean_book_path.mjs";
import { door43_version_book_path_or_null } from "./door43_version_book_path_or_null.mjs";
import { error_json } from "./error_json.mjs";
export async function bible_usfm_version_book_path(version, book_code) {
  "$plain version";
  "$plain book_code";
  "Where one book of one bible is written on this disk, whichever of the two shelves that bible came off.";
  "THE TWO SHELVES NAME THEIR FILES DIFFERENTLY AND THAT IS WHY THIS EXISTS. The Berean publisher writes PSA.usfm and nothing else, so the name can be spelled out; the Door43 publisher writes 19-PSA.usfm, with a shelf number in front that differs between bibles, so the folder has to be looked through to find the book. Neither reading works on the other's shelf, and a caller that only wants the words of a psalm should not have to know which publisher it is talking to.";
  "A book the bible does not carry is a refusal here rather than nothing handed back, unlike one shelf down where nothing is the right answer. A translation may honestly be the New Testament alone; but by the time somebody is asking for the words to put on a screen they have already chosen the passage, and silently handing back nothing would show them an empty video instead of telling them the book is not there.";
  let known = bible_usfm_version_get(version);
  let shelf = property_get(known, "shelf");
  let berean = equal(shelf, "berean");
  if (berean) {
    let spelled = berean_book_path(book_code);
    return spelled;
  }
  let folder = property_get(known, "folder");
  let found = await door43_version_book_path_or_null(folder, book_code);
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
