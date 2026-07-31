import { arguments_assert } from "./arguments_assert.mjs";
import { folder_js } from "./folder_js.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { path_join } from "./path_join.mjs";
import { list_add } from "./list_add.mjs";
export async function js_files_texts() {
  arguments_assert(arguments, 0);
  ("every module in the js folder as a list of { file, text } records, read once");
  ("the two whole-folder sweeps each opened the same three steps - ask for the folder, list it, reach for the file system directly - and then joined a path and read a file inside their own loop. Neither of them is about reading, and reaching for fs by hand in the body of a linter is how a second sweep ends up reading the folder a different way from the first.");
  let directory = folder_js();
  let files = await folder_read_files(directory);
  let module_fs = await import("fs");
  let records = [];
  for (let file of files) {
    let path = path_join([directory, file]);
    let text = module_fs.readFileSync(path, "utf8");
    let record = {
      file,
      text,
    };
    list_add(records, record);
  }
  return records;
}
