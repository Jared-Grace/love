import { arguments_assert } from "./arguments_assert.mjs";
export function usfm_markers_heading() {
  arguments_assert(arguments, 0);
  ("The usfm line marks whose line is a heading - a title the translators wrote over a passage rather than words of the passage.");
  ("A heading is kept when a passage is laid out for copying and taken away when a passage is cut into verses, and those are two different duties owed to the same line. Somebody pasting a psalm wants the title the printing gives it; a reader showing one verse at a time must not have it, because standing beside a verse it reads as scripture.");
  ("The levels are spelled out rather than matched loosely, so that a longer mark beginning with a shorter one is never mistaken for it. That is the fault that let a section reference be read as a section.");
  ("The speaker mark sits here because it is the same kind of thing - the Song of Songs naming who is talking. It is the translators telling the reader what they worked out, not a line anybody says.");
  let markers = [
    "s",
    "s1",
    "s2",
    "s3",
    "s4",
    "s5",
    "ms",
    "ms1",
    "ms2",
    "ms3",
    "mr",
    "mt",
    "mt1",
    "mt2",
    "mt3",
    "sp",
  ];
  return markers;
}
