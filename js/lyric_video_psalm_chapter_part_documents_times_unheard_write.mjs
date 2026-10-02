import { arguments_assert } from "./arguments_assert.mjs";
import { folder_user_downloads_path } from "./folder_user_downloads_path.mjs";
import { psalms_songs_folder_parts } from "./psalms_songs_folder_parts.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { lyric_video_bible_part_document_path } from "./lyric_video_bible_part_document_path.mjs";
import { lyric_video_recording_document_path } from "./lyric_video_recording_document_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { list_add } from "./list_add.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { lyric_video_times_machine_word } from "./lyric_video_times_machine_word.mjs";
import { lyric_video_document_times_hand_is } from "./lyric_video_document_times_hand_is.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { lyric_video_psalm_part_document_times_write } from "./lyric_video_psalm_part_document_times_write.mjs";
export async function lyric_video_psalm_chapter_part_documents_times_unheard_write(
  version,
  chapter,
) {
  arguments_assert(arguments, 2);
  ("$plain version");
  ("$plain chapter");
  ("Listens to every singing of a part of one psalm whose timing document has never been heard, and writes each one's times into it.");
  ("★ IT SKIPS WHAT HAS ALREADY BEEN HEARD, WHICH IS THE WHOLE OF WHY IT IS NOT THE WHOLE-PSALTER COMMAND. That one hears every part singing on the machine and writes over its own earlier listening on purpose, so a second improvement to the hearing reaches every document. Reaching a handful of drafts costs the same four hours there, because the listening is what costs the minute and it listens to all two hundred and thirty seven. Here the question is the opposite one - which documents have never been heard at all - and a document already carrying the machine's mark holds exactly what this run would write into it, so hearing it again buys nothing and spends a minute.");
  ("★ THE CHAPTER IS THE SCOPE BECAUSE A CHANGE TO WHAT A VERSE'S PIECES ARE LANDS ON ONE CHAPTER. Measured 2026-10-02: teaching the piece rule about semicolons gave Psalm 104 a 24c-31 it did not have, and seven singings of it were drafted with a flat spread in one run. Naming the chapter is what lets those be heard without the rest of the psalter being heard again, and it is one word somebody can read back out of the log and run for the next chapter.");
  ("★ A PERSON'S TIMES ARE STEPPED OVER HERE AS WELL AS REFUSED BELOW, SO THE MINUTE IS NOT SPENT AT ALL. The listening refuses to write over somebody's ear, but it refuses afterwards - it has already listened by then, on purpose, so that the passages whose right answers are known get a reading recorded for them. That is the right order for a command asked to hear a document. It is the wrong order for a command whose whole question is which documents are missing times, because a document somebody tapped is not missing any.");
  ("★ EACH SINGING IS COMMITTED AS IT LANDS, UNDER THE NAME OF THE COMMAND THAT HEARD IT AND ITS OWN FIVE WORDS. Twenty two documents written and committed once at the end is one entry no single command can be named after, and with several hands in this folder it is twenty two files a peer's sweep can take first and file under a bare word. What is already noted is swept before the loop starts, or the first singing's commit claims somebody else's work under its own name.");
  ("What is skipped is handed back by name rather than left out of the count, because a run that says it heard three of twenty three is only readable beside the reason the other twenty were not.");
  let number_chapter = Number(chapter);
  let folder_audio = folder_user_downloads_path("");
  let songs = await psalms_songs_folder_parts(folder_audio);
  await ai_git_noted();
  let written = [];
  let heard_before = [];
  let hand = [];
  let undrafted = [];
  for (let song of songs) {
    let mine = equal(song.chapter, number_chapter);
    if (not(mine)) {
      continue;
    }
    let named =
      song.verse_first + "-" + song.verse_last + " (" + song.mark + ")";
    let path_passage = lyric_video_bible_part_document_path(
      version,
      "PSA",
      number_chapter,
      song.verse_first,
      song.verse_last,
    );
    let path_document = lyric_video_recording_document_path(
      path_passage,
      song.mark,
    );
    let there = await file_exists(path_document);
    if (not(there)) {
      list_add(undrafted, named);
      continue;
    }
    let document = await file_read_json(path_document);
    let word = lyric_video_times_machine_word();
    let machine = equal(document.times_from, word);
    if (machine) {
      list_add(heard_before, named);
      continue;
    }
    let own = lyric_video_document_times_hand_is(document);
    if (own) {
      list_add(hand, named);
      continue;
    }
    let one = await function_call_commit(
      lyric_video_psalm_part_document_times_write,
      [version, song.chapter, song.verse_first, song.verse_last, song.mark],
    );
    let how = {
      passage: named,
      wrote: one.wrote,
      lines: one.lines,
      match_rate: one.match_rate,
      confidence: one.confidence,
    };
    list_add(written, how);
  }
  let r = {
    chapter: number_chapter,
    written,
    heard_before,
    hand,
    undrafted,
  };
  return r;
}
