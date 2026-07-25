import { folder_read_files } from "./folder_read_files.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { file_delete_if_exists } from "./file_delete_if_exists.mjs";
export async function webpack_dev_chunks_clean(folder, a_name) {
  "Delete this app's stale emitted chunk files (folder/*.<a_name>.js) before a";
  "rebuild, so a byte measurement counts only the current build. Scoped by the";
  "app name: the suffix is a DOT then the name then .js, so it never matches";
  "the main entry <a_name>.js (no leading dot), another app, or a source .html";
  "file. This replaces a raw `rm public/dev/*.<app>.js` - safe by construction,";
  "so it needs no un-sandboxed rm grant.";
  let suffix = "." + a_name + ".js";
  let paths = await folder_read_files(folder);
  function is_stale_chunk(path) {
    let ew = text_ends_with(path, suffix);
    return ew;
  }
  let chunks = list_filter(paths, is_stale_chunk);
  await list_map_unordered_async(chunks, file_delete_if_exists);
}
