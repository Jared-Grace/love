import { json_from } from "../../../love/public/src/json_from.mjs";
import { buffer_string_to } from "../../../love/public/src/buffer_string_to.mjs";
export function buffer_to_json(buffer) {
  let text = buffer_string_to(buffer);
  let parsed = json_from(text);
  return parsed;
}
