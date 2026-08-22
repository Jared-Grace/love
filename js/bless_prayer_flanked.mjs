import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function bless_prayer_flanked(prayer, before, after) {
  arguments_assert(arguments, 3);
  ("A prayer as it is SHOWN - the words themselves, with a little picture standing on");
  ("either side of them.");
  ("Two of them and not one, because one sitting in front reads as a label on the prayer");
  ("and a pair standing either side reads as the prayer being held. It is also what makes");
  ("the line look centred on a wide screen, where a single picture on the left pulls the");
  ("whole sentence off balance.");
  ("The words in the middle are untouched. Every prayer in this game is written in one");
  ("place so that no screen can quietly word it differently, and this keeps that true: it");
  ("only ever puts something on the outside of a sentence it was handed, so there is no");
  ("way for it to change what is prayed.");
  ("Shown and prayed are therefore two different pieces of text, and the difference");
  ("matters beyond the look. The wait before the amen is measured from the words, and");
  ("pictures are not words - measured from this, every prayer would be held back a little");
  ("longer for decoration nobody has to read. So the panel prints this and times itself");
  ("from the prayer.");
  let text = text_combine_multiple([before, " ", prayer, " ", after]);
  return text;
}
