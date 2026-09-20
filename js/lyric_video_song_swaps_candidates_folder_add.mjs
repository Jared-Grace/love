import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_song_swaps_read } from "./lyric_video_song_swaps_read.mjs";
import { property_get } from "./property_get.mjs";
import { path_basename } from "./path_basename.mjs";
import { path_join } from "./path_join.mjs";
import { file_exists } from "./file_exists.mjs";
import { not } from "./not.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
import { lyric_video_song_swaps_path } from "./lyric_video_song_swaps_path.mjs";
import { file_json_transform } from "./file_json_transform.mjs";
export async function lyric_video_song_swaps_candidates_folder_add(
  name,
  label,
  folder,
) {
  "$plain name";
  "$plain label";
  "$plain folder";
  "Offers one more picture for every picture a song already has candidates for, taken from a folder holding a file of the same name as each current picture.";
  "A WHOLE FOLDER IS OFFERED AT ONCE BECAUSE A GRADE IS MADE FOR THE WHOLE SET, not picture by picture; naming the folder once is the same choice said once instead of twenty-four times.";
  "THE FILE NAME COMES FROM THE PICTURE BEING REPLACED, so a folder built from the same originals lines up by name and needs no list handed to it.";
  "A CANDIDATE ALREADY OFFERED IS LEFT ALONE, so running this twice offers nothing twice, and the choices already made are never touched.";
  "A CURRENT PICTURE WITH NO FILE IN THE FOLDER IS SKIPPED RATHER THAN OFFERED, because a path that names nothing draws as a broken picture and reads to whoever is choosing as a bad candidate rather than as a missing file.";
  "WHICH PICTURES TO OFFER IS DECIDED BEFORE THE FILE IS OPENED FOR WRITING, because asking the disk about a name takes a turn to answer and the writer hands its work back the moment its lambda returns; an answer arriving after that would be written nowhere.";
  arguments_assert(arguments, 3);
  let swaps = await lyric_video_song_swaps_read(name);
  let listed = property_get(swaps, "swaps");
  let wanted = [];
  for (let swap of listed) {
    let before = property_get(swap, "before");
    let file_name = await path_basename(before);
    let path = path_join([folder, file_name]);
    let exists = await file_exists(path);
    let missing = not(exists);
    if (missing) {
      continue;
    }
    let after = property_get(swap, "after");
    let already = list_find_property_or_null(after, "path", path);
    let b = null_is(already);
    let offered = not(b);
    if (offered) {
      continue;
    }
    list_add(wanted, {
      before,
      path,
    });
  }
  function offer(data) {
    let rows = property_get(data, "swaps");
    for (let entry of wanted) {
      let swap = list_find_property_or_null(rows, "before", entry.before);
      let gone = null_is(swap);
      if (gone) {
        continue;
      }
      let after = property_get(swap, "after");
      list_add(after, {
        label,
        path: entry.path,
      });
    }
  }
  let swaps_path = lyric_video_song_swaps_path(name);
  await file_json_transform(swaps_path, offer);
  let r = {
    added: wanted,
  };
  return r;
}
