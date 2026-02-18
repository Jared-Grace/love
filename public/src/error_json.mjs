import { error } from "../../../love/public/src/error.mjs";
import { json_format_to_truncated } from "../../../love/public/src/json_format_to_truncated.mjs";
export function error_json(o) {
  let message = json_format_to_truncated(o);
  error(message);
}
