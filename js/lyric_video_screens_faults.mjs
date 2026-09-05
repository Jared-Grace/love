import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { less_than } from "./less_than.mjs";
import { lyric_video_screens_faults_at } from "./lyric_video_screens_faults_at.mjs";
export function lyric_video_screens_faults(screens, room) {
  "$plain screens";
  "$plain room";
  "Everything wrong with a finished run of screens that can be found without watching it: a card the frame cannot hold, a card that shows for no time, a card with nothing on it, a join that is two moments instead of one, and a scrap left standing under a card that was cut off mid-sentence.";
  "★ THESE ARE EXACTLY THE FAULTS THAT WOULD OTHERWISE COST SOMEBODY A WHOLE CHAPTER TO FIND. A chapter runs for many minutes and there are more than a thousand recordings on this disk, so watching each one through to see whether a card overran its frame is the one check that can never be afforded. What is left over afterwards is what only a listener can catch - a name said wrongly, a sentence read as the wrong sense - and that is worth a person's time because nothing else will find it.";
  "★ IT REPORTS AND MENDS NOTHING. A card the frame cannot hold may be a passage with no better cut anywhere in it, and shrinking the lettering to make it fit is a decision belonging to whoever draws the video rather than to whoever counts what is wrong with it. The evening-up of a scrap tail refuses in exactly that case too, so a scrap reported here may be a refusal that was right.";
  "★ EVERY CARD IS ASKED WHETHER IT IS A SCRAP, NOT ONLY THE LAST ONE. A chapter is read in pieces and each piece is filled forward until its words run out, so a remainder falls at the end of every piece rather than only at the end of the chapter. Asking the last card alone was measured against four chapters and found the wrong four cards: it named chapter-closing verses that stand on their own and are right, and said nothing about fourteen genuine remainders inside one chapter.";
  "★ A RUN OF NO SCREENS IS NOT A FAULT HERE. Whether a chapter should have produced screens at all is a question about the recording, and answering it from an empty list would say the same thing twice for every chapter nobody has read yet.";
  arguments_assert(arguments, 2);
  let pixels_across = property_get(room, "pixels_across");
  let lines_max = property_get(room, "lines_max");
  let font_size = property_get(room, "font_size");
  let faults = [];
  let count = list_size(screens);
  for (let at = 0; less_than(at, count); at++) {
    lyric_video_screens_faults_at(
      screens,
      at,
      pixels_across,
      lines_max,
      font_size,
      faults,
    );
  }
  return faults;
}
