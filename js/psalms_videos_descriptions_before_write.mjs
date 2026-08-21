import { arguments_assert } from "./arguments_assert.mjs";
import { date_now_file } from "./date_now_file.mjs";
import { psalms_videos_descriptions_before_path } from "./psalms_videos_descriptions_before_path.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { equal } from "./equal.mjs";
export async function psalms_videos_descriptions_before_write(read) {
  "Keeps a copy of every song already carrying words of its own, with the moment it was read and the video it was read from, so that a run which writes over them can be undone by hand.";
  "NOTHING ELSE KEEPS A COPY. The writing goes straight to youtube and youtube keeps no earlier version of a description; once the words are replaced the old ones exist nowhere. Adding words to an empty box needs no such copy, and that is the ordinary case here, but the ordinary case is not what a backup is for.";
  "Only the songs actually carrying something are kept. An empty box is put back by emptying a box, which needs no record of anything, and a thousand empty strings would bury the handful that matter in the file meant to make them findable.";
  "It takes the reading rather than doing its own. A copy taken by a second sweep is a copy of a slightly different moment than the one the run was planned from, and the two disagreeing is precisely the situation a backup exists to survive.";
  "It is honest about what it does not cover: the copy is of the moment of reading, and the writing happens later, from a browser. Words put there in between are not in it.";
  arguments_assert(arguments, 1);
  let moment = date_now_file();
  let carrying = [];
  for (let each of read) {
    let nothing = equal(each.live, "") || equal(each.live, null);
    if (nothing) {
      continue;
    }
    carrying.push({
      video_id: each.one.video_id,
      title: each.one.title,
      description: each.live,
    });
  }
  let path = psalms_videos_descriptions_before_path(moment);
  let kept = {
    taken: moment,
    songs: read.length,
    carrying: carrying.length,
    videos: carrying,
  };
  await file_overwrite_json(path, kept);
  let r = {
    path: path,
    taken: moment,
    songs: read.length,
    carrying: carrying.length,
  };
  return r;
}
