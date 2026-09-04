import { list_size_greater_than } from "./list_size_greater_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_audio_chapter_lines_timed } from "./bible_audio_chapter_lines_timed.mjs";
import { bible_audio_chunk_texts } from "./bible_audio_chunk_texts.mjs";
import { lyric_video_frame_sizes } from "./lyric_video_frame_sizes.mjs";
import { lyric_video_screen_room } from "./lyric_video_screen_room.mjs";
import { property_get } from "./property_get.mjs";
import { audio_words_timed_confidence_least } from "./audio_words_timed_confidence_least.mjs";
import { lyric_video_text_lines } from "./lyric_video_text_lines.mjs";
import { greater_than } from "./greater_than.mjs";
import { bible_audio_chunk_path } from "./bible_audio_chunk_path.mjs";
import { list_add } from "./list_add.mjs";
import { each_index } from "./each_index.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { audio_pieces_words_timed } from "./audio_pieces_words_timed.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
import { lyric_video_words_screens } from "./lyric_video_words_screens.mjs";
import { subtract } from "./subtract.mjs";
import { add } from "./add.mjs";
import { number_hundredths_rounded } from "./number_hundredths_rounded.mjs";
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
  let sizes = lyric_video_frame_sizes();
  let room = lyric_video_screen_room(sizes);
  let pixels_across = property_get(room, "pixels_across");
  let lines_max = property_get(room, "lines_max");
  let font_size = property_get(room, "font_size");
  let least = audio_words_timed_confidence_least();
  let long_orders = [];
  let pieces = [];
  function line_each(line, order) {
    let text = property_get(line, "text");
    let drawn = lyric_video_text_lines(text, pixels_across, font_size);
    let long = greater_than(drawn, lines_max);
    if (long) {
      let chunk = chunks[order];
      let number = property_get(chunk, "chunk");
      let audio = bible_audio_chunk_path(bible_folder, chapter_code, number);
      let piece = {
        audio: audio,
        text: text,
      };
      list_add(long_orders, order);
      list_add(pieces, piece);
    }
  }
  each_index(lines, line_each);
  let left = list_size(pieces);
  if (equal(left, 0)) {
    return lines;
  }
  let timed = await audio_pieces_words_timed(pieces);
  function report_of(order) {
    if (equal(timed, null)) {
      return null;
    }
    let at = long_orders.indexOf(order);
    if (less_than(at, 0)) {
      return null;
    }
    let report = timed[at];
    return report;
  }
  let screens = [];
  function screens_add(line, order) {
    let report = report_of(order);
    if (equal(report, null)) {
      list_add(screens, line);
      return;
    }
    let words = property_get(report, "words");
    let confidence = property_get(report, "confidence");
    let heard = list_size_greater_than(words, 0);
    let trusted = heard && not(less_than(confidence, least));
    if (not(trusted)) {
      list_add(screens, line);
      return;
    }
    let seconds = property_get(report, "seconds");
    let start = property_get(line, "start");
    let end = property_get(line, "end");
    let cut = lyric_video_words_screens(words, room, seconds);
    let left2 = list_size(cut);
    let last = subtract(left2, 1);
    function screen_each(screen, at) {
      let right = property_get(screen, "start");
      let number2 = add(start, right);
      let from = equal(at, 0) ? start : number_hundredths_rounded(number2);
      let right2 = property_get(screen, "end");
      let number3 = add(start, right2);
      let to = equal(at, last) ? end : number_hundredths_rounded(number3);
      let placed = {
        start: from,
        end: to,
        text: property_get(screen, "text"),
      };
      list_add(screens, placed);
    }
    each_index(cut, screen_each);
  }
  each_index(lines, screens_add);
  return screens;
}
