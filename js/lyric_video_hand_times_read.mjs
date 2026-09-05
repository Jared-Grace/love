import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_hand_times_path } from "./lyric_video_hand_times_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { not } from "./not.mjs";
import { file_read_json } from "./file_read_json.mjs";
export async function lyric_video_hand_times_read() {
  arguments_assert(arguments, 0);
  ("Every copy of a person's timings that has been kept so far, under the name of the document each came from.");
  ("A record that is not there yet reads as a record with nothing in it, because that is what a first run honestly is - and the two callers of this would otherwise spell that same forgiveness twice, which is how one of them ends up not forgiving it.");
  let path = lyric_video_hand_times_path();
  let there = await file_exists(path);
  let empty = {};
  let kept = not(there) ? empty : await file_read_json(path);
  return kept;
}
