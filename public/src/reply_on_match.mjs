import { reply_on_match_generic } from "../../../love/public/src/reply_on_match_generic.mjs";
import { noop } from "./noop.mjs";
export function reply_on_match(fn, lambda) {
  let before = noop;
  let after = noop;
  let on_args = noop;
  let matcher = reply_on_match_generic(fn, before, after, on_args, lambda);
  return matcher;
}
