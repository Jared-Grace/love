import { text_take } from "../../../love/public/src/text_take.mjs";
export function json_format_to_truncated(object) {
  let j = JSON.stringify(object, null, 1);
  let taken = text_take(j, 10000);
  return taken;
}
