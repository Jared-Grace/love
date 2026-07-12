import { json_format_to_truncated } from "./json_format_to_truncated.mjs";
import { log_keep } from "./log_keep.mjs";
export function log_json(object) {
  let message = json_format_to_truncated(object);
  log_keep(log_json.name, message);
}
