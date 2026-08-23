import { each_async } from "./each_async.mjs";
import { list_chunk } from "./list_chunk.mjs";
import { list_map } from "./list_map.mjs";
import { list_wait } from "./list_wait.mjs";
import { web_assets_paths } from "./web_assets_paths.mjs";
import { web_assets_upload } from "./web_assets_upload.mjs";
export async function web_assets_upload_all() {
  "Writes every asset in the repo to storage, so that what a browser downloads is what is under version control here.";
  "IT UPLOADS ALL OF THEM AND NOT THE CHANGED ONES, which is what makes it safe to run at any moment: writing a file that is already there leaves it as it was, so there is no state to get wrong and nothing to work out before running it.";
  "They go up a handful at a time rather than all at once, because several hundred writes opened together is how a run ends in refusals rather than in files.";
  let paths = await web_assets_paths();
  let at_once = 32;
  let chunks = list_chunk(paths, at_once);
  await each_async(chunks, web_assets_upload_all_chunk);
  let uploaded = paths.length;
  let result = {
    uploaded,
  };
  return result;
  async function web_assets_upload_all_chunk(chunk) {
    let promises = list_map(chunk, web_assets_upload);
    await list_wait(promises);
  }
}
