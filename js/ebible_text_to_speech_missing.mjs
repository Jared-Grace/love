import { list_includes_not } from "./list_includes_not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_book_divisions } from "./ebible_book_divisions.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_flat } from "./list_flat.mjs";
import { ebible_book_code_to_chapter_codes } from "./ebible_book_code_to_chapter_codes.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { bible_audio_root_folder } from "./bible_audio_root_folder.mjs";
import { path_join } from "./path_join.mjs";
import { folder_exists_ensure } from "./folder_exists_ensure.mjs";
import { folder_read } from "./folder_read.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_take } from "./list_take.mjs";
import { list_join } from "./list_join.mjs";
import { ebible_text_to_speech_chapters } from "./ebible_text_to_speech_chapters.mjs";
import { subtract } from "./subtract.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
export async function ebible_text_to_speech_missing(
  bible_folder,
  chapters_at_most,
) {
  "$plain bible_folder";
  "$plain chapters_at_most";
  "Records the chapters of the sixty-six that this translation has no recording of yet, in the order they come in the Bible, stopping after the number asked for, and says how many are still without one.";
  "★ IT ASKS THE DISK WHAT IS MISSING RATHER THAN BEING TOLD WHICH BOOK TO DO NEXT, WHICH IS THE ONLY WAY A JOB THIS LONG SURVIVES BEING INTERRUPTED. The whole canon is about eleven hundred chapters that this translation has not got, and at the rate measured that is on the order of three hundred hours of machine time - so it will be stopped, by a full disk, a reboot, or somebody needing the machine. Run again afterwards it simply carries on, because the answer to what is left is read off the folders and not off a place in a list.";
  "★ A NUMBER OF CHAPTERS IS ASKED FOR BECAUSE A RUN OF DAYS IS A WORSE BET THAN SEVERAL RUNS OF HOURS. One process holding the work for a week loses all of the unwritten part when it dies, and says nothing about how it is doing until it ends. Asking for a book or two at a time gives a report and a safe stopping place every few hours, at no cost, because the recordings that are already down are what the next run reads.";
  "★ A FOLDER THAT EXISTS COUNTS AS RECORDED, EVEN IF WHAT IS IN IT IS NO GOOD. That is deliberate and it is a real limit: a chapter left half written by an interrupted run has a folder, so this will step over it and it will stay broken. Judging the sound instead would mean reading every recording on the disk before speaking a word. Which recordings are actually bad is a separate question with its own named answer, and repairing them is a separate job.";
  "★ ASKING FOR NONE IS HOW THE LIST IS SEEN WITHOUT RECORDING ANY OF IT. A count of zero takes nothing and reports how many are missing, which is the only way to ask this question without starting hours of work - and it is also what stops an empty list being handed on as a chapter whose name is nothing at all.";
  "★ IT MUST NOT BE RUN WHILE ANOTHER RECORDING IS IN FLIGHT. The chapter being written right now already has a folder, so it is correctly stepped over - but the two runs would then be dividing the same cores and the same memory between them, and the count of workers each of them chose was worked out as though it had the machine.";
  arguments_assert(arguments, 2);
  let divisions = ebible_book_divisions();
  let code_lists = list_map_property(divisions, "book_codes");
  let book_codes = list_flat(code_lists);
  async function book_each(book_code) {
    let of_book = await ebible_book_code_to_chapter_codes(
      bible_folder,
      book_code,
    );
    return of_book;
  }
  let chapter_lists = await list_map_async(book_codes, book_each);
  let wanted = list_flat(chapter_lists);
  let root = bible_audio_root_folder();
  let folder = path_join([root, bible_folder]);
  await folder_exists_ensure(folder);
  let recorded = await folder_read(folder);
  function missing_is(chapter_code) {
    let absent = list_includes_not(recorded, chapter_code);
    return absent;
  }
  let missing = list_filter(wanted, missing_is);
  let at_most = Number(chapters_at_most);
  let taking = list_take(missing, at_most);
  if (list_empty_is(taking)) {
    let nothing_taken = {
      chapters_wanted: wanted.length,
      chapters_missing: missing.length,
      chapters_recorded_now: 0,
      chapters_left: missing.length,
      manifests: [],
      first: null,
      last: null,
    };
    return nothing_taken;
  }
  let joined = list_join(taking, ",");
  let manifests = await ebible_text_to_speech_chapters(bible_folder, joined);
  let left = subtract(missing.length, taking.length);
  let report = {
    chapters_wanted: wanted.length,
    chapters_missing: missing.length,
    chapters_recorded_now: taking.length,
    chapters_left: left,
    first: list_first(taking),
    last: list_last(taking),
    manifests,
  };
  return report;
}
