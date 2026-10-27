import { arguments_assert } from "./arguments_assert.mjs";
export function bible_bdb_openscriptures_url(file_name) {
  arguments_assert(arguments, 1);
  ("Where one file of the Open Scriptures Hebrew lexicon is fetched from: Brown, Driver and Briggs laid out entry by entry, and the index that joins each entry to a Strong's number.");
  ("The text of Brown, Driver and Briggs is public domain; the files that lay it out are Creative Commons Attribution 4.0, and the credit they ask for is the Open Scriptures Hebrew Bible Project. Asked from its own repository rather than kept here, so a correction made there arrives the next time anything is fetched.");
  let url =
    "https://raw.githubusercontent.com/openscriptures/HebrewLexicon/master/" +
    file_name;
  return url;
}
