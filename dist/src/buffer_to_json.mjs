import { json_from } from "../../../love/public/src/json_from.mjs";
import { buffer_text_to } from "../../../love/public/src/buffer_text_to.mjs";
export function buffer_to_json(buffer) {
  let text = buffer_text_to(buffer);
  let parsed = json_from(text);
  return parsed;
}
