import { arguments_assert } from "./arguments_assert.mjs";
export function bible_usfm_markers_introduction() {
  arguments_assert(arguments, 0);
  ("The usfm line marks that open the publisher's introduction to a book - the essay, the outline and the glossary a printing sets before the first chapter.");
  ("Every one of them is thrown away wherever a passage is laid out to be read, for the reason the headings are thrown away: it is somebody's writing about the book rather than the book. It is more dangerous than a heading, because it is paragraphs of ordinary prose rather than one line, so a reader who kept it would have pages of a modern preface standing where a chapter should be.");
  ("They sit in a list of their own rather than among the file's bookkeeping because they are neither bookkeeping nor a running head. Naming them apart says what they are, and keeps each list one idea.");
  ("No chapter reading meets them today, because they stand before the first chapter mark and the chapter is taken by that mark. They are named all the same: a reading that is asked to refuse a mark it does not know must be told about every mark that exists, not only the ones that reach it by the road currently in use.");
  let markers = [
    "ib",
    "ili",
    "ili1",
    "ili2",
    "im",
    "imi",
    "imt",
    "imt1",
    "imt2",
    "imt3",
    "imt4",
    "ip",
    "ipi",
    "is",
    "is1",
    "is2",
  ];
  return markers;
}
