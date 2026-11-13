import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { path_join } from "./path_join.mjs";
import { calendar_worker_wrangler } from "./calendar_worker_wrangler.mjs";
export async function calendar_worker_stage(routes) {
  arguments_assert(arguments, 1);
  ("Writes the calendar Worker's folder — a start file and wrangler.json — under gitignore/, and returns the folder. The start file only hands each request to ",
    fn_name("calendar_worker_fetch"),
    "; wrangler bundles everything it reaches from js/.");
  let folder = folder_gitignore_join("calendar_worker");
  let entry = [
    text_combine_multiple([
      "import { ",
      fn_name("calendar_worker_fetch"),
      ' } from "../../js/',
      fn_name("calendar_worker_fetch"),
      '.mjs";',
    ]),
    "export default {",
    "  fetch(request, env) {",
    text_combine_multiple([
      "    return ",
      fn_name("calendar_worker_fetch"),
      "(request, env);",
    ]),
    "  },",
    "};",
    "",
  ].join("\n");
  let file_path = path_join([folder, "index.mjs"]);
  await file_overwrite(file_path, entry);
  let config = calendar_worker_wrangler(routes);
  let file_path2 = path_join([folder, "wrangler.json"]);
  await file_overwrite(file_path2, JSON.stringify(config, null, 2) + "\n");
  return folder;
}
