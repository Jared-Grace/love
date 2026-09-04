import { bible_audio_chapter_screens_timed_line_each } from "./bible_audio_chapter_screens_timed_line_each.mjs";
import { bible_audio_chapter_screens_timed_screens_add } from "./bible_audio_chapter_screens_timed_screens_add.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_audio_chapter_lines_timed } from "./bible_audio_chapter_lines_timed.mjs";
import { bible_audio_chunk_texts } from "./bible_audio_chunk_texts.mjs";
import { property_get } from "./property_get.mjs";
import { each_index } from "./each_index.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
export async function bible_audio_chapter_screens_timed(
  bible_folder,
  chapter_code,
) {
  "$plain bible_folder";
  "$plain chapter_code";
  "The screens of a recorded chapter with the second each one appears and the second it goes, a long piece of sound divided across several of them on the moments its own words were heard at.";
  "★ A LONG PIECE USED TO BE ONE CARD SET SMALLER, AND IT IS NOW SEVERAL CARDS AT FULL SIZE. The old reason for that was true when it was written: the voice hands back sound with no times inside it, so a card could only be cut at a moment reasoned from how long the words are, which is guessing at the one thing the video exists to get right. What changed is that the moments can now be heard - the words are already known, so a reader is asked only where each of them falls, and the cut is placed on a measured word boundary. The longest card in the bible is the genealogy at the end of the third of Luke, and it went from one screen of a third the lettering to ten screens at the full size, off the recording that already existed.";
  "★ ONLY THE PIECES THAT WOULD NOT FIT ARE LISTENED TO, WHICH IS WHAT KEEPS THIS AFFORDABLE. Hearing a piece costs about half a second for every second of sound, and most pieces are one verse that stands on one screen with room to spare - so asking about them would multiply the cost of a chapter by ten to learn nothing. What decides is how many lines the words really break into on the frame, which is the same question the cutting itself asks, so a piece is either short enough to stand as it is or long enough to be worth the listening, and there is no third case.";
  "★ A PIECE WHOSE WORDS DID NOT MATCH ITS SOUND IS LEFT WHOLE RATHER THAN CUT ON TIMES NOBODY BELIEVES. An aligner cannot refuse: handed the wrong words it reports times that look exactly like right ones, so the confidence it returns is read and a poor one sends the piece back to being one shrunken card. That card is worse to read and it is not wrong, which is the right way round for a fallback.";
  "★ THE FIRST SCREEN OF A PIECE BEGINS EXACTLY WHERE THE PIECE BEGINS AND THE LAST ENDS EXACTLY WHERE IT ENDS, TAKEN FROM THE CHAPTER'S OWN MARKS AND NOT FROM THE SOUND FILE'S LENGTH. Those two numbers already share a value with the pieces either side of them, and the whole chapter's joins hold because of it. A last screen ending at its own file's length instead would sit a hundredth of a second away from the piece that follows, and the screen would flicker to black once per piece for the length of the chapter.";
  arguments_assert(arguments, 2);
  let lines = await bible_audio_chapter_lines_timed(bible_folder, chapter_code);
  let chunks = await bible_audio_chunk_texts(bible_folder, chapter_code);
  let r2 = bible_audio_chapter_screens_timed_line_each(
    chunks,
    bible_folder,
    chapter_code,
  );
  let line_each = property_get(r2, "line_each");
  let pieces = property_get(r2, "pieces");
  let long_orders = property_get(r2, "long_orders");
  let least = property_get(r2, "least");
  let room = property_get(r2, "room");
  each_index(lines, line_each);
  let left = list_size(pieces);
  if (equal(left, 0)) {
    return lines;
  }
  let r = await bible_audio_chapter_screens_timed_screens_add(
    pieces,
    long_orders,
    least,
    room,
  );
  let screens_add = property_get(r, "screens_add");
  let screens = property_get(r, "screens");
  each_index(lines, screens_add);
  return screens;
}
