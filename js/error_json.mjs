import { error } from "./error.mjs";
import { json_format_to } from "./json_format_to.mjs";
export function error_json(o) {
  let message = json_format_to(o);
  error(message);
}
