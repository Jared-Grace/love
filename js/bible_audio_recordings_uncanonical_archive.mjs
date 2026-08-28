import { bible_folder_key } from "./bible_folder_key.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_book_divisions } from "./ebible_book_divisions.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_flat } from "./list_flat.mjs";
import { bible_audio_recordings } from "./bible_audio_recordings.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { list_filter } from "./list_filter.mjs";
import { bible_audio_root_folder } from "./bible_audio_root_folder.mjs";
import { bible_audio_archive_root_folder } from "./bible_audio_archive_root_folder.mjs";
import { path_join } from "./path_join.mjs";
import { folder_exists_ensure } from "./folder_exists_ensure.mjs";
import { file_move } from "./file_move.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { subtract } from "./subtract.mjs";
export async function bible_audio_recordings_uncanonical_archive() {
  "Puts aside every recording of a book outside the sixty-six, moving it out of the live tree into the archive beside it, and says how many were moved and how many were left.";
  "★ IT FINDS ITS OWN SET FROM THE CANON RATHER THAN FROM A LIST SOMEBODY TYPED. The sixty-six book codes are already written down once for the book picker, so asking them here means a recording of a book that was never in scope is recognised on the day it appears, and nobody has to remember to add it anywhere. A typed list of the books to set aside would be right on the day it was written and quietly wrong afterwards.";
  "★ IT MOVES RATHER THAN DELETES, AND THE LAYOUT IS KEPT IDENTICAL SO THAT MOVING BACK IS THE SAME OPERATION REVERSED. The deuterocanonical recordings were put off rather than rejected, and there are hours of them. Anything that cannot be undone by hand should not be done by a sweep.";
  "★ IT IS SAFE TO RUN WHILE A RECORDING IS IN FLIGHT, BECAUSE WHAT IS BEING RECORDED IS ALWAYS INSIDE THE CANON. A chapter half written to disk would be ruined by being moved out from under the process writing it, so this is only safe for as long as nothing outside the sixty-six is ever being recorded - which is what was asked for, but is a reason to look rather than a promise.";
  "★ WHAT IT REPORTS IS WHAT IT MOVED AND NOT WHAT IT MEANT TO MOVE. A rename that failed leaves the recording where it was, so counting the plan rather than the outcome would report a tidy disk that is still full.";
  arguments_assert(arguments, 0);
  let divisions = ebible_book_divisions();
  let lists = list_map_property(divisions, "book_codes");
  let canon = list_flat(lists);
  let recordings = await bible_audio_recordings();
  function outside_is(recording) {
    let chapter_code = property_get(recording, "chapter_code");
    let book_code = ebible_chapter_code_to_book(chapter_code);
    let outside = list_includes_not(canon, book_code);
    return outside;
  }
  let unasked = list_filter(recordings, outside_is);
  let root = bible_audio_root_folder();
  let archive = bible_audio_archive_root_folder();
  async function move_each(recording) {
    let bible_folder = property_get(recording, bible_folder_key());
    let chapter_code = property_get(recording, "chapter_code");
    let into = path_join([archive, bible_folder]);
    await folder_exists_ensure(into);
    let from = path_join([root, bible_folder, chapter_code]);
    let to = path_join([into, chapter_code]);
    await file_move(from, to);
    let put_aside = {
      bible_folder,
      chapter_code,
    };
    return put_aside;
  }
  let moved = await list_map_async(unasked, move_each);
  let kept = subtract(recordings.length, moved.length);
  let report = {
    recordings: recordings.length,
    archived: moved.length,
    kept,
    folder: archive,
    moved,
  };
  return report;
}
