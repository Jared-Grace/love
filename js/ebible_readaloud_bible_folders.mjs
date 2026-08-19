import { ebible_bible_folders_sorted } from "./ebible_bible_folders_sorted.mjs";
import { door43_version_or_null } from "./door43_version_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_filter } from "./list_filter.mjs";
export function ebible_readaloud_bible_folders() {
  "Every bible this repo ships whose verses are cut apart by eBible's read-aloud edition - the set every question about read-aloud is actually about.";
  "Not every shipped bible. A bible carried from the other catalogue arrives with its verses already marked in its own files, so eBible publishes no read-aloud edition for it and never will. Asked of the whole shipped list, every read-aloud question answers about that bible as though something were missing from it: no edition published, none downloaded, none measurable. All three are true of eBible and none of them is true of the bible, which is reading a fact about one source as a fault in a text that is being served to readers correctly.";
  "The distinction is drawn here once rather than at each of those questions, so that carrying a bible from a third source later is one line in the catalogue beside this and not three separate discoveries made one red gate at a time.";
  let shipped = ebible_bible_folders_sorted();
  function readaloud_is(bible_folder) {
    let carried = door43_version_or_null(bible_folder);
    let elsewhere = null_is(carried);
    return elsewhere;
  }
  let bible_folders = list_filter(shipped, readaloud_is);
  return bible_folders;
}
