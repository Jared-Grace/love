import { arguments_assert } from "./arguments_assert.mjs";
import { path_modified_ms } from "./path_modified_ms.mjs";
import { null_is } from "./null_is.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { greater_than } from "./greater_than.mjs";
import { each } from "./each.mjs";
export async function path_stale_is(path, paths_source) {
  "$plain path";
  "$plain paths_source";
  "Whether a made file is missing, or older than any of the files it was made from.";
  "★ A DERIVED FILE IS KEPT OR REBUILT BY ITS DATE RATHER THAN BY WHETHER IT EXISTS, because the two other answers are each wrong half the time. Keeping whatever exists means a chapter recorded again keeps the video made from the sound before it, and nothing about the video says so - it plays, it is the right length for the wrong recording, and the only way to find out is to watch it against the words. Rebuilding every time means a book of a hundred and fifty chapters renders a hundred and fifty videos to arrive at the ones that were already sitting there correct.";
  "A source that is not there does not make the made file stale. It cannot have contributed anything to what is on disk, so it says nothing about whether what is on disk is current, and counting it as newer would rebuild for ever on a file nobody is going to write.";
  arguments_assert(arguments, 2);
  let made_ms = await path_modified_ms(path);
  let missing = null_is(made_ms);
  if (missing) {
    return true;
  }
  async function source_ms(path_source) {
    let ms = await path_modified_ms(path_source);
    return ms;
  }
  let list = await list_map_async(paths_source, source_ms);
  let stale = false;
  function ms_each(ms) {
    let none = null_is(ms);
    if (none) {
      return;
    }
    let newer = greater_than(ms, made_ms);
    if (newer) {
      stale = true;
    }
  }
  each(list, ms_each);
  return stale;
}
