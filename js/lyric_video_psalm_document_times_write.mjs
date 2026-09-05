import { arguments_assert } from "./arguments_assert.mjs";
import { folder_user_downloads_path } from "./folder_user_downloads_path.mjs";
import { psalms_songs_folder_chapters } from "./psalms_songs_folder_chapters.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { equal } from "./equal.mjs";
import { lyric_video_document_times_unheard } from "./lyric_video_document_times_unheard.mjs";
import { lyric_video_bible_document_path } from "./lyric_video_bible_document_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { not } from "./not.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { lyric_video_document_times_measure } from "./lyric_video_document_times_measure.mjs";
import { lyric_video_hearing_record } from "./lyric_video_hearing_record.mjs";
import { lyric_video_transcript_record } from "./lyric_video_transcript_record.mjs";
import { lyric_video_document_times_hand_is } from "./lyric_video_document_times_hand_is.mjs";
import { list_map } from "./list_map.mjs";
import { lyric_timing_lines_timed } from "./lyric_timing_lines_timed.mjs";
import { lyric_video_times_machine_word } from "./lyric_video_times_machine_word.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function lyric_video_psalm_document_times_write(version, chapter) {
  arguments_assert(arguments, 2);
  ("$plain version");
  ("$plain chapter");
  ("Listens to one chapter of the Psalms twice over, keeps both readings, and writes the times into that chapter's timing document unless a person put times there already.");
  ("★ IT WRITES ONLY WHERE NO PERSON HAS TIMED, AND REFUSES OTHERWISE RATHER THAN MERGING. Times a person tapped by ear are better than these everywhere and not only on the lines flagged here, so there is no reading under which mixing the two improves a document somebody has already worked on. What it will happily write over is its own earlier listening, which is why the document is asked whose work it holds rather than whether it has been touched: a machine that could not improve on itself would be stuck at whatever it managed the first time.");
  ("★ IT LEAVES A MARK SAYING THE TIMES ARE A MACHINE'S, AND WITHOUT THAT MARK THE REFUSAL ABOVE EATS ITS OWN WORK. The times go in through the very function the tapping desk writes through, down to the same twentieth of a second between lines, so a document this wrote and a document somebody sat through are identical in every number they hold. Twenty three of them were written before the mark existed and every one was thereafter defended as though a person had made it.");
  ("★ IT LISTENS AND KEEPS THE HEARING WHETHER OR NOT IT IS ALLOWED TO WRITE, AND THAT ORDER IS THE WHOLE POINT. Refusing to write was welded to refusing to listen at first, so the chapters somebody had already timed by hand - the only chapters whose right answers are known - were exactly the chapters no reading was ever recorded for, and they are the ones any question about how well the machine hears has to be settled against. Listening is also what costs the minute; declining to write it down afterwards saves nothing and throws away the minute.");
  ("★ WHERE EVERY LINE WAS PLACED IS KEPT AND NOT ONLY THE LINES THAT DISAGREED, because the disagreeing lines are a biased sample of exactly the wrong kind. How far one reading runs ahead of the other across a whole song can only be read off all of them; read off the flagged ones it is guaranteed to look large, since largeness is the reason they were flagged. Asked that way over twenty six songs, the fixed lead the flagging subtracts came out right - the extra each song wanted had a middle of three hundredths of a second.");
  ("★ AND THE TRANSCRIBER'S WORDS ARE KEPT BESIDE THAT, BECAUSE THE SUMMARY'S WORST ANSWER IS THE ONE IT CANNOT EXPLAIN. Where a line's words went unheard the summary holds no time for it, and no time is the shape a person can do nothing with: they are told a line is unplaced and given nothing to look at. The words say what was heard there instead, they cost nothing to store, and getting them back any other way means hearing the whole recording again for twenty minutes.");
  ("★ WHAT IS WRITTEN IS THE ALIGNER'S TIMES AND NEVER THE HEARING'S. The aligner is handed the words and can only decide where they fall; the blind hearing stayed about a quarter of a second out even after its constant lead was taken off. The hearing is here to disagree, not to place, so the lines it disagrees on are handed back rather than acted on - deciding between two readings of a sung line is listening, and nothing here can listen.");
  ("THE CHAPTER IS NAMED AND THE SONG IS FOUND FROM IT, RATHER THAN THE SONG BEING NAMED. That is what makes this a command somebody can read back out of the log and run again from the same two words, where a path off one machine's download folder names nothing anywhere else and could not be replayed.");
  ("The three ways this can stop before hearing anything all answer with the same record, so the record is made in one place and only the sentence saying what stopped it is written here.");
  ("★ TWO OF THE THREE LISTS ARE READ BY NAME AND THE THIRD IS NOT, AND THE DIFFERENCE IS WHO WROTE THE LIST. Asking for a word by name refuses an item that does not carry it, and refusing is right where the item was built a few lines away by code that always writes the word - a song always carries its chapter, a flagged line always carries its number. The lines of the timing document came off a disk as somebody's authored file, so nothing here can promise every one of them carries its words; reading that one the lenient way keeps this command doing exactly what it did before rather than newly refusing a document it used to accept.");
  let number_chapter = Number(chapter);
  let folder_audio = folder_user_downloads_path("");
  let songs = await psalms_songs_folder_chapters(folder_audio);
  let numbers = list_map_property(songs, "chapter");
  let at = numbers.indexOf(number_chapter);
  if (equal(at, -1)) {
    let unsung = lyric_video_document_times_unheard(
      number_chapter,
      "no whole singing of this chapter is on this machine",
    );
    return unsung;
  }
  let path_audio = songs[at].path_audio;
  let path_document = lyric_video_bible_document_path(
    version,
    "PSA",
    number_chapter,
  );
  let there = await file_exists(path_document);
  if (not(there)) {
    let undrafted = lyric_video_document_times_unheard(
      number_chapter,
      "this chapter has no timing document to write into yet",
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
      number_chapter,
      "one of the two readings could not read this recording",
    );
    return unheard;
  }
  let name_document = version + "_PSA_" + number_chapter;
  let hearing = {
    chapter: number_chapter,
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
  let flagged = list_map_property(measured.flagged, "line");
  let hand = lyric_video_document_times_hand_is(document);
  if (hand) {
    let worked = {
      chapter: number_chapter,
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
  let lines = lyric_timing_lines_timed(
    measured.starts,
    texts,
    document.duration,
  );
  document.lines = lines;
  document.times_from = lyric_video_times_machine_word();
  await file_overwrite_json(path_document, document);
  let written = {
    chapter: number_chapter,
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
