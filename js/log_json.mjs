import { log_inner } from "./log_inner.mjs";
import { json_format_to_truncated } from "./json_format_to_truncated.mjs";
export function log_json(f_name, object) {
  "the name comes first, as in the other logging words, so the auto pass writes in the function a call sits in the same way for all of them";
  let message = json_format_to_truncated(object);
  ("handed on to the inner word as the other logging words do - a call to one of them written here would have its name rewritten to this function, and the name of the caller would be lost");
  log_inner(f_name, message);
}
