import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { notes_done } from "./notes_done.mjs";
export async function lyric_video_picture_note_done(key, words) {
  "$plain key";
  "$plain words";
  "Mark every note against one background picture whose words are the ones given as answered, so it comes off the list a watcher is shown.";
  arguments_assert(arguments, 2);
  let store = fn_name("lyric_video_picture_note_add");
  let path = await notes_done(store, key, words);
  return path;
}
