import { arguments_assert } from "./arguments_assert.mjs";
export function bible_usfm_markers_dropped() {
  arguments_assert(arguments, 0);
  ("The usfm line marks whose whole line is thrown away when a passage is laid out for a person to read - the file's own bookkeeping and the translator's apparatus.");
  ("Three sorts sit here for one reason. The file heading marks say which translation this is and how it is encoded; the running heads and titles are what a printer puts at the top of a page; the parallel passage note and the chapter label are a study aid. None of them is a word of the book, and none of them is something a person copying a psalm out asked to copy.");
  ("The chapter mark itself is in the list because the caller has already used it to find the chapter. Left in, it would print the chapter's number as a line of the chapter.");
  let markers = [
    "id",
    "ide",
    "usfm",
    "h",
    "toc1",
    "toc2",
    "toc3",
    "c",
    "cl",
    "cp",
    "cd",
    "r",
    "sr",
    "iex",
    "qa",
    "rem",
  ];
  return markers;
}
