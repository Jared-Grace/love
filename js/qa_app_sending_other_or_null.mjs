import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { qa_app_sending_path } from "./qa_app_sending_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { not } from "./not.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { process_own_id } from "./process_own_id.mjs";
import { process_alive_seconds_or_null } from "./process_alive_seconds_or_null.mjs";
export async function qa_app_sending_other_or_null(app_name) {
  "Which other running process is sending this app right now, or null when none is";
  "A note whose process has died counts as no note. A send can be stopped by hand or killed outright, and then nothing is left to take its note away, so a lock that believed the file alone would refuse every build of that app until somebody found the file";
  arguments_assert(arguments, 1);
  let file_path = qa_app_sending_path(app_name);
  let noted = await file_exists(file_path);
  if (not(noted)) {
    return null;
  }
  let note = await file_read_json(file_path);
  let pid = property_get(note, "pid");
  let own = process_own_id();
  if (equal(pid, own)) {
    return null;
  }
  let alive = process_alive_seconds_or_null(pid);
  if (equal(alive, null)) {
    return null;
  }
  return pid;
}
