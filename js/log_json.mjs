import { json_format_to_truncated } from "./json_format_to_truncated.mjs";
import { log_keep } from "./log_keep.mjs";
export function log_json(f_name, object) {
  "the name comes first, as in the other logging words, so the auto pass writes in the function a call sits in the same way for all of them";
  let message = json_format_to_truncated(object);
  log_keep(log_json.name, message);
}
