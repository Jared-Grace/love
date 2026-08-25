import { fn_name } from "./fn_name.mjs";
import { function_import_relative } from "./function_import_relative.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { browser_is } from "./browser_is.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function file_overwrite_json(file_path, object) {
  if (browser_is()) {
    let json = json_format_to(object);
    await file_overwrite(file_path, json);
    return;
  }
  ("★ THE DISK HALF IS ASKED FOR BY NAME AND NOT IMPORTED, and that is about weight rather than about tidiness. The check above decides which machine RUNS it and settles nothing about which machine DOWNLOADS it - a bundler follows a plain import whether the branch is walked or not, so every page that saved a record carried a streaming json writer and the npm install that fetches it, in order never to run a line of either. A name joined into a path at the moment it is wanted is something a bundler cannot see through.");
  let f_name = fn_name("file_overwrite_json_node");
  let fn = await function_import_relative(f_name);
  await fn(file_path, object);
}
