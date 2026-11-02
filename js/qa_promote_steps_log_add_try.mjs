import { arguments_assert } from "./arguments_assert.mjs";
import { date_now_iso } from "./date_now_iso.mjs";
import { qa_promote_steps_log_path } from "./qa_promote_steps_log_path.mjs";
import { list_add } from "./list_add.mjs";
import { file_json_transform_initialize } from "./file_json_transform_initialize.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
export async function qa_promote_steps_log_add_try(search, commit, ok, steps) {
  "$plain search";
  "$plain commit";
  "$plain ok";
  "$plain steps";
  "Adds what one preparing of an app took, step by step, to this machine's history, and can never fail the preparing it is writing about.";
  "★ THE CATCH IS LOAD-BEARING. This is called while a run is finishing or while its failure is on its way out, so a full disk here must cost the note and never replace the real answer or the real error. A note about how long something took is not worth losing either of those for.";
  "The app is recorded as the word that was asked for, because a run refused at its first step never learned the app's full name, and a refused run is one of the rows worth having.";
  arguments_assert(arguments, 4);
  let at = date_now_iso();
  let row = {
    at,
    search,
    commit,
    ok,
    steps,
  };
  let f_path = qa_promote_steps_log_path();
  function row_add(rows) {
    list_add(rows, row);
  }
  async function logging() {
    await file_json_transform_initialize(f_path, [], row_add);
    return f_path;
  }
  let written = await catch_null_async(logging);
  return written;
}
