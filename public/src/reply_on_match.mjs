import { log } from "../../../love/public/src/log.mjs";
export function reply_on_match(fn, on_match) {
  let matcher = function reply_on_match_inner(a) {
    let matches = fn(a);
    log({
      matches,
    });
    if (matches) {
      on_match(a);
    }
  };
  return matcher;
}
