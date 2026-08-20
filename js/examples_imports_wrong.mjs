import { arguments_assert } from "./arguments_assert.mjs";
import { examples_folder } from "./examples_folder.mjs";
import { examples_import_prefixes } from "./examples_import_prefixes.mjs";
import { folder_read_paths_async } from "./folder_read_paths_async.mjs";
import { file_read } from "./file_read.mjs";
import { property_get } from "./property_get.mjs";
import { text_includes } from "./text_includes.mjs";
export async function examples_imports_wrong() {
  "Every example file reaching for the repo's javascript from the wrong number of steps up, named with the start it is spelling.";
  "An example that cannot find what it imports is not a failing example - it is a corpus that will not load at all, so the gate reading it says nothing about any of them. That is why this is asked as its own question rather than left to the gate to run into.";
  arguments_assert(arguments, 0);
  let folder = examples_folder();
  let prefixes = examples_import_prefixes();
  let wrong = property_get(prefixes, "wrong");
  let paths = await folder_read_paths_async(folder);
  let offenders = [];
  for (let f_path of paths) {
    let text = await file_read(f_path);
    for (let spelled of wrong) {
      let reaching = text_includes(text, spelled);
      if (reaching) {
        offenders.push({
          f_path,
          spelled,
        });
      }
    }
  }
  return offenders;
}
