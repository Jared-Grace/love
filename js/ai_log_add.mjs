import { process_daemon_is } from "./process_daemon_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { date_time_zone_now_iso } from "./date_time_zone_now_iso.mjs";
import { json_to } from "./json_to.mjs";
import { text_combine } from "./text_combine.mjs";
import { ai_log_path } from "./ai_log_path.mjs";
import { file_append } from "./file_append.mjs";
export async function ai_log_add(f_name, args) {
  arguments_assert(arguments, 2);
  ("One line per command run through the seam. The point is the STREAM: a sequence");
  ("that repeats across sessions is a composite worth naming as a single transform,");
  ("and frequency decides which, rather than anyone's memory of what felt common.");
  ("Several conversations run commands here at once, and one of them polling on a");
  ("loop can outnumber all the real work put together. Without the session on each");
  ("line the stream is several streams braided into one, where a repeat is an");
  ("accident of interleaving rather than a habit worth naming.");
  let time = date_time_zone_now_iso();
  let session = process_session_or_null();
  let entry = {
    time,
    session,
    f_name,
    args,
  };
  let line = json_to(entry);
  let text = text_combine(line, "\n");
  let f_path = ai_log_path();
  await file_append(f_path, text);
}
