import { json_format_to_truncated } from "../../../love/public/src/json_format_to_truncated.mjs";
import { log_keep } from "../../../love/public/src/log_keep.mjs";
export function log_json(right) {
  let message = json_format_to_truncated(right);
  log_keep(message);
}
