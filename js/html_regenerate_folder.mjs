import { folder_read_files } from "./folder_read_files.mjs";
import { list_filter_ends_with } from "./list_filter_ends_with.mjs";
import { html_extension } from "./html_extension.mjs";
import { path_join } from "./path_join.mjs";
import { list_map } from "./list_map.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
import { each_async } from "./each_async.mjs";
import { file_read } from "./file_read.mjs";
import { html_code_is } from "./html_code_is.mjs";
import { html_regenerate } from "./html_regenerate.mjs";
import { html_regenerate_frozen_is } from "./html_regenerate_frozen_is.mjs";
export async function html_regenerate_folder(folder) {
  let files = await folder_read_files(folder);
  let names = list_filter_ends_with(files, html_extension());
  function lambda(name) {
    let joined = path_join([folder, name]);
    return joined;
  }
  let paths = list_map(names, lambda);
  async function lambda2(la) {
    async function lambda3(file_path) {
      let frozen = html_regenerate_frozen_is(file_path);
      if (frozen) {
        return;
      }
      let contents = await file_read(file_path);
      let generated = html_code_is(contents);
      if (generated) {
        await html_regenerate(file_path);
        la(file_path);
      }
    }
    await each_async(paths, lambda3);
  }
  let regenerated = await list_adder_async(lambda2);
  return regenerated;
}
