import { error } from "../../../love/public/src/error.mjs";
import { json_format_to } from "../../../love/public/src/json_format_to.mjs";
export function error_json(o) {
  let message = json_format_to(o);
  error(message);
}
