import { arguments_assert } from "./arguments_assert.mjs";
import { psalms_song_file_read_or_null } from "./psalms_song_file_read_or_null.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function psalms_song_file_chapter_take(file_name) {
  arguments_assert(arguments, 1);
  ("$plain file_name");
  ("The chapter of the Psalms a downloaded song's file name says it sings the whole of, and which take of that chapter the file is, or nothing when the name does not say that.");
  ("★ IT ANSWERS NOTHING FOR A NAME THAT SINGS PART OF A CHAPTER, AND THAT REFUSAL IS THE POINT RATHER THAN A GAP. A timing document is addressed by translation, book and chapter alone, so two songs of one chapter would be written to one address and the second would quietly take the first one's corrected times away. Until a part of a chapter has an address of its own there is nowhere to put it, and answering with the chapter would send it somewhere wrong.");
  ("★ IT ALSO ANSWERS NOTHING FOR A RECORDING THAT CAME OUT OF AN EDITING SESSION, FOR THE SAME REASON IT REFUSES A PART. An edited recording and the download it was made from are two singings of one chapter, so both would be written to the one address this answer leads to and the second would take the first one's times away. Which of the two to time is a listening decision, and this reading is not where it gets made.");
  ("★ THE READING ITSELF IS NOT HERE ANY MORE, AND THAT IS WHAT THIS FUNCTION IS NOW FOR. What a name of this kind says lives in one place, because the rule used to be spelled out twice - once here and once in the reading of a part - and the two had to be kept in step by hand. They were not: a mark that one of them needed was added to neither, and nine recordings were passed over in silence. What is left here is the refusal, which is this caller's own and belongs with this caller.");
  ("The shape of the answer is kept rather than widened. A caller wanting the verses or the editing mark asks the whole reading; a caller asking this one is asking whether the name is a whole chapter, and handing back pieces it has no address for would invite it to use them.");
  let read = psalms_song_file_read_or_null(file_name);
  let unread = equal(read, null);
  if (unread) {
    return null;
  }
  if (read.session_is) {
    return null;
  }
  let b = equal(read.verse_first, null);
  let part_is = not(b);
  if (part_is) {
    return null;
  }
  let whole = {
    chapter: read.chapter,
    take: read.take,
  };
  return whole;
}
