import { arguments_assert } from "./arguments_assert.mjs";
export function bible_usfm_markers_heading() {
  arguments_assert(arguments, 0);
  ("The usfm line marks whose line is a heading - a title the translators wrote over a passage rather than words of the passage.");
  ("Every one of them is dropped wherever a passage is laid out to be read, and the reason is the same reason the verse reader drops them: nobody said these words. They are a modern editor's summary of what follows, set in the same type as scripture and separated from it by nothing but a line break, so a reader who keeps them ends up with a translator's sentence sitting in the middle of a psalm looking exactly like the psalm.");
  ("The levels are spelled out rather than matched loosely, so that a longer mark beginning with a shorter one is never mistaken for it. That is the fault that let a section reference be read as a section.");
  ("The speaker mark sits here because it is the same kind of thing - the Song of Songs naming who is talking. It is the translators telling the reader what they worked out, not a line anybody says.");
  ("The psalm ascription is deliberately not in this list, though it looks like a heading and is printed like one. It is in the hebrew, and a hundred and seventeen psalms number it as verse one, so dropping it here would drop scripture.");
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
