import { reply_choice } from "../../../love/public/src/reply_choice.mjs";
export function reply_optional(item) {
  let fn = reply_choice([item, ""]);
  return fn;
}
