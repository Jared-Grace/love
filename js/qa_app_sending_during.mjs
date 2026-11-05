import { arguments_assert } from "./arguments_assert.mjs";
import { qa_app_sending_path } from "./qa_app_sending_path.mjs";
import { process_own_id } from "./process_own_id.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { file_delete_if_exists } from "./file_delete_if_exists.mjs";
export async function qa_app_sending_during(app_name, fn) {
  "Runs what it is handed with a note standing that says this process is sending this app, and takes the note away however that ends";
  "Whoever calls this has to have finished building first, because a build run from here is a child process, which would read this note as somebody else's and refuse its own send";
  arguments_assert(arguments, 2);
  let file_path = qa_app_sending_path(app_name);
  let pid = process_own_id();
  await file_overwrite_json(file_path, {
    pid,
  });
  try {
    let result = await fn();
    return result;
  } finally {
    await file_delete_if_exists(file_path);
  }
}
