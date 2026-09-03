import { arguments_assert } from "./arguments_assert.mjs";
import { folder_web_dev } from "./folder_web_dev.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { path_join } from "./path_join.mjs";
import { file_size } from "./file_size.mjs";
import { list_map_async } from "./list_map_async.mjs";
export async function bundle_sizes_now() {
  "How big every client bundle on the dev build is at this moment, one entry each.";
  "Every one of them, rather than a list somebody keeps: an app nobody named is exactly the app a leak arrives in unwatched, and the folder already knows which apps there are. The split-off pieces are counted too, since a tree arriving in one of those weighs the same as a tree arriving in the page.";
  "Sorted by name so that the file written from this changes only when a size changes, and a reader looking at what moved sees what moved.";
  "The folder is asked for rather than spelled. Spelled, it went on naming where the working stage used to be for exactly as long as it took somebody to notice that every bundle had become zero of them.";
  arguments_assert(arguments, 0);
  let folder = folder_web_dev();
  let names = await folder_read_files(folder);
  function js_is(name) {
    let js = text_ends_with(name, ".js");
    return js;
  }
  let js_names = list_filter(names, js_is);
  let sorted = list_sort_text(js_names);
  async function measure(name) {
    let path = path_join([folder, name]);
    let size = await file_size(path);
    let entry = {
      name,
      size,
    };
    return entry;
  }
  let sizes = await list_map_async(sorted, measure);
  return sizes;
}
