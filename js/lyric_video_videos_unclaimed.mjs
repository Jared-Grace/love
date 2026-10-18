import { arguments_assert } from "./arguments_assert.mjs";
import { giveaway_psalms_videos_paths } from "./giveaway_psalms_videos_paths.mjs";
import { object_values } from "./object_values.mjs";
import { path_basename } from "./path_basename.mjs";
import { list_add } from "./list_add.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { not } from "./not.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { path_join } from "./path_join.mjs";
export async function lyric_video_videos_unclaimed(folder_audio) {
  arguments_assert(arguments, 1);
  ("$plain folder_audio");
  ("The lyric videos sitting in a folder of downloaded songs that no recording in it claims - the other end of the giveaway's walk, found by taking every video on the disk and subtracting the ones that walk hands out.");
  ("★ IT IS ASKED FROM THE DISK AND NOT FROM THE SONGS, BECAUSE A WALK CANNOT REPORT WHAT IT NEVER REACHED. The giveaway's walk goes recording by recording and grows the name its video ought to have, so a video whose name nobody grows is invisible to it however plainly it sits in the folder. Walking the complement is the only way such a file is ever seen at all: the list of what was claimed is finite and so is the list of what is there, and the difference is exactly what no song accounts for.");
  ("★ WHAT COMES BACK IS NOT A LIST OF FAULTS. Some of these are renders of recordings that have since been renamed - a cut that became the plain take, a second version - and they are superseded files that play perfectly. Others are the videos of recordings the walk could not reach by name at all, which is a real gap. Nothing here can tell those two apart, and neither should it: the question of which unclaimed video is a loss and which is a leftover is answered by what the video sounds like, not by its name.");
  ("The names are joined back onto the folder they were read from, so what comes back can be opened without the caller putting a path together itself.");
  let walk = await giveaway_psalms_videos_paths(folder_audio);
  let claimed = object_values(walk.paths);
  let names_claimed = [];
  for (let path_video of claimed) {
    let name_claimed = await path_basename(path_video);
    list_add(names_claimed, name_claimed);
  }
  let names = await folder_read_files(folder_audio);
  let paths = [];
  for (let name of names) {
    let video_is = text_ends_with(name, ".mp4");
    if (not(video_is)) {
      continue;
    }
    let unclaimed_is = list_includes_not(names_claimed, name);
    if (not(unclaimed_is)) {
      continue;
    }
    let path_video = path_join([folder_audio, name]);
    list_add(paths, path_video);
  }
  return paths;
}
