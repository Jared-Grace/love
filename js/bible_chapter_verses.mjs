import { arguments_assert } from "./arguments_assert.mjs";
import { door43_version_chapter_verses } from "./door43_version_chapter_verses.mjs";
import { door43_version_or_null } from "./door43_version_or_null.mjs";
import { door43_version_record_download } from "./door43_version_record_download.mjs";
import { ebible_verses_storage_browser } from "./ebible_verses_storage_browser.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { property_get } from "./property_get.mjs";
export async function bible_chapter_verses(bible_folder, chapter_code) {
  arguments_assert(arguments, 2);
  ("$plain bible_folder");
  ("$plain chapter_code");
  ("The verses of one named chapter of one bible, whichever of the two places that bible came from.");
  ("EVERY OTHER QUESTION ABOUT A BIBLE ALREADY ASKS WHICH SHELF IT CAME OFF, and reading its words was the one that did not. Its books ask, its chapters ask, its credit asks - so a bible from the Door43 catalogue could be listed as a wording to choose between, and be asked for its books, and then be answered with nothing when the words themselves were wanted, because the words were looked for in the store that only ever held the eBible ones.");
  ("A translation that has not been uploaded is not thereby unreadable. Storage is where the browser reads from, and a thing that has been fetched onto this disk can be read here without being sent anywhere first - so comparing wordings does not wait on an upload, and an upload stays a separate decision about what the public is shown.");
  let door = door43_version_or_null(bible_folder);
  let elsewhere = null_not_is(door);
  if (elsewhere) {
    await door43_version_record_download(door);
    let door43_folder = property_get(door, "door43_folder");
    let carried = await door43_version_chapter_verses(
      door43_folder,
      chapter_code,
    );
    return carried;
  }
  let verses = await ebible_verses_storage_browser(bible_folder, chapter_code);
  return verses;
}
