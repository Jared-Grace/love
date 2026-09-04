import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
export function psalms_song_file_chapter_take(file_name) {
  arguments_assert(arguments, 1);
  ("$plain file_name");
  ("The chapter of the Psalms a downloaded song's file name says it sings the whole of, and which take of that chapter the file is, or nothing when the name does not say that.");
  ("★ IT ANSWERS NOTHING FOR A NAME THAT SINGS PART OF A CHAPTER, AND THAT REFUSAL IS THE POINT RATHER THAN A GAP. A timing document is addressed by translation, book and chapter alone, so two songs of one chapter would be written to one address and the second would quietly take the first one's corrected times away. Until a part of a chapter has an address of its own there is nowhere to put it, and answering with the chapter would send it somewhere wrong.");
  ("A NAME ENDING IN A NUMBER IN ROUND BRACKETS IS A DIFFERENT SINGING, NOT A SECOND COPY OF THE SAME ONE. A browser adds that marker when a file of the same name is already there, and the songs it marks were measured at four different lengths for one chapter, so they are four renditions. Which of them to keep is a listening decision nobody here can make; the number is handed back so a caller can put them in the order they arrived and say plainly that the others exist.");
  ("The reading is one shape rather than a strip at a time because every part of it has to hold for the name to mean this: the word, one separator, the number, the marker if there is one, and the ending of a sound file. A name that stops matching part way through is a name saying something else, and reading it in steps would leave a half-read name looking like a whole chapter.");
  let shape = new RegExp(
    "^Psalms?[ _](\\d+)( \\((\\d+)\\))?\\.(wav|mp3)$",
    "i",
  );
  let found = file_name.match(shape);
  if (not(found)) {
    return null;
  }
  let read = {
    chapter: Number(found[1]),
    take: found[3] ? Number(found[3]) : 0,
  };
  return read;
}
