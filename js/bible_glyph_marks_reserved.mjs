import { arguments_assert } from "./arguments_assert.mjs";
export function bible_glyph_marks_reserved() {
  "The pictures this Bible holds back on purpose, and the reason each one is held, so that no word is ever seated on them.";
  "A RESERVED PICTURE IS THE ONLY MATERIAL A SAFE GROUP CAN BE BUILT FROM. Pictures side by side are the whole of the writing system and a group has no mark of its own, so a group of two can be spelled by accident wherever some word ends in its first picture and some word begins with its second. A picture no word touches cannot be reached from either side, and a group with one such half is unspellable by construction rather than by luck.";
  "THE POOL FILLS FROM BOTH ENDS AND NEVER EMPTIES AGAIN. Every one of the ninety four pictures the tables seat both ends a word and begins one; measured across the tables and the written chapters together, exactly two pictures in the whole vocabulary reach no word edge. So reserving is something done BEFORE a picture is wanted, not a search made afterwards - by the time a group needs a safe half there is nothing left to find.";
  "IT RECORDS WHAT IS ALREADY TRUE RATHER THAN CHANGING ANYTHING. Both of these were unspent before this list existed, each for its own reason and neither for this one. Writing them down does not take them out of use; it stops them being spent by somebody who had no way of knowing they were being kept, which is how an unwritten intention is always lost.";
  "THE REASON TRAVELS WITH THE NAME because the two reasons are not the same and a later reader has to be able to tell them apart. One of these is being kept FOR something and can still be spent on it; the other has been ruled out and must never be spent on anything. A bare list would flatten that difference and would eventually be read as a list of spare parts.";
  arguments_assert(arguments, 0);
  let reserved = [
    {
      name: "dove",
      why: "held for the Spirit's own verse. It is the one picture in the set that names a person of God directly, and spending it as half of a grammatical mark would put it out of reach of the passage that actually means it - the same argument that held the star back from the stars of the sky, and then let it carry a whole psalm.",
    },
    {
      name: "equals",
      why: "ruled out, and not merely unspent. A symmetric mark says its two sides may be exchanged, and God is love does not run backwards; the mark put a claim into a sentence its writer had deliberately kept out. It is kept in the vocabulary as the record of that decision rather than as a picture waiting for a word.",
    },
  ];
  return reserved;
}
