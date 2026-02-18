import { json_format_to } from "../../../love/public/src/json_format_to.mjs";
import { text_take } from "../../../love/public/src/text_take.mjs";
export function json_format_to_truncated(object) {
  let j = json_format_to(object);
  let taken = text_take(j, 10000);
  return taken;
}
