import { browser_is } from "./browser_is.mjs";
import { and } from "./and.mjs";
import { not } from "./not.mjs";
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
  ("FETCHING THE CATALOGUE'S COPY IS SOMETHING ONLY A BUILD MACHINE CAN DO, so being a Door43 bible is no longer the whole of the question - where this is running is the other half. That road ends in downloading a release and unpacking it onto a disk, and a browser has neither the disk nor any business doing it; a page that could merely reach the road carried the whole unpacking tree in its bundle whether or not it ever walked it.");
  (
    "THAT ROAD IS ASKED FOR BY NAME RATHER THAN IMPORTED, because refusing to walk it and refusing to carry it are two different things. A bundler follows a plain import whether the branch runs or not, so every page that can read a bible was shipping the whole fetch-and-unpack tree in order never to use it. Named and fetched at the moment it is wanted, it is not in the page at all."
  );
  ("In a browser a Door43 bible is therefore read the same way every other bible is, out of storage - which answers with its words if it has been uploaded and with nothing if it has not. Nothing is the answer every caller here already handles, and it is the truth: a translation nobody has published is one this page cannot read.");
  let browser = browser_is();
  let here = not(browser);
  let door = door43_version_or_null(bible_folder);
  let elsewhere = null_not_is(door);
  let fetchable = and(elsewhere, here);
  if (fetchable) {
    let f_name = fn_name("door43_version_chapter_verses_downloaded");
    let fn = await function_import_relative(f_name);
    let carried = await fn(door, chapter_code);
    return carried;
  }
  let verses = await ebible_verses_storage_browser(bible_folder, chapter_code);
  return verses;
}
