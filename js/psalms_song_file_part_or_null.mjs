import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { psalms_119_stanza_verses_or_null } from "./psalms_119_stanza_verses_or_null.mjs";
export function psalms_song_file_part_or_null(file_name) {
  arguments_assert(arguments, 1);
  ("$plain file_name");
  ("The chapter of the Psalms a downloaded song's file name says it sings part of, which verses of it, and which take the file is - or nothing where the name does not say that.");
  ("★ IT IS THE OTHER HALF OF THE READING THAT UNTIL NOW ANSWERED NOTHING, AND THE VERSES ARE WHAT MAKE THE ANSWER SAFE. Reading a part-chapter song as its chapter would send two songs to one timing document and the second would quietly take the first one's corrected times away, which is why the whole-chapter reader refuses these. Handing back the verses as well as the chapter is what lets a part be given an address nothing else can land on, so both songs of Psalm 147 can be timed and neither can overwrite the other.");
  ("A PART IS SAID TWO WAYS IN THIS FOLDER AND BOTH ARE READ, because both are already on the disk and neither is going to be renamed. One says the verses outright - 147_1-11, or 145_1_13a where the split falls inside a verse - and the other names a stanza of Psalm 119 by its hebrew letter. They are told apart by whether the part opens with a digit, which is the whole difference between them.");
  ("The two ends come back as words rather than numbers, because a half verse is written with a letter after the number and 13a is not a quantity. Nothing here counts verses; the ends are handed on to be spelled into an address and compared with other ends spelled the same way.");
  ("A stanza name is only read for Psalm 119, and any other chapter with a word where its verses should be is refused. Psalm 119 is the only chapter these songs cut into named stanzas, so a letter beside another number is a name this does not understand rather than a stanza of that chapter.");
  ("The separator between the two ends may be either mark. A dash and an underscore both appear in this folder for the same song sung once - Psalm_147_1-11.wav beside Psalm 147_1_11.mp3 - so reading only one of them would time one of a pair and pass silently over the other.");
  ("The reading is one shape rather than a strip at a time, for the same reason the whole-chapter reading is: a name that stops matching part way through is a name saying something else, and reading it in steps would leave a half-read name looking like a passage.");
  let shape = new RegExp(
    "^Psalms?[ _](\\d+)[ _](\\d+[a-z]?[-_]\\d+[a-z]?|[A-Za-z]+)( \\((\\d+)\\))?\\.(wav|mp3)$",
    "i",
  );
  let found = file_name.match(shape);
  if (not(found)) {
    return null;
  }
  let chapter = Number(found[1]);
  let part = found[2];
  let take = found[4] ? Number(found[4]) : 0;
  let ends = new RegExp("^(\\d+[a-z]?)[-_](\\d+[a-z]?)$", "i");
  let spelled = part.match(ends);
  if (spelled) {
    let read = {
      chapter: chapter,
      verse_first: spelled[1],
      verse_last: spelled[2],
      take: take,
    };
    return read;
  }
  let acrostic = equal(chapter, 119);
  if (not(acrostic)) {
    return null;
  }
  let verses = psalms_119_stanza_verses_or_null(part);
  if (equal(verses, null)) {
    return null;
  }
  let named = {
    chapter: chapter,
    verse_first: String(verses.first),
    verse_last: String(verses.last),
    take: take,
  };
  return named;
}
