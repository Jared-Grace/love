import { list_any } from "../../../love/public/src/list_any.mjs";
import { text_ends_with } from "../../../love/public/src/text_ends_with.mjs";
export function text_ends_with_any(s, suffixes) {
  function lambda6(suffix) {
    let ew = text_ends_with(s, suffix);
    return ew;
  }
  let any = list_any(suffixes, lambda6);
  return any;
}
