import { js_identifier_used_dir } from "./js_identifier_used_dir.mjs";
import { error_json } from "./error_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { path_join } from "./path_join.mjs";
import { file_delete } from "./file_delete.mjs";
("Delete a fn's ./<name>.mjs from a flat dir ONLY if no OTHER file references it — the");
("hermetic, sandbox-testable core of function_delete_unused. Refuses (throws) when the");
("fn is still used, so the doc pair can show both the delete and the guard that stops it.");
export async function js_identifier_delete_unused_dir(dir, name) {
  let used = await js_identifier_used_dir(dir, name);
  if (used) {
    error_json({
      message: "Used in multiple places. Not deleting.",
      name,
    });
  }
  let name_file = text_combine_multiple([name, ".mjs"]);
  let f_path = path_join([dir, name_file]);
  await file_delete(f_path);
}
