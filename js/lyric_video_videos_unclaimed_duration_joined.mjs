import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { giveaway_psalms_videos_paths } from "./giveaway_psalms_videos_paths.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { lyric_video_videos_unclaimed } from "./lyric_video_videos_unclaimed.mjs";
import { psalms_songs_folder_passages } from "./psalms_songs_folder_passages.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { audio_paths_durations } from "./audio_paths_durations.mjs";
import { durations_near_each } from "./durations_near_each.mjs";
import { list_size } from "./list_size.mjs";
import { list_add } from "./list_add.mjs";
import { list_first } from "./list_first.mjs";
import { subtract } from "./subtract.mjs";
import { abs } from "./abs.mjs";
import { list_includes } from "./list_includes.mjs";
import { property_get } from "./property_get.mjs";
export async function lyric_video_videos_unclaimed_duration_joined(
  folder_audio,
) {
  arguments_assert(arguments, 1);
  ("$plain folder_audio");
  ("Which recording each lyric video that no song claims was made from, decided by the two files being the same number of seconds long rather than by what either of them is called, sorted into the ones that join to a recording with no video yet, the ones that join to a recording already holding a different video, the ones several recordings could answer to, and the ones nothing on the disk is the length of.");
  ("★ THE LENGTH IS THE ONE THING THE RENDERER COPIES AND THE ONE THING A RENAME CANNOT TOUCH. What a video is called is grown from a timing document and a mark, so renaming the recording afterwards breaks the join silently and - worse - lets the grown name land on a different file that answers to it. A length is not a name. It is written by the render from the sound it was handed, so it still says which singing the video is of after every name in the folder has moved.");
  ("★ AN EXACT AGREEMENT IS A PROOF AND A NEAR ONE IS NOT, WHICH IS WHY THE GAP COMES BACK WITH EVERY ROW. The renderer in use writes the video to the recording's own length, so true pairs agree to the millionth of a second: measured on 2026-10-19, four pairs in one folder agreed at 63.367007, 64.405011, 103.367007 and 116.800998, every digit. A row whose gap is a thousandth is a different kind of claim from a row whose gap is nothing at all, and a caller handed only the pairing cannot tell those apart. So the slack here is wide enough to survive a container rounding the number it stores and no wider, and what it admits is handed back for judging rather than called an answer.");
  ("★ MATCHING NOTHING DOES NOT MEAN THE VIDEO IS OF NOTHING, because an older renderer did not copy the length. It trimmed, by an amount that varies: measured over known-good pairs in one folder on 2026-10-19, Psalm 130's video ran 3.40 seconds short of its recording and Psalm 131's two sessions 5.29 and 4.20 short. So this join is silent about every video that generation made, and a caller reading an empty answer as evidence that the recording is gone would be reading the renderer's age as a fault in the folder.");
  ("★ A VIDEO THAT JOINS TO A RECORDING ALREADY HOLDING ANOTHER VIDEO IS THE INTERESTING ONE AND IS KEPT APART FOR IT. That is not a spare at all - it is the case where the walk found a file by growing a name, and the sound says a different file belongs there. Mixed in with the recoverable ones it would be acted on as an addition when what it reports is a substitution, and the file it would be substituting for may already have been given away under a name that can never be changed.");
  ("The recordings are taken from the giveaway's own walk rather than from the two that grow video names, because those two leave out anything that came out of an editing session - and an edited recording is exactly the kind whose video lost its name, so the set that excludes them excludes most of what is worth finding.");
  ("Nothing is written and nothing is moved. What to do about a join is a separate question from whether the join is true, and the answer to the second one is worth having on its own.");
  let walk = await giveaway_psalms_videos_paths(folder_audio);
  let paths_claimed = walk.paths;
  let recordings_joined = object_property_names(paths_claimed);
  let spares = await lyric_video_videos_unclaimed(folder_audio);
  let songs = await psalms_songs_folder_passages(folder_audio);
  let paths_audio = list_map_property(songs, "path_audio");
  let rows_video = await audio_paths_durations(spares);
  let rows_audio = await audio_paths_durations(paths_audio);
  let slack = 0.002;
  let answers = durations_near_each(rows_video, rows_audio, slack);
  let joined = [];
  let taken = [];
  let several = [];
  let none = [];
  for (let answer of answers) {
    let path_video = answer.row.path_audio;
    let seconds = answer.row.seconds;
    let count = list_size(answer.near);
    let nothing_is = equal(count, 0);
    if (nothing_is) {
      let row_none = {
        video: path_video,
        seconds: seconds,
      };
      list_add(none, row_none);
      continue;
    }
    let one_is = equal(count, 1);
    if (not(one_is)) {
      let recordings = list_map_property(answer.near, "path_audio");
      let row_several = {
        video: path_video,
        seconds: seconds,
        recordings: recordings,
      };
      list_add(several, row_several);
      continue;
    }
    let row_audio = list_first(answer.near);
    let recording = row_audio.path_audio;
    let gap_signed = subtract(seconds, row_audio.seconds);
    let gap = abs(gap_signed);
    let joined_already_is = list_includes(recordings_joined, recording);
    if (joined_already_is) {
      let video_claimed = property_get(paths_claimed, recording);
      let row_taken = {
        video: path_video,
        recording: recording,
        seconds: seconds,
        gap: gap,
        video_claimed: video_claimed,
      };
      list_add(taken, row_taken);
      continue;
    }
    let row_joined = {
      video: path_video,
      recording: recording,
      seconds: seconds,
      gap: gap,
    };
    list_add(joined, row_joined);
  }
  let answer_all = {
    folder: folder_audio,
    spares: list_size(spares),
    songs: list_size(songs),
    joined: joined,
    taken: taken,
    several: several,
    none: none,
  };
  return answer_all;
}
