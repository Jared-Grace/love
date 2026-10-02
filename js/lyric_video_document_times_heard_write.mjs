import { arguments_assert } from "./arguments_assert.mjs";
import { file_exists } from "./file_exists.mjs";
import { not } from "./not.mjs";
import { lyric_video_document_times_unheard } from "./lyric_video_document_times_unheard.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { lyric_video_document_times_measure } from "./lyric_video_document_times_measure.mjs";
import { equal } from "./equal.mjs";
import { lyric_video_hearing_record } from "./lyric_video_hearing_record.mjs";
import { lyric_video_transcript_record } from "./lyric_video_transcript_record.mjs";
import { lyric_video_document_times_hand_is } from "./lyric_video_document_times_hand_is.mjs";
import { list_map } from "./list_map.mjs";
import { number_is } from "./number_is.mjs";
import { audio_file_duration } from "./audio_file_duration.mjs";
import { lyric_timing_lines_timed } from "./lyric_timing_lines_timed.mjs";
import { lyric_video_times_machine_word } from "./lyric_video_times_machine_word.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function lyric_video_document_times_heard_write(
  chapter,
  path_audio,
  path_document,
  name_document,
) {
  "$plain chapter";
  "$plain path_audio";
  "$plain path_document";
  "$plain name_document";
  "Listens to one recording twice over, keeps both readings, and writes the times into the timing document of the passage it sings unless a person put times there already.";
  "★ IT IS HANDED THE RECORDING AND THE DOCUMENT RATHER THAN FINDING THEM, WHICH IS THE WHOLE OF WHAT LETS A PART OF A CHAPTER BE TIMED. Everything below is the same work for a whole chapter and for a stanza - the same two readings, the same record kept, the same refusal to write over somebody's ear - and only finding the two files differs between them. That difference was once welded to this work, so a stanza could not be timed at all: fifteen stanzas of Psalm 119 and four halves of two other psalms sat holding the flat spread they were drafted with, because the only command that could listen took a chapter number and a stanza has none.";
  "★ IT WRITES ONLY WHERE NO PERSON HAS TIMED, AND REFUSES OTHERWISE RATHER THAN MERGING. Times a person tapped by ear are better than these everywhere and not only on the lines flagged here, so there is no reading under which mixing the two improves a document somebody has already worked on. What it will happily write over is its own earlier listening, which is why the document is asked whose work it holds rather than whether it has been touched: a machine that could not improve on itself would be stuck at whatever it managed the first time.";
  "★ IT LEAVES A MARK SAYING THE TIMES ARE A MACHINE'S, AND WITHOUT THAT MARK THE REFUSAL ABOVE EATS ITS OWN WORK. The times go in through the very function the tapping desk writes through, down to the same twentieth of a second between lines, so a document this wrote and a document somebody sat through are identical in every number they hold. Twenty three of them were written before the mark existed and every one was thereafter defended as though a person had made it.";
  "★ IT LISTENS AND KEEPS THE HEARING WHETHER OR NOT IT IS ALLOWED TO WRITE, AND THAT ORDER IS THE WHOLE POINT. Refusing to write was welded to refusing to listen at first, so the passages somebody had already timed by hand - the only passages whose right answers are known - were exactly the ones no reading was ever recorded for, and they are the ones any question about how well the machine hears has to be settled against. Listening is also what costs the minute; declining to write it down afterwards saves nothing and throws away the minute.";
  "★ WHERE EVERY LINE WAS PLACED IS KEPT AND NOT ONLY THE LINES THAT DISAGREED, because the disagreeing lines are a biased sample of exactly the wrong kind. How far one reading runs ahead of the other across a whole song can only be read off all of them; read off the flagged ones it is guaranteed to look large, since largeness is the reason they were flagged.";
  "★ AND THE TRANSCRIBER'S WORDS ARE KEPT BESIDE THAT, BECAUSE THE SUMMARY'S WORST ANSWER IS THE ONE IT CANNOT EXPLAIN. Where a line's words went unheard the summary holds no time for it, and no time is the shape a person can do nothing with: they are told a line is unplaced and given nothing to look at. The words say what was heard there instead, they cost nothing to store, and getting them back any other way means hearing the whole recording again for twenty minutes.";
  "★ WHAT IS WRITTEN IS THE ALIGNER'S TIMES AND NEVER THE HEARING'S. The aligner is handed the words and can only decide where they fall; the blind hearing stayed about a quarter of a second out even after its constant lead was taken off. The hearing is here to disagree, not to place, so the lines it disagrees on are handed back rather than acted on - deciding between two readings of a sung line is listening, and nothing here can listen.";
  "★ AND THE LINES ARE HANDED BACK WHOLE, WORST FIRST, BECAUSE THE ONE THING A PERSON READING THIS CAN DO WITH THEM IS GO AND LISTEN TO ONE. For a long time only their numbers came back. Everything that makes a number worth looking at - how far the two readings are apart, which way round they are, and the words sung there - was measured, filed in the record kept of the hearing, and then dropped one call before the person who needed it, so a psalm came back as eleven bare numbers out of fifteen with nothing to choose between them. Measured 2026-10-02, the distance is a real signal and the one worth sorting by; the reasoning for that, and for why the direction does not get to sort them, lives with the thing that does the sorting.";
  "★ HOW LONG THE SONG IS GETS READ OFF THE RECORDING WHERE THE DOCUMENT DOES NOT ALREADY CARRY IT, BECAUSE THE CLOSING LINE HAS NOTHING ELSE TO END ON. A line ends where the next one begins and the last line ends where the singing stops, so the length is the one number the final line depends on and the only one not derivable from the moments themselves. It used to be taken from the document and nowhere else. That was invisible for a long time because the drafting walk writes the length as it drafts, so every document that had ever been listened to carried one - 178 of the 179 when this was found. The one that did not was the first document reached here that had never been drafted at all, and its closing line came out holding a beginning and no end, which is exactly the shape the line builder says in its own words a person can do nothing with. Measured 2026-10-02 on Psalm 93, and nothing anywhere went red: the write reported success, fifteen lines, and a last line going nowhere.";
  "The length is written onto the document rather than used and dropped, because every other document here carries one and whatever reads these next has no way of telling a document that never had a length from one whose song is a different length than it says. A recording the prober cannot measure leaves the document exactly as it was, so a broken install subtracts a number rather than writing a wrong one.";
  "The chapter is carried through only so that the record of a passage that could not be read says which psalm it belonged to, which is what lets these line up in a table across the psalter.";
  arguments_assert(arguments, 4);
  let there = await file_exists(path_document);
  if (not(there)) {
    let undrafted = lyric_video_document_times_unheard(
      chapter,
      "this passage has no timing document to write into yet",
    );
    return undrafted;
  }
  let document = await file_read_json(path_document);
  let measured = await lyric_video_document_times_measure(
    path_audio,
    path_document,
  );
  if (equal(measured, null)) {
    let unheard = lyric_video_document_times_unheard(
      chapter,
      "one of the two readings could not read this recording",
    );
    return unheard;
  }
  let hearing = {
    chapter,
    lines: document.lines.length,
    match_rate: measured.match_rate,
    confidence: measured.confidence,
    words_written: measured.words_written,
    words_heard: measured.words_heard,
    words_matched: measured.words_matched,
    starts: measured.starts,
    starts_heard: measured.starts_heard,
    flagged: measured.flagged,
  };
  await lyric_video_hearing_record(name_document, hearing);
  await lyric_video_transcript_record(name_document, measured.transcript);
  let flagged = measured.flagged;
  let hand = lyric_video_document_times_hand_is(document);
  if (hand) {
    let worked = {
      chapter,
      heard: true,
      wrote: false,
      why: "a person has timed this document and their ear beats this everywhere",
      lines: document.lines.length,
      match_rate: measured.match_rate,
      confidence: measured.confidence,
      flagged,
    };
    return worked;
  }
  function text_of(line) {
    let text = line.text;
    return text;
  }
  let texts = list_map(document.lines, text_of);
  let said = number_is(document.duration);
  if (not(said)) {
    let seconds = await audio_file_duration(path_audio);
    let measurable = number_is(seconds);
    if (measurable) {
      document.duration = seconds;
    }
  }
  let lines = lyric_timing_lines_timed(
    measured.starts,
    texts,
    document.duration,
  );
  document.lines = lines;
  document.times_from = lyric_video_times_machine_word();
  await file_overwrite_json(path_document, document);
  let written = {
    chapter,
    heard: true,
    wrote: true,
    lines: lines.length,
    match_rate: measured.match_rate,
    confidence: measured.confidence,
    flagged,
    why: null,
  };
  return written;
}
