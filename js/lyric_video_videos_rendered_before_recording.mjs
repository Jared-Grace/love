import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { giveaway_psalms_videos_paths } from "./giveaway_psalms_videos_paths.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { path_modified_ms } from "./path_modified_ms.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
export async function lyric_video_videos_rendered_before_recording(
  folder_audio,
) {
  arguments_assert(arguments, 1);
  ("$plain folder_audio");
  ("Every lyric video joined to a recording whose own file is newer than the video, which no render can account for - the video was finished before the recording it is said to be of existed.");
  ("★ IT IS THE ONE CHECK ON THIS JOIN THAT READS NO NAME, AND THAT IS THE WHOLE REASON IT CAN SEE THE JOIN BEING WRONG. The video a recording is given away with is found by growing the name the render would have written, so a recording renamed after its video was made quietly takes whichever video now answers to its new name - and that video is a real file that plays, so nothing complains. Measured on 2026-10-19 on psalm 134, whose two recordings were renamed out of a verse range after both had been rendered: the video handed out as the first singing was finished the day before either recording existed. A clock is not a name, so the rename that fooled the name cannot fool it.");
  ("★ IT ONLY EVER ACCUSES, AND A PAIR IT PASSES IS NOT THEREBY RIGHT. A video made after its recording is what a correct join looks like and also what every wrong join between two recordings of the same week looks like, so a quiet answer here is weak evidence while a loud one is proof. That lopsidedness is the point rather than a weakness of it: an uploaded name can never be changed, so turning even some of the silent misjoins into named ones for the cost of two readings of a clock is worth having before anything goes out.");
  ("★ A FILE WHOSE TIME CANNOT BE READ IS NAMED RATHER THAN PASSED OVER. A file that is not there is a different fault and one this is not looking for, but stepping over it in silence would let that pair leave here wearing the same answer as a pair that was looked at and cleared, and the count of what was examined is the only thing saying how far the clear answer reaches.");
  ("The clock is read off the files themselves rather than taken from the giveaway record, because that record is written from these same grown names and would therefore agree with them however wrong they were.");
  let walk = await giveaway_psalms_videos_paths(folder_audio);
  let paths = walk.paths;
  let names_audio = object_property_names(paths);
  let defects = [];
  let unreadable = [];
  for (let path_audio of names_audio) {
    let path_video = paths[path_audio];
    let ms_recording = await path_modified_ms(path_audio);
    let ms_video = await path_modified_ms(path_video);
    let recording_unread_is = equal(ms_recording, null);
    let video_unread_is = equal(ms_video, null);
    let unread_is = recording_unread_is || video_unread_is;
    if (unread_is) {
      let pair = {
        recording: path_audio,
        video: path_video,
      };
      list_add(unreadable, pair);
      continue;
    }
    let before_is = less_than(ms_video, ms_recording);
    if (before_is) {
      let defect = {
        recording: path_audio,
        video: path_video,
        ms_recording: ms_recording,
        ms_video: ms_video,
      };
      list_add(defects, defect);
    }
  }
  let answer = {
    folder: folder_audio,
    joined: list_size(names_audio),
    defects: defects,
    unreadable: unreadable,
  };
  return answer;
}
