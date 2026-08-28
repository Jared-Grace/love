import { arguments_assert } from "./arguments_assert.mjs";
import { file_extension_js } from "./file_extension_js.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { list_filter } from "./list_filter.mjs";
import { file_name_app_chunk_app_name_or_null } from "./file_name_app_chunk_app_name_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { text_suffix_without } from "./text_suffix_without.mjs";
import { list_map_unique } from "./list_map_unique.mjs";
import { folder_app_chunks_orphaned } from "./folder_app_chunks_orphaned.mjs";
import { path_join } from "./path_join.mjs";
import { file_size } from "./file_size.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_flat } from "./list_flat.mjs";
import { list_size } from "./list_size.mjs";
export async function folder_chunks_walked(folder) {
  "$plain folder";
  "Every extra script file in one folder that nothing there ever sends for, each answered beside how big it is - and beside how many script files the folder held at all.";
  "THE COUNT IS THE SCRIPTS IN THE FOLDER, NOT THE ONES LEFT OVER. No leftovers is what a swept folder says and it is also what a folder that has moved says, or one whose name was changed by a build settings edit - the reading walks up to a folder that is not there, finds no scripts, and reports nothing wrong with perfect calm. Only a count of what was in the folder falls on that day.";
  "THE APPS ARE READ OFF THE FOLDER RATHER THAN TAKEN FROM A LIST, because a list is written by a person and the leftovers are exactly what nobody wrote down. An app that has been renamed, or retired, or never belonged here at all, still leaves its pieces on the disk, and a reading narrowed by a typed name walks straight past every one of them.";
  "The leftover names themselves are read for an app name too, and not only the whole scripts, because an app whose own script has gone is the case where the most is left behind and the one a list of whole scripts cannot see.";
  "The size is answered here rather than left to the reader, because the whole use of this reading is deciding whether the leftovers are worth a commit, and that is a question about bytes.";
  arguments_assert(arguments, 1);
  let extension = file_extension_js();
  let names = await folder_read_files(folder);
  function folder_chunks_walked_js_is(file_name) {
    let js = text_ends_with(file_name, extension);
    return js;
  }
  let js_names = list_filter(names, folder_chunks_walked_js_is);
  function folder_chunks_walked_app_name_of(file_name) {
    let chunk_app = file_name_app_chunk_app_name_or_null(file_name);
    let whole = null_is(chunk_app);
    if (whole) {
      let plain = text_suffix_without(file_name, extension);
      return plain;
    }
    return chunk_app;
  }
  let app_names = list_map_unique(js_names, folder_chunks_walked_app_name_of);
  async function folder_chunks_walked_app_lambda(app_name) {
    let orphaned = await folder_app_chunks_orphaned(folder, app_name);
    async function folder_chunks_walked_sized_lambda(file_name) {
      let f_path = path_join([folder, file_name]);
      let size = await file_size(f_path);
      let entry = {
        f_path,
        size,
      };
      return entry;
    }
    let sized = await list_map_unordered_async(
      orphaned,
      folder_chunks_walked_sized_lambda,
    );
    return sized;
  }
  let nested = await list_map_unordered_async(
    app_names,
    folder_chunks_walked_app_lambda,
  );
  let flat = list_flat(nested);
  let walked = list_size(js_names);
  let r = {
    walked,
    orphaned: flat,
  };
  return r;
}
