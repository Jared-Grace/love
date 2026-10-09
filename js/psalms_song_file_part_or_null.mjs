import { arguments_assert } from "./arguments_assert.mjs";
import { psalms_song_file_read_or_null } from "./psalms_song_file_read_or_null.mjs";
import { equal } from "./equal.mjs";
export function psalms_song_file_part_or_null(file_name) {
  arguments_assert(arguments, 1);
  ("$plain file_name");
  ("The chapter of the Psalms a downloaded song's file name says it sings part of, which verses of it, and which take the file is - or nothing where the name does not say that.");
  ("★ IT IS THE OTHER HALF OF THE READING THAT UNTIL NOW ANSWERED NOTHING, AND THE VERSES ARE WHAT MAKE THE ANSWER SAFE. Reading a part-chapter song as its chapter would send two songs to one timing document and the second would quietly take the first one's corrected times away, which is why the whole-chapter reader refuses these. Handing back the verses as well as the chapter is what lets a part be given an address nothing else can land on, so both songs of Psalm 147 can be timed and neither can overwrite the other.");
  ("★ IT ANSWERS NOTHING FOR A RECORDING THAT CAME OUT OF AN EDITING SESSION, WHICH IS THE SAME REFUSAL THE WHOLE-CHAPTER READING MAKES. An edited recording and the download it was made from sing the same verses, so both would be written to the one address this answer leads to and the second would take the first one's times away. Which of the two to time is a listening decision, and this reading is not where it gets made.");
  ("★ THE READING ITSELF IS NOT HERE ANY MORE, AND THAT IS WHAT THIS FUNCTION IS NOW FOR. What a name of this kind says lives in one place, because the rule used to be spelled out twice - once here and once in the reading of a whole chapter - and the two had to be kept in step by hand. They were not: a mark that one of them needed was added to neither, and nine recordings were passed over in silence. What is left here is the refusal, which is this caller's own and belongs with this caller.");
  ("A name with no verses in it is refused rather than answered with the chapter, for the reason the answer exists at all: the verses are the part of the address that keeps two songs of one chapter apart, and a part missing from the answer is a part missing from the address.");
  let read = psalms_song_file_read_or_null(file_name);
  let unread = equal(read, null);
  if (unread) {
    return null;
  }
  if (read.session_is) {
    return null;
  }
  let whole_is = equal(read.verse_first, null);
  if (whole_is) {
    return null;
  }
  let part = {
    chapter: read.chapter,
    verse_first: read.verse_first,
    verse_last: read.verse_last,
    take: read.take,
  };
  return part;
}
