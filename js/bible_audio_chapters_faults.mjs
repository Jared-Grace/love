import { arguments_assert } from "./arguments_assert.mjs";
import { bible_audio_root_folder } from "./bible_audio_root_folder.mjs";
import { path_join } from "./path_join.mjs";
import { folder_read } from "./folder_read.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { list_size } from "./list_size.mjs";
import { less_than } from "./less_than.mjs";
import { list_get } from "./list_get.mjs";
import { bible_audio_folder_book_video } from "./bible_audio_folder_book_video.mjs";
import { lyric_video_faults_path } from "./lyric_video_faults_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { equal } from "./equal.mjs";
import { property_set } from "./property_set.mjs";
import { add } from "./add.mjs";
export async function bible_audio_chapters_faults(bible_folder) {
  "$plain bible_folder";
  "Every recorded chapter of one version whose video would be drawn wrong - gathered from the verdicts the renders left behind rather than worked out again.";
  "★ THE ANSWER IS READ RATHER THAN COMPUTED BECAUSE COMPUTING IT COSTS HOURS AND READING IT COSTS NOTHING. Where a spoken chapter's cards fall can only be settled by listening to its long pieces - the third of Luke costs a minute and a half of that and asking again costs the same - so a sweep that worked it out for the whole bible would spend a working day arriving at what the renders already knew. Each render writes its own verdict down as it goes and this only collects them.";
  "★ HOW MANY CHAPTERS HAD NO VERDICT AT ALL TRAVELS OUT WITH THE ANSWER. A chapter that has never been rendered has no file beside it. Counted as clean it would report a bible in good order on the strength of videos that do not exist - which is the same green word as a bible that really is in order and means the opposite. So the unrendered are named rather than folded in.";
  "★ THE WHOLE COUNT OF CHAPTERS IS CARRIED FOR THE SAME REASON AND IT HAS ALREADY EARNED ITS PLACE. The first version of this asked the folder for its files - and a chapter is a folder rather than a file - so it read nothing and answered that every chapter was clean. Nothing was wrong with the check. What made the emptiness visible was the count sitting beside it saying nought chapters were looked at.";
  "★ ONLY THE CHAPTERS WITH SOMETHING WRONG ARE CARRIED. A list holding a thousand empty entries has to be read through to find the handful that matter and is no better than the files it came from.";
  arguments_assert(arguments, 1);
  let root = bible_audio_root_folder();
  let folder = path_join([root, bible_folder]);
  let names = await folder_read(folder);
  list_sort_text(names);
  let chapters = {};
  let unrendered = [];
  let faults_all = 0;
  let chapters_with_faults = 0;
  let count_names = list_size(names);
  for (let at = 0; less_than(at, count_names); at++) {
    let name = list_get(names, at);
    let path_video = bible_audio_folder_book_video(bible_folder, name);
    let path_faults = lyric_video_faults_path(path_video);
    let there = await file_exists(path_faults);
    if (not(there)) {
      list_add(unrendered, name);
      continue;
    }
    let faults = await file_read_json(path_faults);
    let count = list_size(faults);
    if (equal(count, 0)) {
      continue;
    }
    property_set(chapters, name, faults);
    faults_all = add(faults_all, count);
    chapters_with_faults = add(chapters_with_faults, 1);
  }
  let r = {
    chapters_all: count_names,
    chapters_unrendered: list_size(unrendered),
    chapters_with_faults,
    faults_all,
    unrendered,
    chapters,
  };
  return r;
}
