import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { notes_done } from "./notes_done.mjs";
export async function song_image_note_done(key, words) {
  "$plain words";
  "Mark every note standing against one couplet's drawing whose words are the ones given as answered, so it comes off the list a reviewer is shown.";
  arguments_assert(arguments, 2);
  let store = fn_name("song_image_note_add");
  let path = await notes_done(store, key, words);
  return path;
}
