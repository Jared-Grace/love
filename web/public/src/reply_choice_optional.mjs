import { reply_optional } from "../../../love/public/src/reply_optional.mjs";
import { reply_choice } from "../../../love/public/src/reply_choice.mjs";
export function reply_choice_optional(choices) {
  let c = reply_choice(choices);
  let fn = reply_optional(c);
  return fn;
}
