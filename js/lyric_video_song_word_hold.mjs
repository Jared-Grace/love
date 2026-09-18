import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_songs_folder } from "./lyric_video_songs_folder.mjs";
import { path_join } from "./path_join.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { equal } from "./equal.mjs";
import { error } from "./error.mjs";
import { file_read } from "./file_read.mjs";
import { ardour_session_tick_seconds } from "./ardour_session_tick_seconds.mjs";
import { multiply } from "./multiply.mjs";
import { add } from "./add.mjs";
import { number_round_places } from "./number_round_places.mjs";
import { math_max } from "./math_max.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { lyric_video_word_done } from "./lyric_video_word_done.mjs";
import { lyric_video_fade_longest_seconds } from "./lyric_video_fade_longest_seconds.mjs";
import { half } from "./half.mjs";
import { lyric_video_lead_seconds } from "./lyric_video_lead_seconds.mjs";
import { subtract } from "./subtract.mjs";
import { not } from "./not.mjs";
import { less_than } from "./less_than.mjs";
export async function lyric_video_song_word_hold(
  name,
  line_index,
  word_index,
  quarters,
) {
  "$plain name";
  "$plain line_index";
  "$plain word_index";
  "$plain quarters";
  "Holds one word of a song lit for longer - a quarter, an eighth, a sixteenth more or less - writes the song's timing document back, and answers the word beside the moment its colour has really finished changing.";
  "★ THE TWIN OF MOVING A WORD, AND THE OTHER HALF OF PLACING ONE BY HAND. Moving says when a word begins; this says how long it stays lit, and until this existed only the first could be said. A word whose end the aligner cut short is fully lit for a few hundredths of a second between its two fades, which reads as a flicker rather than as a word being sung. Measured on the last word of a tomb line: lit for 342 milliseconds, of which 300 were fading in and 300 fading out, leaving 42 milliseconds actually blue.";
  "★ THE STEP IS A LENGTH OF NOTE, FOR THE REASON MOVING A WORD USES ONE. A word held too briefly is short by some part of a beat, and the beat is the song's own; the quarter note is read off the tempo of the Ardour session the document already names.";
  "★ A WORD IS NOT ALWAYS DONE WHERE IT ENDS, SO THIS DOES NOT ALWAYS SHOW. A word sung straight on into the next is lit until the next begins, whatever its own end says, so lengthening it changes nothing anybody can see. Only a word followed by a rest of a second or more, and the last word of a line, are lit to their own end - and those are the words worth holding. What comes back says which case this was rather than leaving it to be found in a rendering.";
  "★ THE CARD HAS TO OUTLIVE THE COLOUR, AND WHETHER IT DOES IS REPORTED RATHER THAN GUESSED AT. A card comes down a lead before the line's end, and the fade back to white finishes half a fade after the word is done; held past that, a word would still be blue when the card vanished. The line's end is an authored moment somebody heard, so it is not moved from here - but a hold the card cannot show is said out loud, because the alternative is a render that looks unchanged for no visible reason.";
  "★ HOW FAR THE WORD HAS BEEN HELD BY HAND IS KEPT ON THE WORD, IN QUARTER NOTES, the same promise moving one makes, and for the same reason: snapping the words to the melody again would otherwise throw the hold away without a word.";
  "A WORD CANNOT BE OVER BEFORE IT IS SUNG, so a hold that would end it before it begins stops at its beginning.";
  "A document that names no Ardour session has no tempo to measure a note by, and is refused rather than guessed at.";
  arguments_assert(arguments, 4);
  let folder = lyric_video_songs_folder();
  let file_name = name + ".json";
  let path_document = path_join([folder, file_name]);
  let document = await file_read_json(path_document);
  let ardour = document.ardour;
  if (equal(ardour, undefined)) {
    error(
      "this song's document names no Ardour session, so there is no tempo to measure a note by: " +
        name,
    );
  }
  let text = await file_read(ardour.session);
  let tick_seconds = ardour_session_tick_seconds(text);
  let quarter_seconds = multiply(tick_seconds, 1920);
  let line = document.lines[line_index];
  let words = line.words;
  let word = words[word_index];
  let quarters_number = Number(quarters);
  let seconds = multiply(quarters_number, quarter_seconds);
  let held = add(word.end, seconds);
  let rounded = number_round_places(held, 3);
  let end = math_max(rounded, word.start);
  word.end = end;
  let before = word.held_quarters;
  let so_far = equal(before, undefined) ? 0 : before;
  word.held_quarters = add(so_far, quarters_number);
  await file_overwrite_json(path_document, document);
  let done = lyric_video_word_done(words, word_index);
  let shows = equal(done, word.end);
  let fade = lyric_video_fade_longest_seconds();
  let right = half(fade);
  let white_done = add(done, right);
  let lead = lyric_video_lead_seconds();
  let card_end = subtract(line.end, lead);
  let b = less_than(card_end, white_done);
  let card_shows = not(b);
  let value = subtract(done, word.start);
  let r = {
    text: word.text,
    start: word.start,
    end: word.end,
    held_quarters: word.held_quarters,
    lit_seconds: number_round_places(value, 3),
    shows,
    card_shows,
  };
  return r;
}
