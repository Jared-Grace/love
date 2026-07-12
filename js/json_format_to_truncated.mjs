import { json_format_to } from "./json_format_to.mjs";
import { text_take } from "./text_take.mjs";
export function json_format_to_truncated(object) {
  let j = json_format_to(object);
  let taken = text_take(j, 10000);
  return taken;
}
