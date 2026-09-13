import { arguments_assert } from "./arguments_assert.mjs";
import { text_from_number } from "./text_from_number.mjs";
import { equal } from "./equal.mjs";
import { lyric_video_song_recording_named } from "./lyric_video_song_recording_named.mjs";
export function lyric_timing_chapter_said(chosen) {
  arguments_assert(arguments, 1);
  ("$plain chosen");
  ("How the timing screen says which recording it is on, without the book: the chapter, the verses where a song sings only part of one, and the mark where the passage has been sung more than once.");
  ("★ IT IS SAID IN ONE PLACE BECAUSE IT IS SHOWN IN TWO. The button in the row at the top and the line that says what is being fetched are answering the same question a second apart, and two spellings of it would let the button say one recording while the line underneath said another - which is the exact confusion the row exists to remove.");
  ("The book is left out because both places already have it: the row has a button of its own for it, and the loading line puts it in front. Adding it here would say it twice.");
  ("The mark is put on by the same function the reports use, so a button on this screen and a row in a run's answer name a recording the same way and can be lined up by eye.");
  let number = text_from_number(chosen.chapter_number);
  let whole = equal(chosen.verse_first, "");
  if (whole) {
    let plain = lyric_video_song_recording_named(number, chosen.mark);
    return plain;
  }
  let ends = number + ":" + chosen.verse_first + "-" + chosen.verse_last;
  let said = lyric_video_song_recording_named(ends, chosen.mark);
  return said;
}
