import { arguments_assert } from "./arguments_assert.mjs";
import { list_chunk } from "./list_chunk.mjs";
import { each_async } from "./each_async.mjs";
import { list_map } from "./list_map.mjs";
import { web_assets_upload } from "./web_assets_upload.mjs";
import { list_wait } from "./list_wait.mjs";
export async function web_assets_upload_paths(paths) {
  "$plain paths";
  "Writes the named assets to storage, each said as where it sits under the assets folder, and says how many went.";
  "They go up a handful at a time rather than all at once, because several hundred writes opened together is how a run ends in refusals rather than in files.";
  arguments_assert(arguments, 1);
  let at_once = 32;
  let chunks = list_chunk(paths, at_once);
  await each_async(chunks, web_assets_upload_paths_chunk);
  let uploaded = paths.length;
  let result = {
    uploaded,
  };
  return result;
  async function web_assets_upload_paths_chunk(chunk) {
    let promises = list_map(chunk, web_assets_upload);
    await list_wait(promises);
  }
}
