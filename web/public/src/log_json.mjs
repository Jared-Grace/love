import { json_format_to } from "./json_format_to.mjs";
import { log_keep } from "./log_keep.mjs";
export function log_json(right) {
  let message = json_format_to(right);
  log_keep(message);
}
